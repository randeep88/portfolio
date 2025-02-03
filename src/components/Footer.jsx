import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full z-50 bg-white dark:bg-black text-black dark:text-gray-300 px-20 py-5 h-20 flex items-center justify-between">
      <Link smooth to="#home">
        <img
          className="w-10 dark:invert"
          src={logo}
        />
      </Link>
      <h2
        onMouseEnter={() => {
          setIsHovered(true);
          setBg("white");
        }}
        onMouseLeave={() => {
          setIsHovered(false);
          setBg("#7C3AED");
        }}
        className="custom-font text-lg flex items-center gap-3"
      >
        Randeep Singh
      </h2>
    </div>
  );
};

export default Footer;
