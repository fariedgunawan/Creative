import React from "react";
import dribbble from "../assets/dribbble.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import { useNavigate } from "react-router-dom";
const Nav = () => {
  const navigate = useNavigate();
  return (
    <div className="body">
      <div className="nav-landing font-poppins text-white flex justify-between items-center">
        <div className="left-side">
          <h2 className="text-2xl sm:text-[30px] font-bold text-[#00E0FF] cursor-pointer" onClick={() => navigate("/")}>
            Portofolio
          </h2>
        </div>
        <div className="center-side hidden gap-[67px] sm:flex font-semibold sm:text-[20px]">
          <h2 className="cursor-pointer" onClick={() => navigate("/skills")}>
            Skills
          </h2>
          <h2 className="cursor-pointer" onClick={() => navigate("/projects")}>
            Project
          </h2>
          <h2 className="cursor-pointer">Experience</h2>
          <h2 className="cursor-pointer">Contact</h2>
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
    </div>
  );
};

export default Nav;
