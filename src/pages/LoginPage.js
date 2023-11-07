import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

import { client } from '../lib/sanityClient'

const Login = () => {
  const navigate = useNavigate(); // Initialize navigate
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const handleLogin = async () => {
    try {
      // Fetch the user data from Sanity based on the loginEmail
      const userData = await client.fetch(
        `*[_type == 'user' && email == $email && password == $password][0]`,
        { email: loginEmail, password: loginPassword }
      );

      if (userData) {
        // User authenticated, you can store user data in state or context
        // For example, setUser(userData)
        console.log('Login successful');
        navigate('/dashboard'); // Redirect to the dashboard page using navigate
      } else {
        console.log('Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
   <>
     <div>
        <Navigation />
     </div>

        <div className="bg-gray-300 mt-7 mx-6 p-8 rounded shadow-md ">
            <h2 className="text-2xl font-semibold mb-4">Login</h2>
            <div className="mb-4">
                <label>Email</label>
                <input
                type="text"
                className="w-full p-2 border rounded"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label>Password</label>
                <input
                type="password"
                className="w-full p-2 border rounded"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                />
            </div>
            <button
                className="bg-gray-700 text-white p-2 rounded w-full"
                onClick={handleLogin}
            >
                Login
            </button>
            <Link to='registration'>
                <p>No Account Register</p>
            </Link>
        </div>

    <div className='absolute bottom-0 w-screen'>
        <Footer />
    </div>
   </>
  );
};

export default Login;
