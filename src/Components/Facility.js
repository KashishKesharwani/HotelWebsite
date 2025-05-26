import React from 'react';

const facilities = [
  {
    title: 'Fitness Center',
    description:
      'For those looking to maintain their fitness routine while travelling, the hotel offers a well-equipped fitness center.',
    image: '/facilityimage1.jpg',
  },
  {
    title: 'On-site Dining',
    description:
      'The hotel features an on-site restaurant serving a variety of cuisine, offering a diverse dining experience without leaving the premises.',
    image: '/facilityimage2.jpg',
  },
  {
    title: 'Wellness Center & Spa',
    description:
      'Guests can unwind with various spa services, including full body massages, steam rooms, and other spa facilities.',
    image: '/facilityimage3.jpg',
  },
];

const Facility = () => {
  return (
    <section className="w-full py-16 px-6 bg-gray-50">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
        Exceptional gastronomy served in elegant space
      </h2>

      {/* Facility Cards */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6">
        {facilities.map((facility, index) => (
          <div
            key={index}
            className="flex-1 h-80 rounded-xl overflow-hidden shadow-lg relative group"
          >
            {/* Image Background */}
            <div
              className="absolute inset-0 bg-center bg-cover transition-transform duration-500 group-hover:scale-110"
              style={{ backgroundImage: `url(${facility.image})` }}
            ></div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-60 group-hover:bg-opacity-80 transition duration-500 z-10"></div>

            {/* Content */}
            <div className="relative z-20 w-full h-full p-6 flex flex-col justify-center items-start text-white transition-all duration-500">
              <h3 className="text-3xl font-semibold mb-2">{facility.title}</h3>
              <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {facility.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Facility;
