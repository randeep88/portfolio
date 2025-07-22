import React from "react";
import "../index.css";
import s1 from "../assets/s1.png";
import s2 from "../assets/s2.png";
import s3 from "../assets/s3.png";
import s4 from "../assets/s4.png";
import s5 from "../assets/s5.png";
import s6 from "../assets/s6.png";
import { Link } from "react-router-dom";
import link from "../assets/link.svg";
import { Timeline } from "./Timeline";

const ProjectSec = () => {
  const data = [
    {
      title: "Nebula",
      content: (
        <div className="p-3 text-gray-300 rounded-lg selection:normal-case">
          <Link
            to="https://nebula-frontend-one.vercel.app/"
            target="_blank"
            className="flex items-center gap-2 text-white float-end mb-5"
          >
            Visit Nebula
            <img className="w-5 invert" src={link} />
          </Link>
          <img className="rounded-lg my-5" src={s5} />
          <p>
            Nebula is a modern music streaming platform where users can stream
            and download high-quality songs. With real-time playback, curated
            playlists, artist pages, and a sleek UI, Nebula offers a seamless
            experience—anytime, anywhere. Enjoy smart controls, dynamic queues,
            and smooth performance across devices.
          </p>
        </div>
      ),
    },
    {
      title: "The Verdant Stay",
      content: (
        <div className="p-3 text-gray-300 rounded-lg selection:normal-case">
          <Link
            to="https://the-verdant-stay.vercel.app/"
            target="_blank"
            className="flex items-center gap-2 text-white float-end mb-5"
          >
            Visit The Verdant Stay
            <img className="w-5 invert" src={link} />
          </Link>
          <img className="rounded-lg my-5" src={s6} />
          <p>
            The Verdant Stay is a hotel management system offering a seamless
            dashboard to manage guest stays. Hotels can track check-in/out
            times, manage bookings, add/remove cabins, and update user
            details—all in one place. Designed for efficiency, it simplifies
            hotel operations with an intuitive and responsive interface.
          </p>
        </div>
      ),
    },
    {
      title: "usePopcorn",
      content: (
        <div className="p-3 text-gray-300 rounded-lg selection:normal-case">
          <Link
            to="https://use-popcorn-iesp.vercel.app/"
            target="_blank"
            className="flex items-center gap-2 text-white float-end mb-5"
          >
            Visit usePopcorn
            <img className="w-5 invert" src={link} />
          </Link>
          <img className="rounded-lg my-5" src={s1} />
          <p>
            A user-driven platform where people rate movies, building a dynamic,
            crowd-sourced collection of top-rated films. By aggregating ratings
            from diverse audiences, it offers real-time rankings, personalized
            recommendations, and trending picks. Users can explore, review, and
            contribute, shaping a constantly evolving database of the best-loved
            and critically acclaimed films.
          </p>
        </div>
      ),
    },
    {
      title: "The React Quiz",
      content: (
        <div className="p-3 text-gray-300 rounded-lg selection:normal-case">
          <Link
            to="https://the-react-quiz-iota.vercel.app/"
            target="_blank"
            className="flex items-center gap-2 text-white float-end mb-5"
          >
            Visit The React Quiz
            <img className="w-5 invert" src={link} />
          </Link>
          <img className="rounded-lg my-5" src={s2} />
          <p>
            Assess your React knowledge with a 15-question quiz designed to
            challenge and enhance your skills. Test your understanding of core
            concepts, identify areas for improvement, and boost your confidence.
            Whether you're a beginner or an experienced developer, this
            interactive quiz helps you learn, grow, and stay ahead in React
            development!
          </p>
        </div>
      ),
    },
    {
      title: "WorldWise",
      content: (
        <div className="p-3 text-gray-300 rounded-lg selection:normal-case">
          <Link
            to="https://world-wise-e1iq.vercel.app/"
            target="_blank"
            className="flex items-center gap-2 text-white float-end mb-5"
          >
            Visit WorldWise
            <img className="w-5 invert" src={link} />
          </Link>
          <img className="rounded-lg my-5" src={s3} />
          <p>
            Discover and bookmark your favorite cities directly from the map to
            build your ultimate vacation list! Explore new destinations, save
            top picks, and plan your dream trip effortlessly. Whether you're
            seeking adventure, culture, or relaxation, curate a personalized
            travel list and make your next getaway unforgettable!
          </p>
        </div>
      ),
    },
    {
      title: "Weathery",
      content: (
        <div className="p-3 text-gray-300 rounded-lg selection:normal-case">
          <Link
            to="https://weather-app-nu-eight-73.vercel.app/"
            target="_blank"
            className="flex items-center gap-2 text-white float-end mb-5"
          >
            Visit Weathery
            <img className="w-5 invert" src={link} />
          </Link>
          <img className="rounded-lg my-5" src={s4} />
          <p>
            Stay updated with real-time weather reports for any location
            worldwide! Get accurate forecasts, live conditions, and essential
            weather details to plan your day effortlessly. Whether at home or
            traveling, access precise temperature, humidity, wind speed, and
            more for a seamless weather experience anytime, anywhere.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="cursor-default pt-28" id="projects">
      <h1 className="text-center selection:normal-case pointer-events-none lg:whitespace-pre-wrap bg-gradient-to-b bg-clip-text lg:text-6xl text-4xl md:text-5xl font-semibold text-transparent from-white to-slate-900/10">
        Projects
      </h1>
      <Timeline data={data} />
    </div>
  );
};

export default ProjectSec;
