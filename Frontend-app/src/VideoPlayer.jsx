// src/VideoPlayer.jsx
import React from 'react';

const VideoPlayer = () => {
  return (
    <div className="relative w-full h-[70vh] overflow-hidden mt-[60px]"> {/* Adjust the margin here */}
      <video 
        className="absolute top-0 left-0 w-full h-full object-cover" 
        autoPlay 
        loop 
        muted
      >
        <source src="/src/assets/bg-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 flex justify-center items-center h-full">
        <h1 className="text-white text-6xl font-bold animate-fade">Welcome to Event Planner</h1>
      </div>
    </div>
  );
};

export default VideoPlayer;
