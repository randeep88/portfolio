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
      className="md:w-full cursor-default selection:normal-case p-32 lg:pt-28 w-full md:h-screen lg:screen flex flex-col items-center justify-center bg-black text-gray-300"
    >
      <div className="w-full bg-white dark:bg-black">
        <h1 className="text-center selection:normal-case pointer-events-none lg:whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text lg:text-6xl text-4xl md:text-5xl font-semibold text-transparent dark:from-white dark:to-slate-900/10">
          About
        </h1>
        <div className="md:w-5/6 lg:w-10/12 md:m-auto md:mt-10 flex items-center justify-center lg:mt-14 mt-10">
          <BackgroundGradient>
            <div className="w-80 md:w-full lg:w-[1050px] lg:h-[350px] flex items-center justify-center rounded-[16px] bg-black p-5 lg:!pt-20 sm:p-6">
              <h3 className="text-center md:text-xl lg:text-2xl lg:-mt-12 text-sm font-medium dark:text-gray-300 text-gray-900 ">
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
            </div>
          </BackgroundGradient>
        </div>
      </div>
    </div>
  );
};

export default About;
