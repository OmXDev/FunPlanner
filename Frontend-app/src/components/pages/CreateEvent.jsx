import React, { useState } from 'react';
import SelectPlace from './VenueFinder/SelectPlace.jsx';
import EventType from './VenueFinder/EventType.jsx';
import VenuePopup from './VenuePopup.jsx';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateEvent = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    eventName: '',
    eventDate: '',
    eventType: '', // This will be set through the EventType component
    location: '',
    venue: '',
    description: '',
  });
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleShowVenues = () => {
    if (formData.location && formData.eventType) {
      setIsPopupOpen(true);
    } else {
      alert("Please select both location and event type.");
    }
  };

  const handleSelectVenue = (venueName) => {
    setFormData((prevData) => ({ ...prevData, venue: venueName }));
    setIsPopupOpen(false); // Close the modal after selecting a venue
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Include eventType in the formData
      const dataToSubmit = { ...formData, eventType: formData.eventType };
      const res = await axios.post('http://localhost:8000/api/v1/event/events', dataToSubmit, {
        headers: {
          "Content-Type": 'application/json'
        },
        withCredentials: true
      });

      if (res.data.success) {
        navigate('/event/:id');
        alert(res.data.message); // Replace with your toast implementation
      }
    } catch (error) {
      console.error(error);
      alert('Failed to create event. Please try again.'); // Add an error message here
    }

    console.log('Form submitted:', formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Create Your Event</h2>
        
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Event Name</label>
          <input
            type="text"
            name="eventName"
            value={formData.eventName}
            onChange={handleChange}
            className="mt-1 p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Enter event name"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Event Date</label>
          <input
            type="date"
            name="eventDate"
            value={formData.eventDate}
            onChange={handleChange}
            className="mt-1 p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
        </div>

        {/* EventType component */}
        <EventType 
          eventType={formData.eventType} 
          setEventType={(type) => setFormData({ ...formData, eventType: type })} 
        />

        <SelectPlace location={formData.location} setLocation={(location) => setFormData({ ...formData, location })} />
        
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="mt-1 p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Describe your event"
            rows="4"
            required
          />
        </div>

        <div className="flex justify-between">
          <button 
            type="button" 
            onClick={handleShowVenues} 
            className="bg-blue-600 text-white py-2 px-4 rounded-lg transition duration-200 hover:bg-blue-700"
          >
            Show Venues
          </button>
          <button 
            type="submit" 
            className="bg-green-600 text-white py-2 px-4 rounded-lg transition duration-200 hover:bg-green-700"
          >
            Create Event
          </button>
        </div>

        <VenuePopup 
          isOpen={isPopupOpen} 
          onRequestClose={() => setIsPopupOpen(false)} 
          selectedPlace={formData.location} 
          selectedEventType={formData.eventType} 
          onSelectVenue={handleSelectVenue} // Pass the select venue handler
        />
      </form>
    </div>
  );
};

export default CreateEvent;
