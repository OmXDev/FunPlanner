import React, { useState } from 'react';
import Modal from 'react-modal';

const GuestListPopup = ({ isOpen, onRequestClose, onAddGuest, guestList }) => {
  const [guestName, setGuestName] = useState('');

  const handleAddGuest = () => {
    if (guestName) {
      onAddGuest(guestName);
      setGuestName('');
    }
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <h2 className="text-2xl font-semibold">Manage Guest List</h2>
      <input
        type="text"
        value={guestName}
        onChange={(e) => setGuestName(e.target.value)}
        placeholder="Enter guest name"
        className="border rounded p-2 mt-4 w-full"
      />
      <button 
        onClick={handleAddGuest} 
        className="bg-blue-600 text-white py-2 px-4 rounded-lg mt-2"
      >
        Add Guest
      </button>
      <h3 className="mt-4">Guests:</h3>
      <ul>
        {guestList.map((guest, index) => (
          <li key={index}>{guest}</li>
        ))}
      </ul>
      <button onClick={onRequestClose} className="mt-4 bg-red-600 text-white py-2 px-4 rounded-lg">Close</button>
    </Modal>
  );
};

export default GuestListPopup;
