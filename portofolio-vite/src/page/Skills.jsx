import React from "react";
import { useNavigate } from "react-router-dom";
import "./Skills.css";
import dribbble from "../assets/dribbble.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import illus from "../assets/illus.png";

const Skills = () => {
  const navigate = useNavigate();
  return (
    <div id="skill-body">
      {/*navbar */}
      <div className="nav-landing font-poppins text-white flex justify-between items-center">
        <div className="left-side">
          <h2 className="text-2xl sm:text-[30px] font-bold text-[#00E0FF] cursor-pointer" onClick={() => navigate("/")}>
            Portofolio
          </h2>
        </div>
        <div className="center-side hidden gap-[67px] sm:flex font-semibold sm:text-[20px]">
          <h2>Skills</h2>
          <h2>Project</h2>
          <h2>Experience</h2>
          <h2>Contact</h2>
        </div>
        <div className="right-side hidden gap-[30px] sm:flex ">
          <img src={dribbble} className="w-[30px]" />
          <img src={linkedin} className="w-[30px]" />
          <img src={github} className="w-[30px]" />
        </div>
        <div className="dropdown dropdown-bottom dropdown-end sm:hidden">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </label>
          <ul tabIndex={0} className="dropdown-content z-20 menu p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <a>Skills</a>
            </li>
            <li>
              <a>Project</a>
            </li>
            <li>
              <a>Experience</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
            <li>
              <a>Dribbble.com</a>
            </li>
            <li>
              <a>LinkedIn</a>
            </li>
            <li>
              <a>GitHub</a>
            </li>
          </ul>
        </div>
      </div>
      {/*end of navbar */}

      <div className="skill-content flex flex-col items-center mt-[3rem] sm:flex-row-reverse sm:justify-between">
        <div className="skill-illus flex relative sm:mr-[6rem]">
          <div className="shape-illus bg-[#002550] hidden sm:flex rounded-[50%] w-[400px] h-[400px] absolute top-0 left-[230px] z-0 blur-[250px]"></div>
          <img src={illus} className="w-[45rem] z-10" />
        </div>

        <div className="skill-caption font-poppins text-white mt-[3rem] sm:w-[30rem]">
          <h2 className="font-bold text-2xl text-[#69F638] sm:text-3xl">Front End Developer</h2>
          <h2 className="font-medium text-justify sm:text-[16px]">
            Creating schemes and software flows that have been planned and designing interface interactions and implementing these designs into a program. The frameworks that I use include react-native, reactjs+vite, tailwind css and HTML
            CSS.
          </h2>
          <h2 className="font-bold text-2xl mt-6 text-[#CEA804] sm:text-3xl sm:mt-[4rem]">UI/UX Designer</h2>
          <h2 className="font-medium text-justify sm:text-[16px]">
            Designing a software user interface that has been planned and upholds the comfort and convenience of users in using the application. The tools that I use include Adobe Illustrator and Figma
          </h2>
          <div className="button-container flex justify-center mt-[2rem] sm:justify-start">
            <button className="text-lg font-medium border-2 border-white px-4 py-2 rounded-xl sm:text-[20px] sm:px-8 hover:bg-white hover:text-black">Experience</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
