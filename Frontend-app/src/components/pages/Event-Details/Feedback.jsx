import React, { useState } from 'react';

const Feedback = ({ onClose }) => {
  const [feedbackText, setFeedbackText] = useState('');

  // Function to handle feedback submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (feedbackText) {
      // Here you can handle the feedback submission (e.g., send to an API)
      alert('Feedback submitted: ' + feedbackText);
      setFeedbackText('');
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-700 bg-opacity-70 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg relative">
        <h2 className="text-2xl font-bold mb-4 text-center">Feedback</h2>

        <form onSubmit={handleSubmit}>
          <textarea
            value={feedbackText}
            onChange={(e) => setFeedbackText(e.target.value)}
            placeholder="Your feedback..."
            className="w-full h-32 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 mb-4"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 w-full"
          >
            Submit Feedback
          </button>
        </form>

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

export default Feedback;
