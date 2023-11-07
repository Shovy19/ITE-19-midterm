// Registration.js
import React, { useState } from 'react';
import { client } from '../lib/sanityClient'; // Import the Sanity client

const Registration = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistration = async () => {
    try {
      // Create a new user object with the provided data
      const newUser = {
        _type: 'user',
        username,
        email,
        password,
      };

      // Insert the new user data into your Sanity dataset
      await client.create(newUser);

      console.log('Registration successful');
      // You can add a success message or redirect the user to the login page
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <div className="bg-white p-8 rounded shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Sign up</h2>
      <div className="mb-4">
        <label>Username</label>
        <input
          type="text"
          className="w-full p-2 border rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label>Email</label>
        <input
          type="text"
          className="w-full p-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label>Password</label>
        <input
          type="password"
          className="w-full p-2 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button
        className="bg-green-500 text-white p-2 rounded w-full"
        onClick={handleRegistration}
      >
        Sign up
      </button>
    </div>
  );
};

export default Registration;
