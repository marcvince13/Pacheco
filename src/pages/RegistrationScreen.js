import React, { useState } from 'react';


export default function RegistrationScreen() {
  const [Firstname, setFirstname] = useState('');
  const [Lastname, setLastname] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



  function handleSubmit(event) {
    event.preventDefault();
  };
  
  return (
    <div class = "main">
    <div class="signUp">
    <form onSubmit={handleSubmit}>
    <label for="chk" aria-hidden="true"> Registration </label>
    <label>
        <input
          placeholder="First Name"
          type="text"
          value={Firstname}
          onChange={(event) => setFirstname(event.target.value)}
        />
      </label>
      <label>
        <input
          placeholder="Last Name"
          type="text"
          value={Lastname}
          onChange={(event) => setLastname(event.target.value)}
        />
      </label>
      <label>
        <input
          placeholder="Username"
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </label>
      <label>
        <input
          placeholder="Email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      <label>
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <button onClick={() => window.location.href = '/Profile'} type="submit">Register</button>
    </form>
    </div>
    </div>
  

  );
}