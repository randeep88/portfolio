import React from "react";
import "./CSS/technologies.css";
import react from "../assets/react.svg";
import tailwind from "../assets/tailwind.svg";
import bootstrap from "../assets/bootstrap.svg";
import html from "../assets/html.svg";
import js from "../assets/js.svg";
import css from "../assets/css.svg";
import nodejs from "../assets/nodejs.svg";
import express from "../assets/express.svg";
import github from "../assets/github.svg";
import mongo from "../assets/mongo.svg";
import mysql from "../assets/mysql.svg";

const transition = {
  duration: 1.5,
  delay: 0,
  ease: [0, 0.71, 0.2, 1.01],
};

const Technologies = ({ setIsHovered, setBg }) => {
  return (
    <div className="bg-white dark:bg-black selection:normal-case">
      <h1 className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-6xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
          Technologies
        </h1>

      <div className="m-auto flex gap-16 justify-center mt-10 w-3/4 flex-wrap">
        <div
          onMouseEnter={() => {
            setIsHovered(true);
            setBg("#61DBFB");
          }}
          onMouseLeave={() => {
            setIsHovered(false);
            setBg("#7C3AED");
          }}
          className="card1 bg-white dark:bg-black"
        >
          <img className="w-14" src={react} />
          <div className="card1__content bg-white dark:bg-black">
            <p className="card1__title dark:text-white text-black">React</p>
          </div>
        </div>

        <div
          onMouseEnter={() => {
            setIsHovered(true);
            setBg("#8340e8");
          }}
          onMouseLeave={() => {
            setIsHovered(false);
            setBg("#7C3AED");
          }}
          className="card1 bg-white dark:bg-black border-2 border-[#8340e8]"
        >
          <img className="w-14" src={bootstrap} alt="" />
          <div className="card1__content bg-white dark:bg-black">
            <p className="card1__title dark:text-white text-black">Bootstrap</p>
          </div>
        </div>

        <div
          onMouseEnter={() => {
            setIsHovered(true);
            setBg("#06B6D4");
          }}
          onMouseLeave={() => {
            setIsHovered(false);
            setBg("#7C3AED");
          }}
          className="card1 bg-white dark:bg-black border-2 border-[#06B6D4]"
        >
          <img className="w-14" src={tailwind} alt="" />
          <div className="card1__content bg-white dark:bg-black">
            <p className="card1__title dark:text-white text-black">
              Tailwind CSS
            </p>
          </div>
        </div>

        <div
          onMouseEnter={() => {
            setIsHovered(true);
            setBg("#E34F26");
          }}
          onMouseLeave={() => {
            setIsHovered(false);
            setBg("#7C3AED");
          }}
          className="card1 bg-white dark:bg-black border-2 border-[#E34F26]"
        >
          <img className="w-14" src={html} alt="" />
          <div className="card1__content bg-white dark:bg-black">
            <p className="card1__title dark:text-white text-black">HTML</p>
          </div>
        </div>

        <div
          onMouseEnter={() => {
            setIsHovered(true);
            setBg("#F0DB4F");
          }}
          onMouseLeave={() => {
            setIsHovered(false);
            setBg("#7C3AED");
          }}
          className="card1 bg-white dark:bg-black border-2 border-[#F0DB4F]"
        >
          <img className="w-14" src={js} alt="" />
          <div className="card1__content bg-white dark:bg-black">
            <p className="card1__title dark:text-white text-black">
              JavaScript
            </p>
          </div>
        </div>

        <div
          onMouseEnter={() => {
            setIsHovered(true);
            setBg("#93C5FD");
          }}
          onMouseLeave={() => {
            setIsHovered(false);
            setBg("#7C3AED");
          }}
          className="card1 bg-white dark:bg-black border-2 border-blue-300"
        >
          <img className="w-14" src={css} alt="" />
          <div className="card1__content bg-white dark:bg-black">
            <p className="card1__title dark:text-white text-black">CSS</p>
          </div>
        </div>

        <div
          onMouseEnter={() => {
            setIsHovered(true);
            setBg("#fff");
          }}
          onMouseLeave={() => {
            setIsHovered(false);
            setBg("#7C3AED");
          }}
          className="card1 bg-white dark:bg-black border-2 border-black dark:border-2 dark:border-[#fff]"
        >
          <img className="w-20 dark:invert" src={github} alt="" />
          <div className="card1__content bg-white dark:bg-black">
            <p className="card1__title dark:text-white text-black">Github</p>
          </div>
        </div>

        <div
          onMouseEnter={() => {
            setIsHovered(true);
            setBg("#3c873a");
          }}
          onMouseLeave={() => {
            setIsHovered(false);
            setBg("#7C3AED");
          }}
          className="card1 bg-white dark:bg-black border-2 border-[#3c873a]"
        >
          <img className="w-16" src={nodejs} alt="" />
          <div className="card1__content bg-white dark:bg-black">
            <p className="card1__title dark:text-white text-black">NodeJS</p>
          </div>
        </div>

        <div
          onMouseEnter={() => {
            setIsHovered(true);
            setBg("#fff");
          }}
          onMouseLeave={() => {
            setIsHovered(false);
            setBg("#7C3AED");
          }}
          className="card1 bg-white dark:bg-black border-2 border-black dark:border-2 dark:border-[#fff]"
        >
          <img className="w-20 dark:invert" src={express} alt="" />
          <div className="card1__content bg-white dark:bg-black">
            <p className="card1__title dark:text-white text-black">ExpressJS</p>
          </div>
        </div>

        <div
          onMouseEnter={() => {
            setIsHovered(true);
            setBg("#3c873a");
          }}
          onMouseLeave={() => {
            setIsHovered(false);
            setBg("#7C3AED");
          }}
          className="card1 bg-white dark:bg-black border-2 border-[#3c873a]"
        >
          <img className="w-14" src={mongo} alt="" />
          <div className="card1__content bg-white dark:bg-black">
            <p className="card1__title dark:text-white text-black">MongoDB</p>
          </div>
        </div>

        <div
          onMouseEnter={() => {
            setIsHovered(true);
            setBg("#fff");
          }}
          onMouseLeave={() => {
            setIsHovered(false);
            setBg("#7C3AED");
          }}
          className="card1 bg-white dark:bg-black border-2 border-black dark:border-2 dark:border-[#fff]"
        >
          <img className="w-20 dark:invert" src={mysql} alt="" />
          <div className="card1__content bg-white dark:bg-black">
            <p className="card1__title dark:text-white text-black">MySQL</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
