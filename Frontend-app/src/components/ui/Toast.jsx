import React from 'react';

const Toast = ({ message, type, onClose }) => {
  return (
    <div className={`fixed top-4 right-4 w-65 p-4 rounded-lg shadow-lg transition-opacity duration-300 ${type === 'success' ? 'bg-green-500 text-white' : 'bg-red-600 text-white'} opacity-100`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <svg
            className={`w-6 h-6 mr-2 ${type === 'success' ? 'text-white' : 'text-white'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            {type === 'success' ? (
              <path d="M10 1a9 9 0 100 18 9 9 0 000-18zm-1 13l-4-4 1.5-1.5L9 10.586l6.5-6.5L17 5l-8 8z" />
            ) : (
              <path d="M10 1a9 9 0 100 18 9 9 0 000-18zm4.5 12.5L11 10.586 7.5 14l-1.5-1.5 3-3-3-3L7.5 4l3 3 3-3 1.5 1.5-3 3 3 3-1.5 1.5z" />
            )}
          </svg>
          <span className="font-semibold">{message}</span>
        </div>
      </div>
    </div>
  );
};

export default Toast;
