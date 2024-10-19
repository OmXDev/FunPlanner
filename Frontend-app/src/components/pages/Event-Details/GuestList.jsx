import React, { useState } from 'react';

const GuestList = ({ onClose }) => {
  const [guestName, setGuestName] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [guests, setGuests] = useState([]);
  const [invitationStatus, setInvitationStatus] = useState([]);

  // Function to add a guest to the list
  const addGuest = () => {
    if (guestName && guestEmail) {
      const newGuest = { name: guestName, email: guestEmail, invited: false };
      setGuests([...guests, newGuest]);
      setInvitationStatus([...invitationStatus, { guest: guestEmail, status: 'Pending' }]);
      setGuestName('');
      setGuestEmail('');
    }
  };

  // Function to simulate sending invitations
  const sendInvitation = (email) => {
    setInvitationStatus(invitationStatus.map(item =>
      item.guest === email ? { ...item, status: 'Sent' } : item
    ));
    alert(`Invitation sent to ${email}`);
  };

  return (
    <div className="fixed inset-0 bg-gray-700 bg-opacity-70 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-6xl  relative min-h-[80vh]">
        <h2 className="text-2xl font-bold mb-6 text-center">Manage Guest List</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          {/* Guest Input Form */}
          <div>
            <input
              type="text"
              value={guestName}
              onChange={(e) => setGuestName(e.target.value)}
              placeholder="Guest Name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 mb-4"
            />
            <input
              type="email"
              value={guestEmail}
              onChange={(e) => setGuestEmail(e.target.value)}
              placeholder="Guest Email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 mb-4"
            />
            <button
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 w-full"
              onClick={addGuest}
              disabled={!guestName || !guestEmail}
            >
              Add Guest
            </button>
          </div>

          {/* Guest List Display */}
          <div className="bg-gray-100 p-4 rounded-lg h-[500px] overflow-y-auto">
            <h3 className="font-medium text-lg mb-4">Guest List</h3>
            {guests.length > 0 ? (
              <ul className="space-y-3">
                {guests.map((guest, index) => (
                  <li key={index} className="flex justify-between items-center p-2 bg-white rounded-lg shadow-sm">
                    <div>
                      <p className="text-lg font-semibold">{guest.name}</p>
                      <p className="text-sm text-gray-500">{guest.email}</p>
                    </div>
                    <div className="flex items-center">
                      <button
                        className={`text-xs px-2 py-1 rounded ${
                          invitationStatus[index].status === 'Sent'
                            ? 'bg-green-100 text-green-600'
                            : 'bg-yellow-100 text-yellow-600'
                        }`}
                        onClick={() => sendInvitation(guest.email)}
                        disabled={invitationStatus[index].status === 'Sent'}
                      >
                        {invitationStatus[index].status === 'Sent' ? 'Sent' : 'Send Invitation'}
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600">No guests added yet.</p>
            )}
          </div>
        </div>

        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
          onClick={onClose}
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default GuestList;
