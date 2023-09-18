import React from "react";
import { useNavigate } from "react-router-dom";
import "./Skills.css";
import dribbble from "../assets/dribbble.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import illus from "../assets/illus.png";
import Nav from "../elements/Nav";

const Skills = () => {
  const navigate = useNavigate();
  return (
    <div id="skill-body">
      {/*navbar */}
      <Nav />
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
