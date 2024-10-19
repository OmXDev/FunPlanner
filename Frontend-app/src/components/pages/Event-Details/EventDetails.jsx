import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import GuestList from './GuestList';
import BudgetTracker from './BudgetTracker';
import VendorInfo from './VendorInfo';
import Timeline from './Timeline';
import CheckList from './CheckList';
import Feedback from './Feedback';

const EventDetails = () => {
  const { eventId } = useParams();
  const [eventDetails, setEventDetails] = useState({});
  const [showGuestList, setShowGuestList] = useState(false);
  const [showBudgetTracker, setShowBudgetTracker] = useState(false);
  const [showVendorModal, setShowVendorModal] = useState(false);
  const [showTimelineModal, setShowTimelineModal] = useState(false);
  const [showChecklistModal, setShowChecklistModal] = useState(false);
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);

  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/api/v1/event/${eventId}`);
        setEventDetails(res.data);
      } catch (error) {
        console.error('Error fetching event details:', error);
      }
    };
    fetchEventDetails();
  }, [eventId]);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{eventDetails.eventName}</h1>
        <p className="text-gray-600 mb-2">📅 Date: {eventDetails.eventDate}</p>
        <p className="text-gray-600 mb-2">📍 Venue: {eventDetails.venue}</p>
        <p className="text-gray-600 mb-4">📍 Location: {eventDetails.location}</p>
        <p className="text-gray-600 mb-6">📝 Description: {eventDetails.description}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Guest List Button */}
          <button
            className="flex flex-col items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white py-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            onClick={() => setShowGuestList(true)}
          >
            <span className="text-2xl mb-2">👥</span>
            Manage Guest List
          </button>

          {/* Budget Tracker Button */}
          <button
            className="flex flex-col items-center justify-center bg-gradient-to-r from-green-400 via-blue-500 to-teal-500 text-white py-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            onClick={() => setShowBudgetTracker(true)}
          >
            <span className="text-2xl mb-2">💰</span>
            Budget Tracker
          </button>
          <button
            className="flex flex-col items-center justify-center bg-gradient-to-r from-green-400 via-blue-500 to-teal-500 text-white py-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            onClick={() => setShowVendorModal(true)}
          >
            <span className="text-2xl mb-2">🏢</span>
            Venue & Vendor Info
          </button>

          {/* Other buttons */}
          <button
            className="flex flex-col items-center justify-center bg-gradient-to-r from-purple-400 to-indigo-500 text-white py-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            onClick={() => setShowTimelineModal(true)}
          >
            <span className="text-2xl mb-2">🕒</span>
            Event Timeline
          </button>

          <button
            className="flex flex-col items-center justify-center bg-gradient-to-r from-pink-400 to-yellow-500 text-white py-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            onClick={() => setShowChecklistModal(true)}
          >
            <span className="text-2xl mb-2">📋</span>
            Checklist
          </button>

          <button
            className="flex flex-col items-center justify-center bg-gradient-to-r from-teal-400 to-blue-500 text-white py-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            onClick={() => setShowFeedbackModal(true)}
          >
            <span className="text-2xl mb-2">💬</span>
            Feedback
          </button>
        </div>

        {/* Render feature components based on state */}
        {showGuestList && <GuestList onClose={() => setShowGuestList(false)} />}
        {showBudgetTracker && <BudgetTracker onClose={() => setShowBudgetTracker(false)} />}
        {showVendorModal && <VendorInfo onClose={() => setShowVendorModal(false)} />}
        {showTimelineModal && <Timeline onClose={() => setShowTimelineModal(false)} />}
        {showChecklistModal && <CheckList onClose={() => setShowChecklistModal(false)} />}
        {showFeedbackModal && <Feedback onClose={() => setShowFeedbackModal(false)} />}
      </div>
    </div>
  );
};

export default EventDetails;
