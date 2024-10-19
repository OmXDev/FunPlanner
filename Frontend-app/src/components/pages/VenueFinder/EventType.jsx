// src/components/EventType.jsx
import React from 'react';

const EventType = ({ eventType, setEventType }) => {
  const eventTypes = ["Wedding", "Birthday", "Corporate", "Party"]; // Define your event types here

  return (
    <div className="mb-4">
      <label className="block text-gray-700">Select Event Type</label>
      <select
        name="type"
        value={eventType}
        onChange={(e) => setEventType(e.target.value)}
        className="mt-1 p-2 border rounded w-full"
      >
        <option value="">Select an event type</option>
        {eventTypes.map((type, index) => (
          <option key={index} value={type}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );
};

export default EventType;
