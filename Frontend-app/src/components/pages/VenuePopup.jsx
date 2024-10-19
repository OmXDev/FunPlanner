// src/components/VenuePopup.jsx
import React from 'react';
import Modal from 'react-modal';

const VenuePopup = ({ isOpen, onRequestClose, selectedPlace, selectedEventType, onSelectVenue }) => {
  const venues = {
    "Gomti Nagar": {
      Birthday: [
        { name: "The Continental", imgUrl: "https://vmnk.gumlet.io/assets/lucknow/hotel-the-continental-charbagh/images/original/hotel-the-continental-charbagh-90sxx.jpg" },
        { name: "Venue 2", imgUrl: "https://via.placeholder.com/200x150" }
      ],
      Wedding: [
        { name: "Hilton Garden Inn", imgUrl: "https://vmnk.gumlet.io/assets/lucknow/hilton-garden-inn-gomti-nagar/images/original/hilton-garden-inn-gomti-nagar-3jwct.jpg" },
        { name: "Hotel Savvy", imgUrl: "https://vmnk.gumlet.io/assets/lucknow/hotel-savvy-grand-gomti-nagar/images/original/hotel-savvy-grand-gomti-nagar-gi1ig.jpg" }
      ],
      Corporate: [
        { name: "Hilton", imgUrl: "https://vmnk.gumlet.io/assets/lucknow/hilton-garden-inn-gomti-nagar/images/original/hilton-garden-inn-gomti-nagar-z4m2b.jpg" }
      ],
      Party: [
        { name: "Mohan Hotel", imgUrl: "https://vmnk.gumlet.io/assets/lucknow/mohan-hotel-charbagh/images/original/mohan-hotel-charbagh-vyzgr.gif" }
      ]
    },
    Alambagh: {
      Birthday: [
        { name: "Unknown", imgUrl: "https://vmnk.gumlet.io/assets/lucknow/ishanika-hotel-gomti-nagar/images/original/ishanika-hotel-gomti-nagar-rq04p.jpg" },
        { name: "Paradise", imgUrl: "https://vmnk.gumlet.io/assets/lucknow/ishanika-hotel-gomti-nagar/images/original/ishanika-hotel-gomti-nagar-kccph.jpg" }
      ],
      Wedding: [
        { name: "The Piccadily", imgUrl: "https://vmnk.gumlet.io/assets/lucknow/the-piccadily-kanpur-road/images/original/the-piccadily-kanpur-road-zhx76.jpg" }
      ],
      Corporate: [
        { name: "Hotel Nika", imgUrl: "https://vmnk.gumlet.io/assets/lucknow/ishanika-hotel-gomti-nagar/images/original/ishanika-hotel-gomti-nagar-nrit4.jpg" }
      ],
      Party: [
        { name: "Gauri", imgUrl: "https://vmnk.gumlet.io/assets/lucknow/ishanika-hotel-gomti-nagar/images/original/ishanika-hotel-gomti-nagar-scauc.jpg" }
      ]
    },
    Telibagh: {
      Birthday: [
        { name: "kalpna hotels", imgUrl: "https://vmnk.gumlet.io/assets/lucknow/ishanika-hotel-gomti-nagar/images/original/ishanika-hotel-gomti-nagar-lxihz.jpg" }
      ],
      Wedding: [
        { name: "Dcorbiz", imgUrl: "https://vmnk.gumlet.io/assets/lucknow/d-corbiz-hotel-gomti-nagar/images/original/d-corbiz-hotel-gomti-nagar-lyt0q.jpg" }
      ],
      Corporate: [
        { name: "Golden Tulip", imgUrl: "https://vmnk.gumlet.io/assets/lucknow/golden-tulip-husain-ganj/images/original/golden-tulip-husain-ganj-tji0y.jpg" }
      ],
      Party: [
        { name: "Greek", imgUrl: "https://vmnk.gumlet.io/assets/lucknow/ishanika-hotel-gomti-nagar/images/original/ishanika-hotel-gomti-nagar-vf4zv.jpg" }
      ]
    },
    "Singar Nagar": {
      Birthday: [
        { name: "Ramnesh", imgUrl: "https://vmnk.gumlet.io/assets/lucknow/ishanika-hotel-gomti-nagar/images/original/ishanika-hotel-gomti-nagar-6ctbv.jpg" }
      ],
      Wedding: [
        { name: "Ishanika", imgUrl: "https://vmnk.gumlet.io/assets/lucknow/ishanika-hotel-gomti-nagar/images/original/ishanika-hotel-gomti-nagar-s7tkl.PNG" }
      ],
      Corporate: [
        { name: "Dayal", imgUrl: "https://vmnk.gumlet.io/assets/lucknow/dayal-paradise-gomti-nagar/images/original/dayal-paradise-gomti-nagar-24sri.jpg" }
      ],
      Party: [
        { name: "Ranjees", imgUrl: "https://vmnk.gumlet.io/assets/lucknow/hotel-ranjees-gomti-nagar/images/original/hotel-ranjees-gomti-nagar-zqoxn.PNG" }
      ]
    }
  };

  const handleVenueSelect = (venueName) => {
    onSelectVenue(venueName);
    onRequestClose(); // Close the modal after selection
  };

  const handleClose = () => {
    onRequestClose();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={handleClose} className="modal">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">Available Venues</h2>
      {selectedPlace && selectedEventType ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {venues[selectedPlace][selectedEventType]?.map((venue, index) => (
            <div
              key={index}
              className="bg-white border rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 p-4 cursor-pointer"
              onClick={() => handleVenueSelect(venue.name)} // Call the select function on click
            >
              <img src={venue.imgUrl} alt={venue.name} className="w-full h-64 object-cover rounded-lg mb-4" />
              <h3 className="text-lg font-semibold text-center text-gray-800">{venue.name}</h3>
              <p className="text-sm text-gray-600 text-center mt-2">Details about {venue.name}</p>
            </div>
          )) || <p className="text-center text-gray-600">No venues available</p>}
        </div>
      ) : (
        <p className="text-center text-gray-600">Please select an event type and location to see available venues.</p>
      )}
      <div className="text-center">
        <button onClick={handleClose} className="mt-6 bg-blue-600 text-white py-2 px-4 rounded transition duration-200 hover:bg-blue-700">
          Close
        </button>
      </div>
    </Modal>
  );
};

export default VenuePopup;
