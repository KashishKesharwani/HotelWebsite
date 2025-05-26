import React from 'react';
import { FaCalendarCheck } from 'react-icons/fa';

const packages = [
  {
    season: 'All Season',
    title: 'Family Fun Staycation',
    subtitle: 'From BHD 150 / 4 per person / 2 Nights',
    image: '/package3.jpg',
  },
  {
    season: 'All Season',
    title: 'Royal Weekend Escape Package',
    subtitle: 'From BHD 350 / per person / 2 Nights',
    image: '/package4.jpg',
  },
  {
    season: 'All Season',
    title: 'Luxury Extended Staycation',
    subtitle: 'From BHD 500 / per person / 5 Nights',
    image: '/package5.jpg',
  },
];

const Package = () => {
  return (
    <section className="w-full py-16 px-6 bg-white">
      {/* Section Title */}
      <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Stay Packages</h2>

      {/* Package Row */}
      <div className="w-full max-w-7xl mx-auto flex flex-wrap md:flex-nowrap gap-6 justify-between">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className="flex-1 min-w-[300px] h-[30rem] rounded-xl shadow-lg relative group overflow-hidden"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-center bg-cover transform transition-transform duration-500 group-hover:scale-110"
              style={{ backgroundImage: `url(${pkg.image})` }}
            ></div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>

            {/* Content */}
            <div className="relative z-20 w-full h-full flex flex-col justify-between p-6 text-white">
              <div>
                <p className="text-sm uppercase tracking-widest text-gray-300">{pkg.season}</p>
                <h3 className="text-2xl md:text-3xl font-semibold mt-2">{pkg.title}</h3>
                <p className="text-sm mt-2">{pkg.subtitle}</p>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-4">
                <button className="border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition">
                  More
                </button>

                <div className="relative group">
                  <FaCalendarCheck className="text-2xl cursor-pointer group-hover:text-yellow-400 transition" />
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-black text-white text-xs px-2 py-1 rounded-md transition duration-300 pointer-events-none">
                    Booking
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Package;
