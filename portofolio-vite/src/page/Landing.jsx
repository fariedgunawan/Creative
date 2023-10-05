import React from "react";
import { useNavigate } from "react-router-dom";
import "./Landing.css";
import dribbble from "../assets/dribbble.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import user from "../assets/users.png";
import figma from "../assets/figma.png";
import js from "../assets/js.png";
import html from "../assets/html.png";
import react from "../assets/react.png";
import wp from "../assets/wordpress.png";
import css from "../assets/css.png";
import Nav from "../elements/Nav";

const Landing = () => {
  const navigate = useNavigate();
  return (
    <div id="body-landing">
      {/*navbar */}
      <Nav />
      {/*end of navbar */}

      <div className="hero-landing flex flex-col font-poppins mt-[2rem] sm:flex-row-reverse sm:justify-between sm:items-center">
        <div className="hero-illus flex justify-center">
          <div className="bg-black rounded-[50%] w-[400px] h-[400px] blur-[250px] z-0 translate-x-[480px] translate-y-[150px] hidden sm:flex" />
          <img src={user} className="w-[500px] z-10 sm:w-[600px] sm:h-[600px]" />
        </div>
        <div className="hero-caption mt-[2rem] sm:-mt-[3rem] sm:w-[490px]">
          <h2 className="text-2xl text-white sm:text-[40px] ">Halo, I'm</h2>
          <h2 className="text-3xl font-semibold text-[#00E0FF] mt-[40px] sm:text-[55px]">Faried Gunawan</h2>
          <h2 className="text-md text-white text-justify mt-6 ">
            Active student of telkom university informatics study program, has interest and expertise in frontend developer & UI/UX designer, learns independently and continues to develop skills.
          </h2>
          <div className="hero-img flex w-[25px] gap-[53px] mt-5 sm:w-[35px] sm:gap-[40px]">
            <img src={figma} />
            <img src={js} />
            <img src={html} />
            <img src={react} />
            <img src={wp} />
            <img src={css} />
          </div>
          <div className="button-caption flex justify-between mt-7 sm:gap-20 sm:justify-start">
            <button className="text-white border-2 border-white rounded-lg px-10 py-2 sm:px-7 hover:bg-white hover:text-black">Hire Me</button>
            <button className="text-white border-2 border-white rounded-lg px-7 py-2 sm:px-7 hover:bg-white hover:text-black">Download CV</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
