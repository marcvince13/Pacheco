import React, { createContext, useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    window.location.href = '/Profile'; // Replace with the URL of the page you want to navigate to
  };

  return (
    <div class="main">
        <div class="login">
        <label for="chk" aria-hidden="true"> Log In </label>	
    <form onSubmit={handleSubmit}>
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
      <button type="submit">Login</button>
    </form>
    </div>
    </div>
  );
}

export default Login;