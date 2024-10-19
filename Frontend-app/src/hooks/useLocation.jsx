import React from 'react';
import { useLocation } from 'react-router-dom';

const SomeComponent = () => {
  const location = useLocation();

  return (
    <div>
      <h1>Current Location</h1>
      <p>{location.pathname}</p>
      {/* You can use location.state or other properties as needed */}
    </div>
  );
};

export default SomeComponent;
