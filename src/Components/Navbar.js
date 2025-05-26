import React, { useState } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = ['ROOMS', 'WELLNESS', 'GASTRO', 'HOTEL', 'EVENTS', 'CONTACT'];

  return (
    <nav className="bg-gradient-to-r from-blue-900 to-blue-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Left: Logo & Title */}
        <div className="flex items-center space-x-4">
          <div className="text-white text-lg font-bold flex items-center space-x-2">
            <div className="w-14 h-14 bg-white text-blue-900 rounded-full flex items-center justify-center font-semibold text-sm">
              LOGO
            </div>
            <span className="text-xl font-bold">Royal Phoenicia</span>
          </div>
        </div>

        {/* Center: Nav Links (Desktop) */}
        <ul className="hidden md:flex space-x-8 text-sm font-medium tracking-wide">
          {navItems.map((item) => (
            <li key={item}>
              <a href="#" className="hover:text-blue-300 transition">{item}</a>
            </li>
          ))}
        </ul>

        {/* Right: Booking Button */}
        <div className="hidden md:block">
          <a
            href="#"
            className="bg-white text-blue-900 px-4 py-2 rounded-full font-semibold shadow hover:bg-blue-100 transition flex items-center space-x-2"
          >
            <FaCalendarAlt />
            <span>Booking</span>
          </a>
        </div>

        {/* Hamburger (Mobile) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 shadow-lg bg-gradient-to-b from-blue-900 to-blue-800">
          <ul className="flex flex-col space-y-2 text-sm font-medium tracking-wide">
            {navItems.map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-blue-300 transition">{item}</a>
              </li>
            ))}
            <li>
              <a
                href="#"
                className="mt-2 bg-white text-blue-900 px-4 py-2 rounded-full font-semibold shadow hover:bg-blue-100 transition inline-flex items-center space-x-2"
              >
                <FaCalendarAlt />
                <span>Booking</span>
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
