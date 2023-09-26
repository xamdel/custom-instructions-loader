import React from 'react';

const Options: React.FC = () => {
  return (
    <div>
      <h1>Settings</h1>
      <label htmlFor="setting1">Enable Feature X:</label>
      <input type="checkbox" id="setting1" />
    </div>
  );
};

export default Options;