import { useEffect, useRef, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import music from "../assets/music.mp3";
import "../App.css/";
import { motion } from "motion/react";
import { Links, useLocation } from "react-router-dom";
import logo from "../assets/inverted-logo.png";
import { div } from "framer-motion/client";

const Navbar = () => {
  const location = useLocation();
  const [isPlaying, setIsPlaying] = useState(false);
  const [showToolTip, setShowToolTip] = useState(false);
  const [isOpened, setIsOpened] = useState(false);

  const handleThreeLines = () => {
    setIsOpened(true);
  };

  const handleCross = () => {
    setIsOpened(false);
  };

  const audioRef = useRef(music);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
    audioRef.current.volume = 0.5;
  };

  useEffect(() => {
    setTimeout(() => {
      setShowToolTip(true);
      setTimeout(() => {
        setShowToolTip(false);
      }, 4000);
    }, 3000);
  }, []);

  const transition = {
    duration: 0.8,
    delay: 0.5,
    ease: [0, 0.71, 0.2, 1.01],
  };

  return (
    <div className="z-[9999] w-full flex items-center justify-center selection:no-underline">
      <motion.div
        animate={{ y: 90 }}
        transition={transition}
        id="navbar"
        className="w-11/12 fixed -top-20 bg-neutral-300 text-white bg-opacity-10 backdrop-blur-lg z-50 h-16 md:h-16 lg:h-20 flex items-center lg:justify-around md:justify-around justify-between px-4 rounded-3xl"
      >
        <div>
          <Link smooth to="#home">
            <img className="lg:w-10 md:w-10 w-10" src={logo} />
          </Link>
        </div>

        <div className="lg:flex md:flex gap-5 items-center justify-between h-10 hidden">
          <Link
            smooth
            to="/#home"
            className={`${
              location.hash === "#home"
                ? "bg-neutral-500 bg-opacity-20  px-3 py-2 rounded-3xl transition-all duration-150 backdrop-blur-[3px]"
                : "hover:bg-neutral-500 hover:bg-opacity-20 px-3 py-2 rounded-3xl transition-all duration-150 hover:backdrop-blur-[3px]"
            }`}
          >
            Home
          </Link>
          <Link
            smooth
            to="#about"
            className={`${
              location.hash === "#about"
                ? "bg-neutral-500 bg-opacity-20  px-3 py-2 rounded-3xl transition-all duration-150 backdrop-blur-[3px]"
                : "hover:bg-neutral-500 hover:bg-opacity-20 px-3 py-2 rounded-3xl transition-all duration-150 hover:backdrop-blur-[3px]"
            }`}
          >
            About
          </Link>
          <Link
            smooth
            to="#projects"
            className={`${
              location.hash === "#projects"
                ? "bg-neutral-500 bg-opacity-20 px-3 py-2 rounded-3xl transition-all duration-150 backdrop-blur-[3px]"
                : "hover:bg-neutral-500 hover:bg-opacity-20 px-3 py-2 rounded-3xl transition-all duration-150 hover:backdrop-blur-[3px]"
            }`}
          >
            Projects
          </Link>
          <Link
            smooth
            to="#contact"
            className={`${
              location.hash === "#contact"
                ? "bg-neutral-500 bg-opacity-20  px-3 py-2 rounded-3xl transition-all duration-150 backdrop-blur-[3px]"
                : "hover:bg-neutral-500 hover:bg-opacity-20 px-3 py-2 rounded-3xl transition-all duration-150 hover:backdrop-blur-[3px]"
            }`}
          >
            Contact
          </Link>
        </div>

        <audio loop ref={audioRef}>
          <source src={music} type="audio/mp3" />
        </audio>

        <div className="flex items-center justify-center lg:gap-10 gap-4">
          {isPlaying ? (
            <svg
              onClick={togglePlay}
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-circle-pause"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="10" x2="10" y1="15" y2="9" />
              <line x1="14" x2="14" y1="15" y2="9" />
            </svg>
          ) : (
            <svg
              onClick={togglePlay}
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-circle-play"
            >
              <circle cx="12" cy="12" r="10" />
              <polygon points="10 8 16 12 10 16 10 8" />
            </svg>
          )}

          {showToolTip && (
            <div className="w-52 text-center fixed lg:right-[150px] right-[35px] top-16 lg:top-20 bg-violet-700 px-2 py-1 rounded-md">
              <div className="absolute bottom-5 left-[160px] rotate-45 -z-50 bg-violet-700 w-5 h-5"></div>
              <div className="text-white text-white">
                Brain Massage? Try out
              </div>
            </div>
          )}

          <div className="lg:hidden md:hidden">
            {isOpened ? (
              <div>
                <svg
                  onClick={handleCross}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-x transition-all"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </div>
            ) : (
              <div>
                <svg
                  onClick={handleThreeLines}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-align-justify transition-all"
                >
                  <path d="M3 12h18" />
                  <path d="M3 18h18" />
                  <path d="M3 6h18" />
                </svg>
              </div>
            )}

            {isOpened && (
              <div className="w-52 bg-transparent backdrop:blur-lg -translate-x-40 absolute top-16 rounded-3xl overflow-hidden">
                <div className="flex flex-col items-center border border-neutral-400 border-opacity-20 justify-center w-full h-full text-white backdrop-blur-sm bg-neutral-950/90 rounded-3xl">
                  <Link
                    smooth
                    to="#home"
                    className={`${
                      location.hash === "#home"
                        ? "p-3 border-b border-neutral-400 border-opacity-20 w-full text-center bg-neutral-500/20"
                        : "p-3 border-b border-neutral-400 border-opacity-20 w-full text-center"
                    }`}
                  >
                    Home
                  </Link>
                  <Link
                    smooth
                    to="#about"
                    className={`${
                      location.hash === "#about"
                        ? "p-3 border-b border-neutral-400 border-opacity-20 w-full text-center bg-neutral-500/20"
                        : "p-3 border-b border-neutral-400 border-opacity-20 w-full text-center"
                    }`}
                  >
                    About
                  </Link>
                  <Link
                    smooth
                    to="#projects"
                    className={`${
                      location.hash === "#projects"
                        ? "p-3 border-b border-neutral-400 border-opacity-20 w-full text-center bg-neutral-500/20"
                        : "p-3 border-b border-neutral-400 border-opacity-20 w-full text-center"
                    }`}
                  >
                    Projects
                  </Link>
                  <Link
                    smooth
                    to="#contact"
                    className={`${
                      location.hash === "#contact"
                        ? "p-3 border-b border-neutral-400 border-opacity-20 w-full text-center bg-neutral-500/20"
                        : "p-3 border-b border-neutral-400 border-opacity-20 w-full text-center"
                    }`}
                  >
                    Contact
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
