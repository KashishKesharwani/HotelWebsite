// import React from 'react';


// const Homepage = () => {
//   return (
//     <div className="font-sans w-full h-screen">
     

//       {/* Hero Section */}
//       <section
//         className="h-screen w-full bg-fixed bg-center bg-cover flex items-center justify-center text-white text-center"
//         style={{
//           backgroundImage: "url('/home image.webp')",
//         }}
//       >
//         <div className="bg-black bg-opacity-50 px-8 py-12 rounded-md shadow-lg">
//           <h1 className="text-4xl md:text-6xl font-bold mb-4">
//             Hotel Royal Phoenicia
//           </h1>
//           <p className="text-md md:text-lg tracking-wide">
//             Your favourite place.Our story
//           </p>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Homepage;


// import React, { useEffect, useState } from 'react';

// const Homepage = () => {
//   const [loaded, setLoaded] = useState(false);

//   useEffect(() => {
//     // trigger transition after mount
//     setLoaded(true);
//   }, []);

//   return (
//     <div className="font-sans w-full h-screen">

//       {/* Hero Section */}
//       <section
//         className={`h-screen w-full bg-fixed bg-center bg-cover flex items-center justify-center text-white text-center transition-all duration-1000 ease-out ${
//           loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
//         }`}
//         style={{
//           backgroundImage: "url('/home image.webp')",
//         }}
//       >
//         <div className="bg-black bg-opacity-50 px-8 py-12 rounded-md shadow-lg transition-opacity duration-1000">
//           <h1 className="text-4xl md:text-6xl font-bold mb-4 transition-opacity duration-1000 delay-300">
//             Hotel Royal Phoenicia
//           </h1>
//           <p className="text-md md:text-lg tracking-wide transition-opacity duration-1000 delay-500">
//             Your favourite place, our story
//           </p>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Homepage;


import React from 'react';

const Homepage = () => {
  return (
    <div className="font-sans w-full h-screen">

      {/* Hero Section */}
      <section
        className="h-screen w-full bg-fixed bg-center bg-cover flex items-center justify-center text-white text-center transition-transform duration-1000 ease-in-out animate-[zoomInOut_10s_ease-in-out_infinite]"
        style={{
          backgroundImage: "url('/home image.webp')",
        }}
      >
        <div className="bg-black bg-opacity-50 px-8 py-12 rounded-md shadow-lg">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 transition duration-1000">
            Hotel Royal Phoenicia
          </h1>
          <p className="text-md md:text-lg tracking-wide transition duration-1000">
            Your favourite place, our story
          </p>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
