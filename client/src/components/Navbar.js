import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          NGO Management
        </div>
        <div className="space-x-4">
          <Link to="/" className="text-white hover:text-gray-300">Home</Link>
          <Link to="/volunteering" className="text-white hover:text-gray-300">Volunteering</Link>
          <Link to="/stories" className="text-white hover:text-gray-300">Stories</Link>
          <Link to="/community" className="text-white hover:text-gray-300">Community</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;