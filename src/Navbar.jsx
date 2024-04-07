import React from "react";

const Navbar = () => {
 

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold">Vishesh</div>
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="text-white hover:text-gray-400">Home</a>
          </li>
        <li>
            <a href="/" className="text-white hover:text-gray-400">About</a>
          </li>
          <li>
            <a href="/" className="text-white hover:text-gray-400">Services</a>
          </li>
          <li>
            <button className="text-white hover:text-gray-400">Contact</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
