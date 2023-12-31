import React, { useState } from 'react';

const Home = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleTooltipToggle = () => {
    setShowTooltip((prevState) => !prevState);
  };

  return (
    <div className="Home bg-amber-950 mt-16 target: p-20 h-screen h-auto flex flex-col justify-center items-center" id="home">
      <div className="flex lg:justify-center items-center">
        <div className="lg:flex lg:justify-center lg:items-center">
          <div className="rounded-full border border-beige flex justify-center items-center lg:h-56 lg:w-56 sm:h-10 sm:w-10 md:h-32 md:w-32 rounded-full hover:scale-110 transform hover:scale-110 transition-transform duration-300">
            <img
              alt="profileImage"
              loading="lazy"
              src="https://i.imgur.com/QM44mzd.png"
              title="source: imgur.com"
              className="lg:h-40 lg:w-40 sm:h-10 sm:w-10 md:h-32 md:w-32 rounded-full"
            />
          </div>
          <div className="py-10 lg:px-20">
            <h1 className="text-beige font-mono text-3xl font-bold">Web developer</h1>
            <h2 className="text-beige font-mono text-xl font-bold text-gradient py-2">Building Better Web</h2>
          </div>
        </div>
      </div>
      <div className="resume-contact lg:mt-32  mt-6 flex flex-row items-center">
        <a
          className="px-10 py-4 lg:py-4 w-13 bg-beige font-mono rounded-md flex justify-center items-center hover:scale-110 transform hover:scale-110 transition-transform duration-300"
          href="https://drive.google.com/file/d/1zIot4ll_S_BQOuNKQ9tgjdk3FgSveMy9/view"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="inline-block">Resume</span>
          <img
            className="inline-block ml-4 h-4 w-4 "
            width="24"
            height="24"
            src="https://img.icons8.com/material-rounded/24/download--v1.png"
            alt="download--v1"
          />
        </a>
        <div
          className="px-10 py-4 ml-4 lg:py-4 w-13 bg-beige font-mono font-medium rounded-md flex justify-center items-center hover:scale-110 transform hover:scale-110 transition-transform duration-300 tooltip-trigger"
          onMouseEnter={handleTooltipToggle}
          onMouseLeave={handleTooltipToggle}
          style={{ position: 'relative', zIndex: 2 }}
        >
          <p className="inline-block">Contact</p>
          <img
            className="inline-block ml-4 h-4 w-4"
            width="50"
            height="50"
            src="https://img.icons8.com/ios-filled/50/new-post.png"
            alt="new-post"
          />
          {showTooltip && (
            <div className="tooltip bg-amber-950 text-beige text-sm px-2 py-1 rounded absolute z-10 right-0 transform transition-transform duration-300 slide-from-right">
              be.charankumar@gmail.com
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
