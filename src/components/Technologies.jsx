import React from "react";
import "./CSS/technologies.css";
import react from "../assets/react.svg";
import tailwind from "../assets/tailwind.svg";
import bootstrap from "../assets/bootstrap.svg";
import html from "../assets/html.svg";
import js from "../assets/js.svg";
import css from "../assets/css.svg";
import nodejs from "../assets/nodejs.svg";
import express from "../assets/Express.svg";
import github from "../assets/github.svg";
import mongo from "../assets/mongo.svg";
import mysql from "../assets/mysql.svg";

const Technologies = () => {
  return (
    <div className="lg:h-screen md:flex md:flex-col md:items-center md:justify-center md:p-20 lg:p-20 cursor-default bg-black selection:normal-case">
      <h1 className="text-center selection:normal-case pointer-events-none lg:whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text lg:text-6xl text-4xl md:text-5xl font-semibold  text-transparent dark:from-white dark:to-slate-900/10">
        Technologies
      </h1>

      <div className="m-auto lg:flex lg:gap-16 flex gap-5 justify-center mt-10 lg:mt-14 lg:w-3/4 md:w-4/6 w-80 flex-wrap">
        <div className="card1 bg-white dark:bg-black w-20 h-20 lg:w-36 lg:h-28">
          <img className="lg:w-14 md:w-9 w-8" src={react} />
          <div className="card1__content bg-white dark:bg-black">
            <p className="card1__title dark:text-white text-black text-sm md:text-base lg:text-xl">
              React
            </p>
          </div>
        </div>

        <div className="card1 bg-white dark:bg-black border-2 border-[#8340e8] w-20 h-20 lg:w-36 lg:h-28">
          <img className="lg:w-16 md:w-10 w-10" src={bootstrap} alt="" />
          <div className="card1__content bg-white dark:bg-black">
            <p className="card1__title dark:text-white text-black text-sm md:text-base lg:text-xl">
              Bootstrap
            </p>
          </div>
        </div>

        <div className="card1 bg-white dark:bg-black border-2 border-[#06B6D4] w-20 h-20 lg:w-36 lg:h-28">
          <img className="lg:w-14 md:w-10 w-9" src={tailwind} alt="" />
          <div className="card1__content bg-white dark:bg-black">
            <p className="card1__title dark:text-white text-black text-sm md:text-base lg:text-xl">
              Tailwind CSS
            </p>
          </div>
        </div>

        <div className="card1 bg-white dark:bg-black border-2 border-[#E34F26] w-20 h-20 lg:w-36 lg:h-28">
          <img className="lg:w-16 md:w-10 w-9" src={html} alt="" />
          <div className="card1__content bg-white dark:bg-black">
            <p className="card1__title dark:text-white text-black text-sm md:text-base lg:text-xl">
              HTML
            </p>
          </div>
        </div>

        <div className="card1 bg-white dark:bg-black border-2 border-[#F0DB4F] w-20 h-20 lg:w-36 lg:h-28">
          <img className="lg:w-16 md:w-10 w-9" src={js} alt="" />
          <div className="card1__content bg-white dark:bg-black">
            <p className="card1__title dark:text-white text-black text-sm md:text-base lg:text-xl">
              JavaScript
            </p>
          </div>
        </div>

        <div className="card1 bg-white dark:bg-black border-2 border-blue-300 w-20 h-20 lg:w-36 lg:h-28">
          <img className="lg:w-16 md:w-10 w-9" src={css} alt="" />
          <div className="card1__content bg-white dark:bg-black">
            <p className="card1__title dark:text-white text-black text-sm md:text-base lg:text-xl">
              CSS
            </p>
          </div>
        </div>

        <div className="card1 bg-white dark:bg-black border-2 border-black dark:border-2 dark:border-[#fff] w-20 h-20 lg:w-36 lg:h-28">
          <img
            className="lg:w-16 md:w-10 w-9 dark:invert"
            src={github}
            alt=""
          />
          <div className="card1__content bg-white dark:bg-black">
            <p className="card1__title dark:text-white text-black text-sm md:text-base lg:text-xl">
              Github
            </p>
          </div>
        </div>

        <div className="card1 bg-white dark:bg-black border-2 border-[#3c873a] w-20 h-20 lg:w-36 lg:h-28">
          <img className="lg:w-16 md:w-10 w-10" src={nodejs} alt="" />
          <div className="card1__content bg-white dark:bg-black">
            <p className="card1__title dark:text-white text-black text-sm md:text-base lg:text-xl">
              NodeJS
            </p>
          </div>
        </div>

        <div className="card1 bg-white dark:bg-black border-2 border-black dark:border-2 dark:border-[#fff] w-20 h-20 lg:w-36 lg:h-28">
          <img
            className="lg:w-16 md:w-10 w-8 dark:invert"
            src={express}
            alt=""
          />
          <div className="card1__content bg-white dark:bg-black lg:w-36 lg:h-28">
            <p className="card1__title dark:text-white text-black text-sm md:text-base lg:text-xl">
              ExpressJS
            </p>
          </div>
        </div>

        <div className="card1 bg-white dark:bg-black border-2 border-[#3c873a] w-20 h-20 lg:w-36 lg:h-28">
          <img className="lg:w-16 md:w-10 w-9" src={mongo} alt="" />
          <div className="card1__content bg-white dark:bg-black">
            <p className="card1__title dark:text-white text-black text-sm md:text-base lg:text-xl">
              MongoDB
            </p>
          </div>
        </div>

        <div className="card1 dark:bg-black border-2 border-black dark:border-2 dark:border-[#fff] w-20 h-20 lg:w-36 lg:h-28">
          <img
            className="lg:w-20 md:w-10 w-10 dark:invert"
            src={mysql}
            alt=""
          />
          <div className="card1__content bg-white dark:bg-black lg:w-36 lg:h-28">
            <p className="card1__title dark:text-white text-black text-sm md:text-base lg:text-xl">
              MySQL
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
