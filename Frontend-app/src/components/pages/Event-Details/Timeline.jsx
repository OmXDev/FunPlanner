import React, { useState } from 'react';

const Timeline = ({ onClose }) => {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventTime, setEventTime] = useState('');
  const [events, setEvents] = useState([]);

  // Function to add an event to the timeline
  const addEvent = () => {
    if (eventName && eventDate && eventTime) {
      const newEvent = { name: eventName, date: eventDate, time: eventTime };
      setEvents([...events, newEvent]);
      setEventName('');
      setEventDate('');
      setEventTime('');
    }
  };

  // Function to remove an event from the timeline
  const removeEvent = (index) => {
    setEvents(events.filter((_, i) => i !== index));
  };

  return (
    <div className="fixed inset-0 bg-gray-700 bg-opacity-70 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-6xl min-h-[80vh] relative">
        <h2 className="text-2xl font-bold mb-6 text-center">Event Timeline</h2>

        {/* Add Event Section */}
        <div className="mb-6">
          <h3 className="font-medium text-lg mb-4">Add Event</h3>
          <input
            type="text"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            placeholder="Event Name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 mb-4"
          />
          <input
            type="date"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 mb-4"
          />
          <input
            type="time"
            value={eventTime}
            onChange={(e) => setEventTime(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 mb-4"
          />
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 w-full"
            onClick={addEvent}
            disabled={!eventName || !eventDate || !eventTime}
          >
            Add Event
          </button>
        </div>

        {/* Timeline Display */}
        <div className="bg-gray-100 p-4 rounded-lg h-[500px] overflow-y-auto">
          <h3 className="font-medium text-lg mb-4">Event List</h3>
          {events.length > 0 ? (
            <ul className="space-y-3">
              {events.map((event, index) => (
                <li key={index} className="flex justify-between items-center p-2 bg-white rounded-lg shadow-sm">
                  <div>
                    <p className="text-lg font-semibold">{event.name}</p>
                    <p className="text-sm text-gray-500">Date: {event.date} | Time: {event.time}</p>
                  </div>
                  <button
                    className="bg-red-600 text-white px-4 py-1 rounded-lg hover:bg-red-700"
                    onClick={() => removeEvent(index)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600">No events added yet.</p>
          )}
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

export default Timeline;
