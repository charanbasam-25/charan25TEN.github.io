import React from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../images/logoP.jpeg";

const Header = () => {
  const params = useParams();
  console.log(params, "params----");

  return (
    <header className="fixed top-0 w-full z-50 bg-black border-b border-green-500 shadow-[0_0_10px_#00ff41]">
      <nav className="header-component grid grid-flow-col items-center py-4 px-6 font-mono font-bold h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center lg:px-20">
          <motion.img
            loading="lazy"
            className="w-16 h-16 rounded-full border-2 border-green-500 shadow-[0_0_15px_#00ff41]"
            alt="logo"
            src={logo}
            animate={{ rotate: [0, 360] }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
            whileHover={{ scale: 1.2, rotate: 15 }}
          />
        </Link>

        {/* Nav links */}
        <ul className="all-routes flex justify-end items-center lg:px-20 space-x-8">
          {["Home", "About", "Projects"].map((item, i) => (
            <Link key={i} to={item === "Home" ? "/" : `/${item.toLowerCase()}`}>
              <motion.li
                className="text-green-400 hover:text-green-300 transition-all duration-300 px-4 py-2 relative group"
                whileHover={{ scale: 1.2 }}
              >
                {item}
                {/* Glowing underline */}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-green-500 group-hover:w-full transition-all duration-500"></span>
              </motion.li>
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
