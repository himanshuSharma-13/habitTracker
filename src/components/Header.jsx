// Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-500 p-4">
      <nav className="flex items-center justify-between">
        <div className="text-white font-bold text-xl">21 Savage</div>
        {/* <ul className="flex space-x-4">
          <li>
            <a href="#" className="text-white hover:text-gray-300">Home</a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">About</a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">Contact</a>
          </li>
        </ul> */}
      </nav>
    </header>
  );
};

export default Header;
