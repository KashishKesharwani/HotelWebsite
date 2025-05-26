import React from 'react';
import { FaInstagram, FaFacebookF, FaYoutube, FaTwitter, FaTripadvisor } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row justify-between bg-[#46687D] text-white p-10">
      {/* Left Menu */}
      <div className="mb-8 md:mb-0">
        <ul className="space-y-5 text-2xl font-semibold">
          <li>Rooms</li>
          <li>Wellness</li>
          <li>Gastro</li>
          <li>Hotel</li>
          <li>Events</li>
          <li>Spa & Beauty</li>
          <li>Conference Halls</li>
        </ul>
      </div>

      {/* Center About Section */}
      <div className="mb-8 md:mb-0">
        <h3 className="text-2xl font-semibold mb-4">More about rooms</h3>
        <ul className="space-y-2 text-gray-300">
          <li>120 comfortable rooms</li>
          <li>Luxury suites</li>
          <li>Family rooms</li>
          <li>Executive floors</li>
          <li>Dinings & Buffets</li>
          <li>Seasonal Packages</li>
          <li>Pools & Private Beach</li>
        </ul>
      </div>

      {/* Right Contact Section */}
      <div>
        <h3 className="text-2xl font-semibold mb-4">Wellness & Pools<br />Hotel Royal Phoenicia</h3>
        <p className="text-gray-300 mb-3">
          Building 1288<br />
          Road 3931, Block 339<br />
          Umm Al Hasam – Manama<br />
          Bahrain
        </p>
        <p className="text-gray-300 mb-2">Phone: +973 1730 7307</p>
        <p className="text-gray-300 mb-2">Fax: +973 1730 7309</p>
        <p className="text-gray-300 mb-2">
          <a href="mailto:info@royalphoeniciahotel.com" className="hover:underline">
            info@royalphoeniciahotel.com
          </a>
        </p>
        <p className="text-gray-300 mb-4">
          <a href="#" className="hover:underline">Contacts →</a>
        </p>

        {/* Social Icons */}
        <div className="flex space-x-4 text-gray-300 text-2xl">
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaYoutube /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaTripadvisor /></a>
        </div>

        {/* Additional Info */}
        <div className="mt-6 text-gray-400 text-sm space-y-1">
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
          <p>Careers</p>
          <p>Media Center</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
