import React, { useState, useEffect } from 'react';

const Home = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [rotation, setRotation] = useState(0);

  const handleTooltipToggle = () => {
    setShowTooltip((prevState) => !prevState);
  };

  // Skills data - your core technologies
  const skills = [
    { name: "React.js", color: "bg-cyan-500" },
    { name: "TypeScript", color: "bg-blue-600" },
    { name: "JavaScript", color: "bg-yellow-500" },
    { name: "HTML", color: "bg-orange-600" },
    { name: "CSS", color: "bg-purple-500" },
    { name: "Node.js", color: "bg-green-500" }
  ];

  // Animate rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => prev + 1);
    }, 100); // Update every 100ms for smooth animation

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home bg-gradient-to-b from-gray-800 via-gray-900 to-black text-white p-4 md:p-20 h-screen flex flex-col justify-center items-center overflow-hidden" id="home">
      
      {/* 3D Rotating Skills Container */}
      <div className="relative w-80 h-80 sm:w-96 sm:h-96 md:w-[500px] md:h-[500px] mb-4 md:mb-8">
        {/* Orbital rings for visual effect */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-80 sm:h-80 md:w-80 md:h-80 border border-gray-600 rounded-full opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-96 sm:h-96 md:w-96 md:h-96 border border-gray-500 rounded-full opacity-10"></div>
        
        {/* Rotating Skills */}
        {skills.map((skill, index) => {
          const angle = (360 / skills.length) * index + rotation;
          const radius = window.innerWidth < 640 ? 120 : window.innerWidth < 768 ? 150 : 180; // Responsive radius
          const x = Math.cos((angle * Math.PI) / 180) * radius;
          const y = Math.sin((angle * Math.PI) / 180) * radius;
          
          return (
            <div
              key={index}
              className="absolute top-1/2 left-1/2 transition-all duration-100 ease-linear"
              style={{
                transform: `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(${-rotation}deg)`,
                zIndex: 10
              }}
            >
              <div className={`${skill.color} px-2 py-1.5 sm:px-3 sm:py-2 md:px-4 md:py-2 rounded-full text-xs sm:text-sm md:text-base font-bold text-white shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-125 whitespace-nowrap border border-white/30`}>
                {skill.name}
              </div>
            </div>
          );
        })}

        {/* Central Profile Image */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
          <div className="rounded-full border-4 border-gray-400 p-2 h-32 w-32 sm:h-40 sm:w-40 md:h-56 md:w-56 hover:scale-110 transform transition-transform duration-300 bg-gradient-to-br from-gray-700 to-gray-800 shadow-2xl">
            <img
              alt="profile"
              loading="lazy"
              src="https://i.imgur.com/QM44mzd.png"
              className="h-full w-full rounded-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center flex-col">
        {/* Intro Section */}
        <div className="text-center mt-4 md:mt-6 px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-200 mb-2">Charan Kumar</h1>
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-200 mt-2">Web Developer</h2>
          <h3 className="text-lg sm:text-xl font-medium mt-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-300 via-gray-400 to-gray-600">
            Building Better Web
          </h3>
        </div>
      </div>

      {/* Resume & Contact Buttons */}
      <div className="mt-8 md:mt-12 flex flex-col sm:flex-row items-center px-4 gap-4">
        <a
          className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gray-300 text-black font-medium rounded-lg shadow-md hover:bg-white transform hover:scale-105 transition-all duration-300 text-center"
          href="https://drive.google.com/file/d/1Pt443WtGPr2wtIWI4SPxlzckljNgsCid/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
          <img
            className="inline-block ml-3 h-5 w-5"
            src="https://img.icons8.com/material-rounded/24/download--v1.png"
            alt="download icon"
          />
        </a>
        <div
          className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gray-300 text-black font-medium rounded-lg shadow-md flex items-center justify-center cursor-pointer hover:bg-white transform hover:scale-105 transition-all duration-300"
          onMouseEnter={handleTooltipToggle}
          onMouseLeave={handleTooltipToggle}
          style={{ position: 'relative' }}
        >
          Contact
          <img
            className="inline-block ml-3 h-5 w-5"
            src="https://img.icons8.com/ios-filled/50/new-post.png"
            alt="contact icon"
          />
          {showTooltip && (
            <div className="tooltip bg-gray-800 text-white text-xs sm:text-sm px-3 sm:px-4 py-2 rounded absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 shadow-lg z-30 whitespace-nowrap">
              be.charankumar@gmail.com
              <br />
              7659067911
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;