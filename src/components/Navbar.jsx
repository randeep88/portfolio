import { useEffect, useRef, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import music from "../assets/music.mp3";
import "../App.css/";
import { motion } from "motion/react";
import { useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const location = useLocation();
  const [isPlaying, setIsPlaying] = useState(false);
  const [showToolTip, setShowToolTip] = useState(false);

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
    <div className="w-full flex items-center justify-center selection:no-underline">
      <motion.div
        animate={{ y: 90 }}
        transition={transition}
        id="navbar"
        className="w-[1500px] fixed -top-20 bg-neutral-300 bg-opacity-30 dark:text-white dark:bg-neutral-300 dark:bg-opacity-10 backdrop-blur-[5px] z-50 h-20 flex items-center justify-around rounded-3xl"
      >
        <div>
          <Link smooth to="#home">
            <img className="dark:invert w-10" src={logo} />
          </Link>
        </div>
        <div className="flex gap-5 items-center justify-between h-10">
          <Link
            smooth
            to="/#home"
            className={`${
              location.hash === "#home"
                ? "dark:bg-neutral-500 dark:bg-opacity-20 bg-neutral-300 px-3 py-2 rounded-3xl transition-all duration-150 backdrop-blur-[3px]"
                : "dark:hover:bg-neutral-500 hover:bg-neutral-300 dark:hover:bg-opacity-20 px-3 py-2 rounded-3xl transition-all duration-150 dark:hover:backdrop-blur-[3px]"
            }`}
          >
            Home
          </Link>
          <Link
            smooth
            to="#about"
            className={`${
              location.hash === "#about"
                ? "dark:bg-neutral-500 dark:bg-opacity-20 bg-neutral-300 px-3 py-2 rounded-3xl transition-all duration-150 backdrop-blur-[3px]"
                : "dark:hover:bg-neutral-500 hover:bg-neutral-300 dark:hover:bg-opacity-20 px-3 py-2 rounded-3xl transition-all duration-150 dark:hover:backdrop-blur-[3px]"
            }`}
          >
            About
          </Link>
          <Link
            smooth
            to="#projects"
            className={`${
              location.hash === "#projects"
                ? "dark:bg-neutral-500 dark:bg-opacity-20 bg-neutral-300 px-3 py-2 rounded-3xl transition-all duration-150 backdrop-blur-[3px]"
                : "dark:hover:bg-neutral-500 hover:bg-neutral-300 dark:hover:bg-opacity-20 px-3 py-2 rounded-3xl transition-all duration-150 dark:hover:backdrop-blur-[3px]"
            }`}
          >
            Projects
          </Link>
          <Link
            smooth
            to="#contact"
            className={`${
              location.hash === "#contact"
                ? "dark:bg-neutral-500 dark:bg-opacity-20 bg-neutral-300 px-3 py-2 rounded-3xl transition-all duration-150 backdrop-blur-[3px]"
                : "dark:hover:bg-neutral-500 hover:bg-neutral-300 dark:hover:bg-opacity-20 px-3 py-2 rounded-3xl transition-all duration-150 dark:hover:backdrop-blur-[3px]"
            }`}
          >
            Contact
          </Link>
        </div>

        <audio ref={audioRef}>
          <source src={music} type="audio/mp3" />
        </audio>

        <div className="flex items-center justify-center gap-10">
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
            <div className="w-52 text-center absolute right-[155px] top-20 bg-violet-700 px-2 py-1 rounded-md">
              <div className="absolute bottom-5 left-[160px] rotate-45 -z-50 bg-violet-700 w-5 h-5"></div>
              <div className="text-white dark:text-white">
                Brain Massage? Try out
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
