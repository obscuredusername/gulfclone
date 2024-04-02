import React, { useState, useEffect } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const Login = () => {
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
        console.log(data.Email)

        if (data.Email===email && data.Password===password){
          navigate('/createpost');
        }

        // Add your logic to handle the fetched data
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

 

  return (
    <div>
      <h2>Login</h2>
      <form>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <div>{error}</div>}
        <button  onClick={fetchData}>Login</button>
      </form>
    </div>
  );
};

export default Login;
