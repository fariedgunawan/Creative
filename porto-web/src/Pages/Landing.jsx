import React from "react";
import react from "../assets/react.png";
import wp from "../assets/wordpress.png";
import js from "../assets/js.png";
import figma from "../assets/figma.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import industrial from "../assets/industrial.png";
import starbucksproj from "../assets/starbucksproj.png";
import company from "../assets/company.png";
import ccna from "../assets/ccna.png";
import aselab from "../assets/aselab.png";
import sanbercode from "../assets/sanbercode.png";
import fiverr from "../assets/fiverr.png";
const Landing = () => {
  return (
    <div className="body-landing font-epilogue text-[#2D2D2D] font-medium bg-white min-h-max">
      {/*navbar */}
      <div className="landing-nav px-[35px] pt-[32px] pb-[32px] flex justify-between items-center">
        <div className="nav-left">
          <h2 className="text-[20px] font-bold">Portofolio</h2>
        </div>
        <div className="nav-right hidden">
          <h2>About</h2>
          <h2>Project</h2>
          <h2>Contact</h2>
        </div>
        <div className="dropdown dropdown-bottom dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </label>
          <ul tabIndex={0} className="dropdown-content z-10 menu p-2 shadow rounded-box w-52 bg-white">
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Project</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
      </div>
      {/*end of navbar */}

      {/*hero */}
      <div className="landing-hero px-[55px] justify-between flex mt-[60px]">
        <div className="hero-caption text-center z-0">
          <h2 className="text-[20px] font-semibold">UI & UX Designer | Front End Developer </h2>
          <h2 className="text-[25px] font-semibold mt-[20px]">Front End Developer</h2>
          <h2 className="text-[16px] font-medium mt-[20px] leading-[22px]">I thrive in the world of code, meticulously slicing designs into clean, responsive React.js applications.</h2>
          <button className="px-[15px] py-[10px] bg-[#4CAF4F] text-white rounded-[4px] mt-[30px]">Download CV</button>
        </div>
        <div className="hero-img hidden"></div>
      </div>
      {/*end of hero */}

      {/*skills */}
      <div className="landing-skills flex justify-center py-[30px] gap-[30px] overflow-x-auto mt-[70px] ">
        <img src={react} className="w-[30px] h-[30px]" />
        <img src={wp} className="w-[30px] h-[30px]" />
        <img src={js} className="w-[30px] h-[30px]" />
        <img src={figma} className="w-[30px] h-[30px]" />
        <img src={html} className="w-[30px] h-[30px]" />
        <img src={css} className="w-[30px] h-[30px]" />
      </div>
      {/*end of skills */}

      {/*project */}
      <div className="landing-project flex flex-col items-center mt-[50px]">
        <div className="project-title">
          <h2 className="text-[20px] font-semibold">Project</h2>
        </div>
        <div className="project-list mt-[50px]">
          {/*start list */}
          <div className="project-card-1 flex flex-col">
            <img src={industrial} className="w-[300px]" />
            <h2 className="mt-[14px] text-[17px] font-semibold">Inventory Management Apps</h2>
            <h2 className="mt-[15px] text-[15px]">Functional Apps</h2>
          </div>
          {/*end list */}
          {/*start list */}
          <div className="project-card-1 flex flex-col mt-[30px]">
            <img src={starbucksproj} className="w-[300px]" />
            <h2 className="mt-[14px] text-[17px] font-semibold">Redesign Landing Starbucks Web</h2>
            <h2 className="mt-[15px] text-[15px]">UI & Reactjs</h2>
          </div>
          {/*end list */}
          {/*start list */}
          <div className="project-card-1 flex flex-col mt-[30px]">
            <img src={company} className="w-[300px]" />
            <h2 className="mt-[14px] text-[17px] font-semibold">Create Company Landing Page</h2>
            <h2 className="mt-[15px] text-[15px]">UI & Reactjs</h2>
          </div>
          {/*end list */}
        </div>
        <div className="project-read mt-[20px]">
          <h2 className="flex items-center text-[16px] text-[#4CAF4F]">
            Read More{" "}
            <span>
              {" "}
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                <g clip-path="url(#clip0_39_105)">
                  <path d="M23.3479 16.0417H5.83331V18.9584H23.3479V23.3334L29.1666 17.5L23.3479 11.6667V16.0417Z" fill="#4CAF4F" />
                </g>
                <defs>
                  <clipPath id="clip0_39_105">
                    <rect width="35" height="35" fill="white" />
                  </clipPath>
                </defs>
              </svg>{" "}
            </span>
          </h2>
        </div>
      </div>
      {/*end of project */}

      {/*certification */}
      <div className="landing-certification flex flex-col items-center mt-[50px]">
        <div className="certification-title">
          <h2 className="text-[20px] font-semibold">Certification</h2>
        </div>
        <div className="certification-list mt-[50px]">
          {/*start list */}
          <div className="project-card-1 flex flex-col">
            <img src={ccna} className="w-[300px]" />
            <h2 className="mt-[14px] text-[17px] font-semibold">CCNA Bootcamp </h2>
            <h2 className="mt-[15px] text-[15px]">Bootcamp</h2>
          </div>
          {/*end list */}
          {/*start list */}
          <div className="project-card-1 flex flex-col mt-[40px]">
            <img src={aselab} className="w-[300px]" />
            <h2 className="mt-[14px] text-[17px] font-semibold">Software Modeling Workshop</h2>
            <h2 className="mt-[15px] text-[15px]">Workshop</h2>
          </div>
          {/*end list */}
          {/*start list */}
          <div className="project-card-1 flex flex-col mt-[40px]">
            <img src={sanbercode} className="w-[300px]" />
            <h2 className="mt-[14px] text-[17px] font-semibold">React-Native Bootcamp</h2>
            <h2 className="mt-[15px] text-[15px]">Bootcamp</h2>
          </div>
          {/*end list */}
        </div>
        <div className="certification-read mt-[20px]">
          <h2 className="flex items-center text-[16px] text-[#4CAF4F]">
            Read More{" "}
            <span>
              {" "}
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                <g clip-path="url(#clip0_39_105)">
                  <path d="M23.3479 16.0417H5.83331V18.9584H23.3479V23.3334L29.1666 17.5L23.3479 11.6667V16.0417Z" fill="#4CAF4F" />
                </g>
                <defs>
                  <clipPath id="clip0_39_105">
                    <rect width="35" height="35" fill="white" />
                  </clipPath>
                </defs>
              </svg>{" "}
            </span>
          </h2>
        </div>
      </div>
      {/*end certification */}

      {/*find me */}
      <div className="landing-find-me mt-[50px]">
        <div className="find-me-title justify-center flex">
          <h2 className="text-[20px] font-semibold">Find Me</h2>
        </div>
        <div className="find-me-list flex justify-center mt-[40px] gap-[40px]">
          {/*start list */}
          <div className="find-me-content-1 flex flex-col items-center">
            <img src={fiverr} className="w-[35px]" alt="" />
            <h2 className="font-semibold mt-[10px]">Fiverr</h2>
          </div>
          {/*end list */}
          {/*start list */}
          <div className="find-me-content-1 flex flex-col items-center">
            <img src={fiverr} className="w-[35px]" alt="" />
            <h2 className="font-semibold mt-[10px]">Fiverr</h2>
          </div>
          {/*end list */}
          {/*start list */}
          <div className="find-me-content-1 flex flex-col items-center">
            <img src={fiverr} className="w-[35px]" alt="" />
            <h2 className="font-semibold mt-[10px]">Fiverr</h2>
          </div>
          {/*end list */}
          {/*start list */}
          <div className="find-me-content-1 flex flex-col items-center">
            <img src={fiverr} className="w-[35px]" alt="" />
            <h2 className="font-semibold mt-[10px]">Fiverr</h2>
          </div>
          {/*end list */}
        </div>
      </div>
      {/*end find me */}
    </div>
  );
};

export default Landing;
