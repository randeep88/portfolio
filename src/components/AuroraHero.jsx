"use client";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect } from "react";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";
import "../App.css";
import { HashLink as Link } from "react-router-hash-link";
import { ColourfulText } from "./ColourfulText";
import { InteractiveHoverButton } from "./InteractiveHoverButton";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

const transition = {
  duration: 1.5,
  delay: 0.5,
  ease: [0, 0.71, 0.2, 1.01],
};
const AuroraHero = () => {
  const color = useMotionValue(COLORS_TOP[0]);
  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      id="home"
      className="w-full h-screen z-10 cursor-default relative grid min-h-screen place-content-center overflow-hidden bg-black px-4 py-24 text-gray-200"
    >
      <div className="z-50 md:mt-20 lg:flex lg:flex-row flex flex-col-reverse lg:gap-48 md:gap-20 gap-20 lg:text-left text-center md:text-center items-center justify-center w-full selection:no-underline">
        <div id="hero-1" className="lg:w-[450px] md:w-96">
          <p className="lg:mb-4 md:mb-3 mb-1">
            <span className="lg:text-3xl md:text-3xl text-2xl">
              <ColourfulText text="Web Developer" />
            </span>
          </p>
          <p className=" lg:text-4xl text-balance text-gray-300 mb-6 md:text-4xl text-3xl">
            Crafting Stunning Websites & Apps with MERN Stack Magic
          </p>
          <div className="text-center flex justify-center lg:justify-start">
            <Link className="cursor-pointer" smooth to="#about">
              <InteractiveHoverButton />
            </Link>
          </div>
        </div>

        <div id="hero-2">
          <div className="text-gray-300">
            <h1 className="text-gray-300 lg:text-9xl md:text-8xl text-7xl custom-font selection:no-underline">
              Randeep
            </h1>
            <h1 className="lg:ms-40 text-gray-300 lg:text-9xl md:text-8xl text-7xl custom-font mt-5 selection:no-underline">
              Singh
            </h1>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={50} count={2100} factor={4} fade speed={2} />
        </Canvas>
      </div>
    </motion.section>
  );
};
export default AuroraHero;
