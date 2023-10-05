import React from "react";
import logo from "../assets/logo.png";
const Nav = () => {
  return (
    <div className="nav flex justify-between items-center py-[1rem] px-[100px]">
      <div className="left-side">
        <img src={logo} />
      </div>
      <div className="center-side flex gap-[50px] text-[16px] text-[#18191F] font-normal">
        <h2>Home</h2>
        <h2>Service</h2>
        <h2>Feature</h2>
        <h2>Product</h2>
        <h2>Testimonial</h2>
        <h2>FAQ</h2>
      </div>
      <div className="right-side flex gap-[14px]">
        <button className="px-[20px] py-[10px] rounded-[6px] text-[#4CAF4F]">Login</button>
        <button className="px-[20px] py-[10px] bg-[#4CAF4F] text-white rounded-[6px]">Sign up</button>
      </div>
    </div>
  );
};

export default Nav;
