import React from "react";
import Socials from "./Socials";
import Hero from "./Hero";
import "../App.css";
import AuroraHero from "./AuroraHero";

const Main = ({setIsHovered, setBg}) => {
  return (
    <div className="-z-10 flex items-center h-screen">
      <Socials />
      <AuroraHero setIsHovered={setIsHovered} setBg={setBg} />
    </div>
  );
};

export default Main;
