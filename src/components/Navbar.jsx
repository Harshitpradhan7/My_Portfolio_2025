import React from 'react'

const Navbar = () => {

  return (
    <nav className="bg-gradient-to-r from-gray-900 to-gray-800 sticky top-0 z-50 p-1 w-screen rounded shadow-lg shadow-gray-700">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          <div className="flex-shrink-0">
            <a href="/" className="text-white text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 p-2 rounded-full">
              HP
            </a>
          </div>

          <div className="ml-10 flex items-baseline space-x-4">
            <a
              href="/home"
              className="text-gray-300 hover:bg-gray-900 hover:text-white px-3 py-2 rounded-md font-medium text-lg "
            >
              Home
            </a>
            <a
              href="/project"
              className="text-gray-300 hover:bg-gray-900 hover:text-white px-3 py-2 rounded-md text-lg font-medium"
            >
              Projects
            </a>
            <a
              href="/contact"
              className="text-gray-300 hover:bg-gray-900 hover:text-white px-3 py-2 rounded-md text-lg font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
