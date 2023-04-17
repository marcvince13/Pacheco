import React, { useState } from 'react';

function StatusScreen() {
  const [status, setStatus] = useState('in-progress');

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  return (
    <div>
      <h1>Service Project Status</h1>
      <label htmlFor="status-select">Status:</label>
      <select id="status-select" value={status} onChange={handleStatusChange}>
        <option value="in-progress">In Progress</option>
        <option value="completed">Completed</option>
        <option value="delayed">Delayed</option>
      </select>
      <p>Current status: {status}</p>
    </div>
  );
}

export default StatusScreen;