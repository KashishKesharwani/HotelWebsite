import React from 'react';

const About = () => {
  return (
    <section className="w-full bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 items-center">
        {/* Left Side: Single Image */}
        <div className="flex-1">
          <img
            src="/hotelimage1.jpg"
            alt="About Royal Phoenicia Hotel"
            className="w-full h-[300px] object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Right Side: About Text */}
        <div className="flex-1 text-gray-800">
          <h2 className="text-3xl font-bold mb-6">About Us</h2>
          <p className="text-lg leading-relaxed">
            <strong>Royal Phoenicia Hotel</strong> is located in XYZ. Offering an outdoor pool and restaurant. Rooms here will provide you with a flat screen TV and air conditioning. There is also an electric kettle. Featuring hair dryer, private bathrooms also come with a bathrobe and slippers. Some rooms have sea view and a pool view. Extras include a minibar. The property offers free parking.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
