import React from "react";
import { BsGithub } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";
const Home = () => {
  return (
    <>
      <div className="w-full max-w-3xl mx-auto flex flex-col sm:flex-row md:items-center p-3 sm:p-2 gap-8 mt-10">
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

        <svg
          viewBox="0 0 500 500"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="80vw"
          id="blobSvg"
        >
          <defs>
            <clipPath id="shape">
              <path id="blob" fill="none" strokeWidth="7px" stroke="#d1d8e0">
                <animate
                  attributeName="d"
                  dur={"10000ms"}
                  repeatCount={"indefinite"}
                  values="M472,305Q460,360,422,402.5Q384,445,331.5,467Q279,489,223,478.5Q167,468,120,437.5Q73,407,41.5,358Q10,309,19,252Q28,195,52.5,146Q77,97,122,64.5Q167,32,223,23.5Q279,15,332.5,33.5Q386,52,418.5,98Q451,144,467.5,197Q484,250,472,305Z;
              
              M479.5,286.5Q475,323,458,356Q441,389,416.5,417Q392,445,357,458.5Q322,472,286,479Q250,486,212,485.5Q174,485,144.5,460Q115,435,89,410.5Q63,386,46,354Q29,322,21,286Q13,250,17.5,213Q22,176,44,146Q66,116,88,87Q110,58,142.5,39Q175,20,212.5,16Q250,12,286.5,18Q323,24,355,42.5Q387,61,414.5,85.5Q442,110,460,143Q478,176,481,213Q484,250,479.5,286.5Z;

              M461.5,295.5Q454,341,426.5,378.5Q399,416,360.5,443.5Q322,471,274.5,468.5Q227,466,183,454.5Q139,443,95.5,418.5Q52,394,49.5,343.5Q47,293,45.5,249.5Q44,206,60,164.5Q76,123,107,89.5Q138,56,182,38.5Q226,21,269.5,38Q313,55,357,68.5Q401,82,432.5,118.5Q464,155,466.5,202.5Q469,250,461.5,295.5Z;

              M479.5,286.5Q475,323,458,356Q441,389,416.5,417Q392,445,357,458.5Q322,472,286,479Q250,486,212,485.5Q174,485,144.5,460Q115,435,89,410.5Q63,386,46,354Q29,322,21,286Q13,250,17.5,213Q22,176,44,146Q66,116,88,87Q110,58,142.5,39Q175,20,212.5,16Q250,12,286.5,18Q323,24,355,42.5Q387,61,414.5,85.5Q442,110,460,143Q478,176,481,213Q484,250,479.5,286.5Z;
              
              M472,305Q460,360,422,402.5Q384,445,331.5,467Q279,489,223,478.5Q167,468,120,437.5Q73,407,41.5,358Q10,309,19,252Q28,195,52.5,146Q77,97,122,64.5Q167,32,223,23.5Q279,15,332.5,33.5Q386,52,418.5,98Q451,144,467.5,197Q484,250,472,305Z
              "
                ></animate>
              </path>
            </clipPath>
          </defs>
          <image
            x="0"
            y="0"
            width="100%"
            height="100%"
            clip-path="url(#shape)"
            xlinkHref="https://res-console.cloudinary.com/dommefrmd/media_explorer_thumbnails/e45878ee1b2eda384912c420bd034605/detailed"
            preserveAspectRatio="none"
          ></image>
        </svg>
      </div>

      <div className=" flex mt-11 md:items-center p-3 sm:p-2 w-full max-w-3xl mx-auto flex-col sm:flex-row gap-3">
        <div className="font-bold sm:text-lg whitespace-nowrap text-center text-2xl">
          Tech Stack
        </div>
        <div className="bg-gray-700 dark:bg-slate-300 font-thin ml-5 text-[4px] sm:text-sm">
          |
        </div>
        <div className="ml-10 flex gap-12">
          <span className="h-10 w-10">
            <img
              src="./html5 (1).png"
              alt="HTML"
              className="w-full h-full object-fit"
            />
          </span>
          <span className="h-10 w-10">
            <img
              src="./css.jpg"
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
