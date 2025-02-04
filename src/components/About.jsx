import React from "react";
import "../App.css";
import { BackgroundGradient } from "./BgGradient";
import { SimpleCard_V2 } from "./card";

const transition = {
  duration: 1.5,
  delay: 0,
  ease: [0, 0.71, 0.2, 1.01],
};

const About = ({ setIsHovered, setBg }) => {
  return (
    <div
      id="about"
      className="cursor-default selection:normal-case pt-28 w-full h-screen bg-white dark:bg-black text-black dark:text-gray-300"
    >
      <div className="-z-[] w-full h-screen bg-white dark:bg-black">
        <h1 className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-6xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
          About
        </h1>
        <div className="w-full flex items-center justify-center mt-14">
          <BackgroundGradient>
            <div className="w-[1050px] h-[350px] flex items-center justify-center rounded-[16px] bg-white dark:bg-black p-4 !pt-20 sm:p-6">
              <SimpleCard_V2>
              <h3 className="mt-0.5 text-2xl font-medium dark:text-gray-300 text-gray-900 ">
                Hi, I’m Randeep Singh, a passionate MERN Stack Developer who
                loves crafting beautiful, high-performing websites and web
                applications. With expertise in MongoDB, Express.js, React, and
                Node.js, I specialize in building seamless user experiences and
                scalable solutions. I enjoy turning ideas into reality with
                clean, efficient code and intuitive design. Whether it's
                front-end magic or back-end logic, I thrive on the creative
                process of web development. Constantly learning and evolving, I
                stay updated with the latest trends to deliver modern,
                innovative digital solutions. Let's create something amazing
                together!
              </h3>
              </SimpleCard_V2>
            </div>
          </BackgroundGradient>
        </div>
      </div>
    </div>
  );
};

export default About;
