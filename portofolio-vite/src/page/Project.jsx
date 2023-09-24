import React from "react";
import "./Project.css";
import Nav from "../elements/Nav";
import uistarbucks from "../assets/Redesign Landing Starbucks.png";
import uicompany from "../assets/LandingCompany Website.png";
import uifashion from "../assets/Porto Penjualan.png";
import uibca from "../assets/Porto Mbanking.png";
import uidelivery from "../assets/Portofolio Kurir.png";
import uilaptop from "../assets/Porto Penjualan 2.png";
import uicinema from "../assets/Porto Cinema.png";

const Project = () => {
  return (
    <div id="project-body">
      <Nav />
      <h2 className="font-poppins text-xl font-semibold text-[#69F638] mt-[2rem] text-center sm:text-left sm:text-[25px] sm:mt-[4rem]">
        Front End <span className="text-white">Projects</span>
      </h2>
      <div className="project-content-container mt-[2rem]">
        {/*start */}
        <div className="project-content flex flex-col sm:flex-row sm:gap-[5rem] sm:items-center">
          <div className="project-img">
            <img src={uistarbucks} className="sm:w-[170rem]" />
          </div>
          <div className="project-caption font-poppins text-white mt-[20px] sm:mt-0">
            <h2 className="text-xl font-bold sm:text-[25px]">Redesign Starbucks Web</h2>
            <h2 className="text-justify mt-3 text-sm sm:text-[18px] sm:mt-[3rem] sm:leading-7">
              I redesigned Starbucks Coffee's landing page, starting with Figma for UI design inspired by Dribbble.com. Using React Vite, Tailwind CSS, and pure CSS, I created a responsive and appealing layout, resulting in an interactive
              landing page that maintains Starbucks Coffee's identity while offering a modern user experience.
            </h2>
            <h2 className="mt-3 text-md font-semibold sm:mt-[2rem]">Visit Design and Code:</h2>
            <div className="button-caption mt-5">
              <button className="border-2 border-white px-3 py-1 rounded-lg">Dribbble.com</button>
              <button className="border-2 border-white px-3 py-1 rounded-lg ml-6">GitHub.com</button>
            </div>
          </div>
        </div>
        {/*end */}

        {/*start */}
        <div className="project-content flex flex-col sm:flex-row sm:gap-[5rem] sm:items-center">
          <div className="project-img mt-[3rem]">
            <img src={uicompany} className="sm:w-[198rem]" />
          </div>
          <div className="project-caption font-poppins text-white mt-[20px] sm:mt-0">
            <h2 className="text-xl font-bold sm:text-[25px]">Make Company Profile Web</h2>
            <h2 className="text-justify mt-3 text-sm sm:text-[18px] sm:mt-[3rem] sm:leading-7">
              I've crafted a website aimed at showcasing a company's digital presence through its profile. Beyond designing, I translated the design into a functional program using the React Vite framework, along with Tailwind CSS and pure
              CSS. This transformation ensures that users can utilize the website as an informative platform to learn about the targeted company's offerings.
            </h2>
            <h2 className="mt-3 text-md font-semibold sm:mt-[2rem]">Visit Design and Code:</h2>
            <div className="button-caption mt-5">
              <button className="border-2 border-white px-3 py-1 rounded-lg">Dribbble.com</button>
              <button className="border-2 border-white px-3 py-1 rounded-lg ml-6">GitHub.com</button>
            </div>
          </div>
        </div>
        {/*end */}

        <h2 className="font-poppins text-xl font-semibold text-[#CEA804] mt-[2rem] text-center sm:text-right sm:text-[25px] sm:mt-[4rem]">
          UI/UX <span className="text-white">Projects</span>
        </h2>

        {/*start */}
        <div className="project-content flex flex-col mt-[2rem] sm:flex-row-reverse sm:gap-[5rem] sm:items-center">
          <div className="project-img">
            <img src={uifashion} className="sm:w-[150rem]" />
          </div>
          <div className="project-caption font-poppins text-white mt-[20px] sm:mt-0">
            <h2 className="text-xl font-bold sm:text-[25px]">Make Fashion Online Shop</h2>
            <h2 className="text-justify mt-3 text-sm sm:text-[18px] sm:mt-[3rem] sm:leading-7">
              I have meticulously crafted a cutting-edge UI for a fashion ecommerce application, incorporating the latest design trends and skillfully blending shadows to create an immersive experience that indulges users exploring the
              realm of this ecommerce platform.
            </h2>
            <h2 className="mt-3 text-md font-semibold sm:mt-[2rem]">Visit Design :</h2>
            <div className="button-caption mt-5">
              <button className="border-2 border-white px-3 py-1 rounded-lg">Dribbble.com</button>
            </div>
          </div>
        </div>
        {/*end */}

        {/*start */}
        <div className="project-content flex flex-col sm:flex-row-reverse sm:gap-[5rem] sm:items-center">
          <div className="project-img mt-[3rem]">
            <img src={uibca} className="sm:w-[218rem]" />
          </div>
          <div className="project-caption font-poppins text-white mt-[20px] sm:mt-0">
            <h2 className="text-xl font-bold sm:text-[25px]">Redesign BCA Mobile Banking</h2>
            <h2 className="text-justify mt-3 text-sm sm:text-[18px] sm:mt-[3rem] sm:leading-7">
              I have successfully undertaken a UI redesign for the BCA Mobile application in response to prevalent feedback that its interface appeared dated and unengaging. Through a meticulous process, I have revitalized the UI, imbuing
              it with a captivating and contemporary aesthetic, addressing the perceived shortcomings and ensuring a more alluring and modern user experience.
            </h2>
            <h2 className="mt-3 text-md font-semibold sm:mt-[2rem]">Visit Design and Code:</h2>
            <div className="button-caption mt-5">
              <button className="border-2 border-white px-3 py-1 rounded-lg">Dribbble.com</button>
            </div>
          </div>
        </div>
        {/*end */}

        {/*start */}
        <div className="project-content flex flex-col sm:flex-row-reverse sm:gap-[5rem] sm:items-center">
          <div className="project-img mt-[3rem]">
            <img src={uidelivery} className="sm:w-[164rem]" />
          </div>
          <div className="project-caption font-poppins text-white mt-[20px] sm:mt-0">
            <h2 className="text-xl font-bold sm:text-[25px]">Make Delivery Tracking App</h2>
            <h2 className="text-justify mt-3 text-sm sm:text-[18px] sm:mt-[3rem] sm:leading-7">
              I have innovated and meticulously designed the UI for a package tracking application currently utilized by courier services. This innovation proves highly valuable as it empowers users to effortlessly access and comprehend
              information regarding the status of their packages in transit.
            </h2>
            <h2 className="mt-3 text-md font-semibold sm:mt-[2rem]">Visit Design and Code:</h2>
            <div className="button-caption mt-5">
              <button className="border-2 border-white px-3 py-1 rounded-lg">Dribbble.com</button>
            </div>
          </div>
        </div>
        {/*end */}

        {/*start */}
        <div className="project-content flex flex-col sm:flex-row-reverse sm:gap-[5rem] sm:items-center">
          <div className="project-img mt-[3rem]">
            <img src={uilaptop} className="sm:w-[247rem]" />
          </div>
          <div className="project-caption font-poppins text-white mt-[20px] sm:mt-0">
            <h2 className="text-xl font-bold sm:text-[25px]">Make Laptop Online Shop</h2>
            <h2 className="text-justify mt-3 text-sm sm:text-[18px] sm:mt-[3rem] sm:leading-7">
              I have spearheaded an innovation-driven initiative by designing an ecommerce application within the technology sector, specifically catering to the sale of laptops under a distinct brand. Employing a harmonious blend of
              gradient colors, I have crafted an application that not only captivates but also embodies a modern and cutting-edge UI, catering to the latest design trends and elevating the user experience to new heights.
            </h2>
            <h2 className="mt-3 text-md font-semibold sm:mt-[2rem]">Visit Design and Code:</h2>
            <div className="button-caption mt-5">
              <button className="border-2 border-white px-3 py-1 rounded-lg">Dribbble.com</button>
            </div>
          </div>
        </div>
        {/*end */}

        {/*start */}
        <div className="project-content flex flex-col sm:flex-row-reverse sm:gap-[5rem] sm:items-center">
          <div className="project-img mt-[3rem]">
            <img src={uicinema} className="sm:w-[230rem]" />
          </div>
          <div className="project-caption font-poppins text-white mt-[20px] sm:mt-0">
            <h2 className="text-xl font-bold sm:text-[25px]">Make Booking Cinema Apps</h2>
            <h2 className="text-justify mt-3 text-sm sm:text-[18px] sm:mt-[3rem] sm:leading-7">
              I have embarked on an innovative journey by revolutionizing the UI design of a cinema booking application, aimed at simplifying the user's experience in selecting showtimes and preferred seats within the auditorium. This
              development is rooted in addressing user needs and preferences, resulting in a more contemporary and up-to-date visual presentation that enhances the overall user interaction.
            </h2>
            <h2 className="mt-3 text-md font-semibold sm:mt-[2rem]">Visit Design and Code:</h2>
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
