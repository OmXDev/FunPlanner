import React from 'react';
import Popup from './Popup';
import { useState } from 'react';

const eventsData = [
  {
    id: 1,
    title: 'Music Festival',
    date: 'March 15, 2024',
    location: 'Central Park',
    imgUrl: "https://veeragroup.com/wp-content/uploads/2023/11/live-music-festival-in-goa.jpg",
    description: 'Join us for an unforgettable day of music, food, and fun with top artists.',
  },
  {
    id: 2,
    title: 'Art Exhibition',
    date: 'April 10, 2024',
    location: 'Art Gallery',
    imgUrl: "https://mariaankotzeart.co.za/wp-content/uploads/2017/08/Opening-exhibition-1-1.jpg",
    description: 'Explore the latest works from emerging artists and enjoy a night of creativity.',
  },
  {
    id: 3,
    title: 'Tech Conference',
    date: 'May 25, 2024',
    location: 'Convention Center',
    imgUrl: "https://merehead.com/blog/wp-content/uploads/65656565656565.png",
    description: 'Network with industry leaders and gain insights into the latest technology trends.',
  },
];

const Events = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleLoadMore = (event) => {
    setSelectedEvent(event);
    setPopupOpen(true);
  };

  return (
    <div className="py-12 bg-gray-50">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Upcoming Events</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
        {eventsData.map(event => (
          <div key={event.id} className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
            <img src={event.imgUrl} alt={event.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">{event.title}</h3>
              <p className="text-gray-500">{event.date}</p>
              <p className="text-gray-500">{event.location}</p>
              <p className="text-gray-600 mt-2">{event.description}</p>
              <button
                className="mt-4 bg-gradient-to-r from-purple-500  to-pink-500 text-white px-4 py-2 rounded-md hover:shadow-lg transition duration-300"
                onClick={() => handleLoadMore(event)}
              >
                Load More
              </button>
            </div>
          </div>
        ))}
      </div>

      {popupOpen && (
        <Popup event={selectedEvent} onClose={() => setPopupOpen(false)} />
      )}
    </div>
  );
};

export default Events;