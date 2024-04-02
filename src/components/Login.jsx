import React, { useState } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './Login.css'; // Import CSS file for styling

const Login = () => {

  console.log("??")

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Your data fetching logic goes here
  const fetchData = async () => {

    try {
      const db = getDatabase();
      const loginRef = ref(db, 'login');

      onValue(loginRef, (snapshot) => {
        const data = snapshot.val();
        // Check if user credentials are valid
        if (data && data.Email === email && data.Password === password) {
          navigate('/createpost'); // Navigate to createpost route on successful login
        } else {
          setError('Invalid email or password');
        }
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form">
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <div className="error-message">{error}</div>}
        <button className="login-btn" onClick={fetchData}>Login</button>
      </form>
    </div>
  );
};

export default Login;
