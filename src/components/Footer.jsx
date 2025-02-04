import React from "react";
import logo from "../assets/inverted-logo.png";
import { HashLink as Link } from "react-router-hash-link";

const Footer = () => {
  return (
    <div className="w-full z-50 bg-white dark:bg-black text-black dark:text-gray-300 px-20 py-5 h-20 flex items-center justify-between">
      <div>
        <Link smooth to="#home">
          <img className="w-10" src={logo} />
        </Link>
      </div>
      <h2 className="custom-font text-lg flex items-center gap-3">
        Randeep Singh
      </h2>
    </div>
  );
};

export default Footer;
