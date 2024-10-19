// src/components/SelectPlace.jsx
import React from 'react';

const SelectPlace = ({ location, setLocation }) => {
  const places = ["Gomti Nagar", "Alambagh", "Telibagh", "Singar Nagar"]; // Define your places here

  return (
    <div className="mb-4">
      <label className="block text-gray-700">Select Location</label>
      <select
        name="location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="mt-1 p-2 border rounded w-full"
      >
        <option value="">Select a place</option>
        {places.map((place, index) => (
          <option key={index} value={place}>
            {place}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectPlace;
