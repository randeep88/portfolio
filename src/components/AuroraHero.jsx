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
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;
  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      id="home"
      className="relative w-full grid min-h-screen place-content-center overflow-hidden bg-gray-950 px-4 py-24 text-gray-200"
    >
      <div className="z-50 flex gap-48 items-center justify-center w-full selection:no-underline">
        <div id="hero-1" className="w-[450px]">
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: -20, opacity: 1 }}
            transition={transition}
          >
            <span className="text-3xl">
              <ColourfulText text="Web Developer" className="text-3xl" />
            </span>
          </motion.p>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={transition}
            className="text-black text-4xl text-balance dark:text-gray-300 mb-6 "
          >
            Crafting Stunning Websites & Apps with MERN Stack Magic
          </motion.p>
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 10, x: 50, opacity: 1 }}
            transition={transition}
          >
            <Link className="z-50" smooth to="#about">
              <InteractiveHoverButton />
            </Link>
          </motion.div>
        </div>

        <div id="hero-2">
          <div className="text-gray-300">
            <motion.h1
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: -100, opacity: 1 }}
              transition={transition}
              className="text-black dark:text-gray-300 text-9xl custom-font selection:no-underline"
            >
              Randeep
            </motion.h1>
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 100, opacity: 1 }}
              transition={transition}
              className="text-black dark:text-gray-300 text-9xl custom-font mt-5 selection:no-underline"
            >
              Singh
            </motion.h1>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </div>
    </motion.section>
  );
};
export default AuroraHero;
