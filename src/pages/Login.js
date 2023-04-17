import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div class="main">
        <div class="login">
        <label  for="chk" aria-hidden="true"> Log In </label>	
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
      <div class="ForgotPassword">
      <center> <Link to="/forgotPassword">Forgot your password?</Link></center>
      </div>
      
      <button onClick={() => window.location.href = '/Profile'} type="submit">Login</button>
    </form>
    </div>
    </div>
  );
}

export default Login;