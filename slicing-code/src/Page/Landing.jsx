import React from "react";
import Nav from "../Element/Nav";
import illus from "../assets/illustration.png";
import ClientLogo from "../Element/ClientLogo";
import Community from "../Element/Community";
import illus2 from "../assets/illus2.png";
const Landing = () => {
  return (
    <div className="landing-body font-inter">
      {/*navbar */}
      <Nav />
      {/*end navbar */}

      {/*hero section */}
      <div className="hero flex px-[144px] py-[96px] items-center gap-[104px]">
        <div className="hero-caption">
          <h2 className="w-[657px] text-[64px] font-semibold text-[#4D4D4D] leading-[76px]">
            Lessons and insights <span className="text-[#4CAF4F]">from 8 years</span>
          </h2>
          <h2 className="text-[16px] text-[#717171] mt-[16px]">Where to grow your business as a photographer: site or social media?</h2>
          <button className="px-[32px] py-[14px] border-2 text-white bg-[#4CAF4F] rounded-[4px] mt-[32px]">Register</button>
        </div>
        <div className="hero-img">
          <img src={illus} />
        </div>
      </div>
      {/*end hero section */}

      {/*client section */}
      <div className="client flex justify-center px-[144px] flex-col">
        <div className="clien-title items-center flex flex-col">
          <h2 className="text-[36px] text-[#4D4D4D] font-semibold">Our Clients</h2>
          <h2 className="text-[16px] text-[#717171] font-medium mt-[8px]">We have been working with some Fortune 500+ clients</h2>
        </div>
        <div className="client-logo">
          <ClientLogo />
        </div>
      </div>
      {/*end client section */}

      {/*comunity section */}
      <div className="community-container flex justify-center mt-[40px]">
        <div className="community flex flex-col items-center">
          <h2 className="text-[36px] text-center w-[542px] text-[#4D4D4D] font-semibold">Manage your entire community in a single system</h2>
          <h2 className="text-[16px] text-[#717171] font-medium mt-[8px]">Who is Nextcent suitable for?</h2>
        </div>
      </div>
      {/*end comunity section */}

      {/*frame 4 */}
      <Community />
      {/*end frame 4 */}

      {/*Unlock Section */}
      <div className="unlock flex justify-between items-center px-[144px] mt-[4rem] gap-[7rem]">
        <img src={illus2} />
        <div className="caption">
          <h2 className="text-[36px] font-semibold w-[100%]">The unseen of spending three years at Pixelgrade</h2>
          <h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar
            sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
          </h2>
          <button>Learn More</button>
        </div>
      </div>
      {/* end Unlock Section */}
    </div>
  );
};

export default Landing;
