import React, { useState } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';
import { auth } from '../firebase'; // Import Firebase authentication
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {


    const navigate = useNavigate(); // Initialize useNavigate

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Authenticate user with email and password
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/Main');
      // Redirect user to dashboard or another page upon successful login

    } catch (error) {
      setError(error.message);
    }
  };

  // Fetching data from Firebase Realtime Database
  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = getDatabase(app);
        const loginRef = ref(db, 'login');

        onValue(loginRef, (snapshot) => {
          const data = snapshot.val();
          if (data) {
            // Check if email and password match
            const userData = Object.values(data);
            const user = userData.find((user) => user.Email === email && user.Password === password);

            if (user) {
              // If user is found, proceed with authentication
              handleLogin();
            } else {
              setError('Invalid email or password');
            }
          } else {
            setError('No users found');
          }
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [email, password]);

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
