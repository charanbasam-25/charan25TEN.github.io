import React, { useState } from 'react';

const Home = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleTooltipToggle = () => {
    setShowTooltip((prevState) => !prevState);
  };

  return (
    <div className="home bg-gradient-to-b from-gray-800 via-gray-900 to-black text-white p-20 h-screen flex flex-col justify-center items-center" id="home">
      <div className="flex justify-center items-center flex-col md:flex-row">
        {/* Profile Image Section */}
        <div className="rounded-full border-4 border-gray-500 p-2 md:h-56 md:w-56 h-40 w-40 hover:scale-110 transform transition-transform duration-300">
          <img
            alt="profile"
            loading="lazy"
            src="https://i.imgur.com/QM44mzd.png"
            className="h-full w-full rounded-full"
          />
        </div>
        {/* Intro Section */}
        <div className="text-center md:text-left md:ml-10 mt-6 md:mt-0">
          <h1 className="text-5xl font-extrabold text-gray-200">Charan Kumar</h1>
          <h2 className="text-3xl font-semibold text-gray-200 mt-2">Web Developer</h2>
          <h3 className="text-xl font-medium mt-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-300 via-gray-400 to-black">
            Building Better Web
          </h3>
        </div>
        </div>
        {/* Resume & Contact Buttons */}
      <div className="mt-12 flex flex-col md:flex-row items-center">
        <a
          className="px-8 py-4 mx-2 bg-gray-300 text-black font-medium rounded-lg shadow-md hover:bg-white transform hover:scale-105 transition-transform duration-300"
          href="https://drive.google.com/file/d/14ThTD1RQxyA7biehfnuvdRw2qohZqjK-/view?usp=sharing"
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
          className="px-8 py-4 mx-2 bg-gray-300 text-black font-medium rounded-lg shadow-md flex items-center cursor-pointer hover:bg-white transform hover:scale-105 transition-transform duration-300"
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
            <div className="tooltip bg-gray-800 text-white text-sm px-4 py-2 rounded absolute top-0 transform -translate-y-full mt-2 shadow-lg">
              be.charankumar@gmail.com
              <br />
              7659067911
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
