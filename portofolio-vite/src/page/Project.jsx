import React from "react";
import "./Project.css";
import Nav from "../elements/Nav";
import uistarbucks from "../assets/Redesign Landing Starbucks.png";
import uicompany from "../assets/LandingCompany Website.png";
import uifashion from "../assets/Porto Penjualan.png";
import uibca from "../assets/Porto Mbanking.png";

const Project = () => {
  return (
    <div id="project-body">
      <Nav />
      <h2 className="font-poppins text-xl font-semibold text-white mt-[2rem] text-center">Front End Projects</h2>
      <div className="project-content-container mt-[2rem]">
        {/*start */}
        <div className="project-content flex flex-col">
          <div className="project-img">
            <img src={uistarbucks} />
          </div>
          <div className="project-caption font-poppins text-white mt-[20px]">
            <h2 className="text-xl font-bold">Redesign Starbucks Web</h2>
            <h2 className="text-justify mt-3 text-sm">
              I redesigned Starbucks Coffee's landing page, starting with Figma for UI design inspired by Dribbble.com. Using React Vite, Tailwind CSS, and pure CSS, I created a responsive and appealing layout, resulting in an interactive
              landing page that maintains Starbucks Coffee's identity while offering a modern user experience.
            </h2>
            <h2 className="mt-3 text-md font-semibold">Visit Design and Code:</h2>
            <div className="button-caption mt-5">
              <button className="border-2 border-white px-3 py-1 rounded-lg">Dribbble.com</button>
              <button className="border-2 border-white px-3 py-1 rounded-lg ml-6">GitHub.com</button>
            </div>
          </div>
        </div>
        {/*end */}

        {/*start */}
        <div className="project-content flex flex-col">
          <div className="project-img mt-[3rem]">
            <img src={uicompany} />
          </div>
          <div className="project-caption font-poppins text-white mt-[20px]">
            <h2 className="text-xl font-bold">Make Company Profile Web</h2>
            <h2 className="text-justify mt-3 text-sm">
              I've crafted a website aimed at showcasing a company's digital presence through its profile. Beyond designing, I translated the design into a functional program using the React Vite framework, along with Tailwind CSS and pure
              CSS. This transformation ensures that users can utilize the website as an informative platform to learn about the targeted company's offerings.
            </h2>
            <h2 className="mt-3 text-md font-semibold">Visit Design and Code:</h2>
            <div className="button-caption mt-5">
              <button className="border-2 border-white px-3 py-1 rounded-lg">Dribbble.com</button>
              <button className="border-2 border-white px-3 py-1 rounded-lg ml-6">GitHub.com</button>
            </div>
          </div>
        </div>
        {/*end */}

        <h2 className="font-poppins text-xl font-semibold text-white mt-[2rem] text-center">UI/UX Projects</h2>

        {/*start */}
        <div className="project-content flex flex-col mt-[2rem]">
          <div className="project-img">
            <img src={uifashion} />
          </div>
          <div className="project-caption font-poppins text-white mt-[20px]">
            <h2 className="text-xl font-bold">Make Fashion Online Shop</h2>
            <h2 className="text-justify mt-3 text-sm">
              I have meticulously crafted a cutting-edge UI for a fashion ecommerce application, incorporating the latest design trends and skillfully blending shadows to create an immersive experience that indulges users exploring the
              realm of this ecommerce platform.
            </h2>
            <h2 className="mt-3 text-md font-semibold">Visit Design :</h2>
            <div className="button-caption mt-5">
              <button className="border-2 border-white px-3 py-1 rounded-lg">Dribbble.com</button>
            </div>
          </div>
        </div>
        {/*end */}

        {/*start */}
        <div className="project-content flex flex-col">
          <div className="project-img mt-[3rem]">
            <img src={uibca} />
          </div>
          <div className="project-caption font-poppins text-white mt-[20px]">
            <h2 className="text-xl font-bold">Redesign BCA Mobile Banking</h2>
            <h2 className="text-justify mt-3 text-sm">
              I have successfully undertaken a UI redesign for the BCA Mobile application in response to prevalent feedback that its interface appeared dated and unengaging. Through a meticulous process, I have revitalized the UI, imbuing
              it with a captivating and contemporary aesthetic, addressing the perceived shortcomings and ensuring a more alluring and modern user experience.
            </h2>
            <h2 className="mt-3 text-md font-semibold">Visit Design and Code:</h2>
            <div className="button-caption mt-5">
              <button className="border-2 border-white px-3 py-1 rounded-lg">Dribbble.com</button>
            </div>
          </div>
        </div>
        {/*end */}
      </div>
    </div>
  );
};

export default Project;
