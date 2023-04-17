import React from 'react';

function ProfileScreen(props) {
  const name = "John Doe";
  const age = 25;
  const email = "";
  const hobbies = ["reading", "swimming", "hiking"];

  return (
    <div>
      <h1>{name}</h1>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
      <h2>Hobbies:</h2>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
      <button className="dashboard-button" onClick={() => window.location.href = '/ReviewScreen'} type="text" style={{width: '60%', height: '55px'}}>Done</button>

    </div>
  );
}


export default ProfileScreen;