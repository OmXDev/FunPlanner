// src/Popup.jsx
import React from 'react';

const Popup = ({ event, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-3xl w-full">
        <h3 className="text-xl font-semibold">{event.title}</h3>
        <img src={event.imgUrl} alt={event.title} className="w-full h-72 object-cover rounded-lg mt-4" />
        <p className="mt-2">{event.description}</p>
        <p className="mt-2 font-bold">{event.date}</p>
        <button className="mt-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-md hover:shadow-lg transition duration-300" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;
