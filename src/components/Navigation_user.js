import React, { useState } from 'react';
import { Link } from 'react-router-dom'

import profile from '../images/profile.jpg'

const Navigation_user = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-700 px-7 py-4">
      <div className="flex items-center justify-between">
        <Link to='/'>
        <div className="flex items-center">
          <img 
            src={profile}
            alt="profile"
            className='w-10 h-10 rounded-md'
          />
          <span className="text-white text-2xl ml-2">Ian Express</span>
        </div>
        </Link>
       

        <div className="hidden md:flex space-x-2">
          <a href="#" className="text-white hover:bg-slate-300 px-5 rounded-md py-2">Home</a>
          <a href="#" className="text-white hover:bg-slate-300 px-5 rounded-md py-2">About</a>
          <Link to='/Login'><p className="text-white hover:bg-slate-300 px-5 rounded-md py-2">Logout</p></Link>
        </div>

        {/* Mobile menu (visible on small screens) */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white hover:text-gray-200 focus:outline-none "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu items */}
      {isOpen && (
        <div className="md:hidden mt-4 text-center">
          <a href="#" className="block text-white py-2">Home</a>
          <a href="#" className="block text-white py-2">About</a>
          <Link to='/'>
            <p className="block text-white py-2">Logout</p>
          </Link>
       
        </div>
      )}
    </nav>
  );
};

export default Navigation_user;
