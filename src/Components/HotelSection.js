// import React, { useState, useEffect } from 'react';

// const hotelFeatures = [
//   { image: '/hotelimage1.jpg' },
//   { image: '/hotelimage2.jpg' },
//   { image: '/hotelimage3.jpg' },
  
// ];

// const captionText =
//   "Favorite Hotel Business and event spaces Diverse dining options Multiple swimming pools Family-friendly amenities";

// const Hotel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) =>
//         prev === hotelFeatures.length - 1 ? 0 : prev + 1
//       );
//     }, 3000); // change every 3 seconds

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="w-full py-16 px-6 bg-gray-100 flex flex-col items-center">
//       {/* Heading */}
//       <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Hotel</h2>

//       {/* Slideshow container */}
//       <div className="relative w-full max-w-4xl h-110 rounded-lg overflow-hidden shadow-lg">
//         {/* Current slide image */}
//         <img
//           src={hotelFeatures[currentIndex].image}
//           alt="Hotel Slide"
//           className="w-full h-full object-cover"
//         />

//         {/* Fixed text box centered on slideshow */}
//         <div
//           className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
//                      bg-black bg-opacity-70 text-white px-8 py-4 rounded-md text-center text-lg font-semibold max-w-3xl"
//         >
//           {captionText}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hotel;

// import React, { useState, useEffect } from 'react';

// const hotelFeatures = [
//   { image: '/hotelimage1.jpg' },
//   { image: '/hotelimage2.jpg' },
//   { image: '/hotelimage3.jpg' },
//   { image: '/hotelimage1.jpg' },
//   { image: '/hotelimage2.jpg' },
// ];

// const captionText =
//   "Favorite Hotel Business and event spaces Diverse dining options Multiple swimming pools Family-friendly amenities";

// const hoverBoxes = [
//   {
//     label: "Room",
//     image: "/room.jpg", // replace with actual room image path
//   },
//   {
//     label: "Pool",
//     image: "/pool.jpg", // replace with actual pool image path
//   },
//   {
//     label: "Dining",
//     image: "/dining.jpg", // replace with actual dining image path
//   },
// ];

// const Hotel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) =>
//         prev === hotelFeatures.length - 1 ? 0 : prev + 1
//       );
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="w-full py-16 px-6 bg-gray-100 flex flex-col items-center">
//       {/* Heading */}
//       <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Hotel</h2>

//       {/* Slideshow container */}
//       <div className="relative w-full max-w-4xl h-96 rounded-lg overflow-hidden shadow-lg mb-20">
//         <img
//           src={hotelFeatures[currentIndex].image}
//           alt="Hotel Slide"
//           className="w-full h-full object-cover"
//         />
//         <div
//           className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
//                      bg-black bg-opacity-70 text-white px-8 py-4 rounded-md text-center text-lg font-semibold max-w-3xl"
//         >
//           {captionText}
//         </div>
//       </div>

//       {/* Flexbox for Room, Pool, Dining */}
//       <div className="flex justify-center gap-10 max-w-4xl w-full">
//         {hoverBoxes.map((box, index) => (
//           <div
//             key={index}
//             className="relative w-64 h-48 border border-gray-300 rounded-lg cursor-pointer flex items-center justify-center
//                        bg-gray-200 overflow-hidden"
//             onMouseEnter={() => setHoveredIndex(index)}
//             onMouseLeave={() => setHoveredIndex(null)}
//           >
//             {/* Label (shown only if NOT hovered) */}
//             {!hoveredIndex === index && (
//               <span className="text-2xl font-semibold text-gray-800 z-10">
//                 {box.label}
//               </span>
//             )}

//             {/* Image (shown only if hovered) */}
//             {hoveredIndex === index && (
//               <img
//                 src={box.image}
//                 alt={box.label}
//                 className="absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-300"
//               />
//             )}

//             {/* To fix label showing underneath image on hover */}
//             {hoveredIndex !== index && (
//               <span className="absolute text-2xl font-semibold text-gray-800 z-10">
//                 {box.label}
//               </span>
//             )}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Hotel;


import React, { useState, useEffect } from 'react';

const hotelFeatures = [
  { image: '/hotelimage1.jpg' },
  { image: '/hotelimage2.jpg' },
  { image: '/hotelimage3.jpg' },
  { image: '/hotelimage1.jpg' },
  { image: '/hotelimage2.jpg' },
];

const captionText =
  "Favorite Hotel Business and event spaces Diverse dining options Multiple swimming pools Family-friendly amenities";

const hoverBoxes = [
  {
    label: "Room",
    image: "/Room.jpg", // replace with your real path
  },
  {
    label: "Pool",
    image: "/pool.avif",
  },
  {
    label: "Dining",
    image: "/Dining.jpg",
  },
];

const Hotel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === hotelFeatures.length - 1 ? 0 : prev + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full py-16 px-6 bg-gray-100 flex flex-col items-center">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Hotel</h2>

      {/* Slideshow */}
      <div className="relative w-full max-w-4xl h-96 rounded-lg overflow-hidden shadow-lg mb-20">
        <img
          src={hotelFeatures[currentIndex].image}
          alt="Hotel Slide"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                     bg-black bg-opacity-70 text-white px-8 py-4 rounded-md text-center text-lg font-semibold max-w-3xl"
        >
          {captionText}
        </div>
      </div>

      {/* Bigger flex boxes with justify-between */}
      <div className="flex justify-between max-w-6xl w-full gap-6">
        {hoverBoxes.map((box, index) => (
          <div
            key={index}
            className="relative flex-1 h-56 border border-gray-300 rounded-lg cursor-pointer flex items-center justify-center
                       bg-gray-200 overflow-hidden"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Label */}
            {!hoveredIndex === index && (
              <span className="text-3xl font-semibold text-gray-800 z-10">
                {box.label}
              </span>
            )}

            {/* Image */}
            {hoveredIndex === index && (
              <img
                src={box.image}
                alt={box.label}
                className="absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-300"
              />
            )}

            {/* Fix label visibility */}
            {hoveredIndex !== index && (
              <span className="absolute text-3xl font-semibold text-gray-800 z-10">
                {box.label}
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hotel;
