import React from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion"; // add this
import logo from "../images/logoP.jpeg";

const Header = () => {
  const params = useParams();
  console.log(params, "params----");

  return (
    <header className="fixed top-0 w-full z-10 bg-gradient-to-r from-gray-100 to-gray-300">
      <nav className="header-component grid grid-flow-col items-center py-4 px-6 font-sans font-semibold h-16 shadow-lg">
        <Link to="/" className="flex items-center lg:px-20">
          <span className="logo col-span-2">
            <a href="https://imgur.com/VoXXPs1">
              {/* Animated Logo */}
              <motion.img
                loading="lazy"
                className="w-16 h-16 rounded-full shadow-lg"
                alt="logo"
                src={logo}
                title="source: imgur.com"
                animate={{ rotate: [0, 360] }}
                transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                whileHover={{ scale: 1.2, rotate: 15 }} // fun hover effect
              />
            </a>
          </span>
        </Link>

        <ul className="all-routes flex justify-end items-center lg:px-20 space-x-6">
          <Link to="/">
            <li className="text-gray-800 hover:text-black transition-all duration-300 px-4 py-2">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="text-gray-800 hover:text-black transition-all duration-300 px-4 py-2">
              About
            </li>
          </Link>
          <Link to="/projects">
            <li className="text-gray-800 hover:text-black transition-all duration-300 px-4 py-2">
              Projects
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
