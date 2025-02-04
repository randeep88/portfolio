import React from "react";
import logo from "../assets/inverted-logo.png";
import { HashLink as Link } from "react-router-hash-link";

const Footer = () => {
  return (
    <div className="w-full z-50 dark:bg-black dark:text-gray-300 lg:px-20 px-10 mt-10 py-5 h-20 flex items-center justify-between">
      <div>
        <Link smooth to="#home">
          <img className="lg:w-10 w-7" src={logo} />
        </Link>
      </div>
      <h2 className="custom-font lg:text-lg flex items-center gap-3">
        Randeep Singh
      </h2>
    </div>
  );
};

export default Footer;
