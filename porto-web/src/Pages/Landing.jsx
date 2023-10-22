import React from "react";
import react from "../assets/react.png";
import illus from "../assets/illus.png";
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
import dribbble from "../assets/dribbble.png";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import faried from "../assets/faried.png";

const Landing = () => {
  return (
    <div className="body-landing font-epilogue text-[#2D2D2D] font-medium bg-white min-h-max">
      {/*navbar */}
      <div className="landing-nav px-[35px] pt-[32px] pb-[32px] flex justify-between items-center">
        <div className="nav-left">
          <h2 className="text-[20px] font-bold sm:text-[30px]">Portofolio</h2>
        </div>
        <div className="nav-right hidden sm:flex sm:gap-[73px] sm:text-[20px]">
          <h2>About</h2>
          <h2>Project</h2>
          <h2>Contact</h2>
        </div>
        <div className="dropdown dropdown-bottom dropdown-end sm:hidden">
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
      <div className="landing-hero px-[55px] justify-between flex mt-[60px] sm:items-center">
        <div className="hero-caption text-center z-0 sm:text-start">
          <h2 className="text-[20px] font-semibold sm:text-[30px]">UI & UX Designer | Front End Developer </h2>
          <h2 className="text-[25px] font-semibold mt-[20px] sm:text-[68px] sm:mt-[39px]">Front End Developer</h2>
          <h2 className="text-[16px] font-medium mt-[20px] leading-[26px] sm:text-[20px] sm:w-[568px] sm:mt-[39px]">I thrive in the world of code, meticulously slicing designs into clean, responsive React.js applications.</h2>
          <button className="px-[15px] py-[10px] bg-[#4CAF4F] text-white rounded-[4px] mt-[30px] sm:mt-[68px] sm:text-[20px] sm:px-[20px] sm:py-[15px]">Download CV</button>
        </div>
        <div className="hero-img hidden sm:flex">
          <img src={illus} className="w-[450px]" alt="" />
        </div>
      </div>
      {/*end of hero */}

      {/*skills */}
      <div className="landing-skills flex justify-center py-[30px] gap-[30px] overflow-x-auto mt-[70px] sm:mt-[106px] sm:py-[77px] sm:gap-[150px]">
        <img src={react} className="w-[30px] h-[30px] sm:w-[50px] sm:h-[50px]" />
        <img src={wp} className="w-[30px] h-[30px] sm:w-[50px] sm:h-[50px]" />
        <img src={js} className="w-[30px] h-[30px] sm:w-[50px] sm:h-[50px]" />
        <img src={figma} className="w-[30px] h-[30px] sm:w-[50px] sm:h-[50px]" />
        <img src={html} className="w-[30px] h-[30px] sm:w-[50px] sm:h-[50px]" />
        <img src={css} className="w-[30px] h-[30px] sm:w-[50px] sm:h-[50px]" />
      </div>
      {/*end of skills */}

      {/*project */}
      <div className="landing-project flex flex-col items-center mt-[50px] sm:items-start sm:px-[55px]">
        <div className="project-title">
          <h2 className="text-[20px] font-semibold sm:text-[35px]">Project</h2>
        </div>
        <div className="project-list mt-[50px] sm:flex sm:w-full sm:justify-between">
          {/*start list */}
          <div className="project-card-1 flex flex-col">
            <img src={industrial} className="w-[300px] sm:w-[400px]" />
            <h2 className="mt-[14px] text-[17px] font-semibold sm:text-[20px]">Inventory Management Apps</h2>
            <h2 className="mt-[15px] text-[15px]">Functional Apps</h2>
          </div>
          {/*end list */}
          {/*start list */}
          <div className="project-card-1 flex flex-col mt-[30px] sm:mt-0">
            <img src={starbucksproj} className="w-[300px] sm:w-[400px]" />
            <h2 className="mt-[14px] text-[17px] font-semibold sm:text-[20px]">Redesign Landing Starbucks Web</h2>
            <h2 className="mt-[15px] text-[15px]">UI & Reactjs</h2>
          </div>
          {/*end list */}
          {/*start list */}
          <div className="project-card-1 flex flex-col mt-[30px] sm:mt-0">
            <img src={company} className="w-[300px] sm:w-[400px]" />
            <h2 className="mt-[14px] text-[17px] font-semibold sm:text-[20px]">Create Company Landing Page</h2>
            <h2 className="mt-[15px] text-[15px]">UI & Reactjs</h2>
          </div>
          {/*end list */}
        </div>
        <div className="project-read mt-[20px] sm:mt-[70px]">
          <h2 className="flex items-center text-[16px] text-[#4CAF4F] sm:text-[20px]">
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
      <div className="landing-certification flex flex-col mt-[50px] sm:px-[55px]">
        <div className="certification-title">
          <h2 className="text-[20px] font-semibold text-center sm:text-right sm:text-[30px]">Certification</h2>
        </div>
        <div className="certification-list mt-[50px] flex flex-col items-center sm:flex sm:flex-row sm:w-full sm:justify-between">
          {/*start list */}
          <div className="project-card-1 flex flex-col">
            <img src={ccna} className="w-[300px] sm:w-[400px]" />
            <h2 className="mt-[14px] text-[17px] font-semibold sm:text-[20px]">CCNA Bootcamp </h2>
            <h2 className="mt-[15px] text-[15px]">Bootcamp</h2>
          </div>
          {/*end list */}
          {/*start list */}
          <div className="project-card-1 flex flex-col mt-[40px] sm:mt-0">
            <img src={aselab} className="w-[300px] sm:w-[400px]" />
            <h2 className="mt-[14px] text-[17px] font-semibold sm:mt-[30px] sm:text-[20px]">Software Modeling Workshop</h2>
            <h2 className="mt-[15px] text-[15px]">Workshop</h2>
          </div>
          {/*end list */}
          {/*start list */}
          <div className="project-card-1 flex flex-col mt-[40px] sm:mt-0">
            <img src={sanbercode} className="w-[300px] sm:w-[400px]" />
            <h2 className="mt-[14px] text-[17px] font-semibold sm:text-[20px]">React-Native Bootcamp</h2>
            <h2 className="mt-[15px] text-[15px]">Bootcamp</h2>
          </div>
          {/*end list */}
        </div>
        <div className="certification-read mt-[20px] sm:mt-[70px]">
          <h2 className="flex items-center text-[16px] text-[#4CAF4F] justify-center sm:justify-start sm:text-[20px]">
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
      <div className="landing-find-me mt-[50px] sm:px-[55px]">
        <div className="find-me-title justify-center flex sm:justify-start">
          <h2 className="text-[20px] font-semibold sm:text-[30px]">Find Me</h2>
        </div>
        <div className="find-me-list flex justify-center mt-[40px] gap-[30px] sm:gap-[153px]">
          {/*start list */}
          <div className="find-me-content-1 flex flex-col items-center">
            <img src={fiverr} className="w-[25px] sm:w-[45px]" alt="" />
            <h2 className="font-semibold mt-[15px] sm:text-[20px]">Fiverr</h2>
          </div>
          {/*end list */}
          {/*start list */}
          <div className="find-me-content-1 flex flex-col items-center">
            <img src={dribbble} className="w-[25px] sm:w-[45px]" alt="" />
            <h2 className="font-semibold mt-[15px] sm:text-[20px]">Dribbble</h2>
          </div>
          {/*end list */}
          {/*start list */}
          <div className="find-me-content-1 flex flex-col items-center">
            <img src={github} className="w-[25px] sm:w-[45px]" alt="" />
            <h2 className="font-semibold mt-[15px] sm:text-[20px]">GitHub</h2>
          </div>
          {/*end list */}
          {/*start list */}
          <div className="find-me-content-1 flex flex-col items-center">
            <img src={linkedin} className="w-[25px] sm:w-[45px]" alt="" />
            <h2 className="font-semibold mt-[15px] sm:text-[20px]">LinkedIn</h2>
          </div>
          {/*end list */}
        </div>
      </div>
      {/*end find me */}

      {/*about me */}
      <div className="landing-about-me flex flex-col mt-[50px] items-center bg-slate-100 py-[30px] sm:px-[55px] sm:flex-row sm:gap-[126px] sm:mt-[100px]">
        <img src={faried} className="w-[220px] sm:w-[360px]" alt="" />
        <div className="landing-about-caption px-[55px] mt-[40px] sm:px-0 sm:mt-0">
          <h2 className="font-semibold text-[20px] sm:text-[30px]">About Me</h2>
          <h2 className="text-justify text-[14px] mt-[20px] sm:text-[18px] sm:mt-[29px]">
            I'm Muhammad Faried Gunawan, a Computer Science student at Telkom University, born in Jakarta on September 11, 2004. I'm an aspiring software engineer, specializing in UI/UX design and frontend development, with hands-on
            experience from various projects. I'm a self-taught learner and have also undergone training in Cisco network infrastructure, React Native mobile app development, and software modeling workshops. My passion for technology drives
            me to continuously innovate and create.
          </h2>
          <h2 className="text-justify text-[14px] font-semibold mt-[20px] sm:text-[20px] sm:mt-[29px]">Personalities : INTJ-A</h2>
          <div className="about-me-read mt-[20px]">
            <h2 className="flex items-center text-[16px] text-[#4CAF4F] sm:text-[20px]">
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
      </div>
      {/*end of about me */}
    </div>
  );
};

export default Landing;
