import React from "react";
import { BsGithub } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";
const Home = () => {
  return (
    <>
      <div className="w-full max-w-3xl mx-auto flex flex-col sm:flex-row sm::items-center p-3 sm:p-2 gap-8 mt-10">
        <div className="flex flex-col gap-6">
          <h1 className=" font-bold text-3xl ">MERN Stack Developer 👋</h1>
          <p>
            Hi, i'm Subhan Saleem. A MERN stack developer oriented and I am
            currently in second semester of ACCP (Aptech Certificate Computer
            Professional) program to improve my skills in a software career.{" "}
          </p>
          <div className="flex gap-2 text-2xl">
            <a
              href="https://github.com/subhanmemonn"
              target="blank"
              rel="noopener noreferrer"
            >
              <BsGithub />
            </a>
            <a
              href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCKCJDfNKTXFQZvRBtXWxqqRPrVqBfxtqMMMKgXrwdVJggNVLKQfjSgmCFvmnjqzwKfbLcBV"
              target="blank"
              rel="noopener noreferrer"
            >
              <BiLogoGmail />
            </a>
          </div>
        </div>
        <div className="rounded-[50%] overflow-hidden w-full sm:h-56 h-full">
          <img
            src="./PSX_20240223_010423.jpg"
            alt="me"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>

      <div className=" flex mt-11 md:items-center p-3 sm:p-2 w-full max-w-3xl mx-auto flex-col sm:flex-row gap-3">
        <div className="font-bold sm:text-lg whitespace-nowrap text-center text-2xl">
          Tech Stack
        </div>
        <div className="bg-gray-700 dark:bg-slate-300 font-thin ml-5 text-[4px] sm:text-sm">
          |
        </div>
        <div className="ml-10 flex gap-6 sm:gap-12">
          <span className="h-10 w-10">
            <img
              src="./html5 (1).png"
              alt="HTML"
              className="w-full h-full object-fit"
            />
          </span>
          <span className="h-10 w-10">
            <img
              src="./css.png"
              alt="CSS"
              className="w-full h-full object-fit"
            />
          </span>
          <span className="h-10 w-10">
            <img src="./js.png" alt="JS" className="w-full h-full object-fit" />
          </span>
          <span className="h-10 w-10">
            <img
              src="./react.png"
              alt="REACT.js"
              className="w-full h-full object-fit"
            />
          </span>
          <span className="h-10 w-10">
            <img
              src="./nodejs.png"
              alt="Node.js"
              className="w-full h-full object-fit"
            />
          </span>
          <span className="h-10 w-10">
            <img
              src="./express.png"
              alt="Express js"
              className="w-full h-full object-fit"
            />
          </span>
        </div>
      </div>
    </>
  );
};

export default Home;
