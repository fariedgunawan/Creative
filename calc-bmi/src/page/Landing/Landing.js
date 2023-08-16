import React from "react";
import "../Landing/Landing.css";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();
  return (
    <div id="landing-body">
      <div className="landing-container">
        <div className="landing-content">
          <h2 className="text-xl font-poppins text-white font-semibold sm:text-2xl md:text-3xl">Kalkulasi Berat Badan Ideal</h2>
          <h2 className="text-lg font-poppins text-white font-medium sm:text-2xl md:text-2xl mt-10">Mulai Proses Perhitungan</h2>
          <button className="landing-button-start text-white border-2 py-2 px-6 rounded-lg mt-[5rem] text-xl sm:text-xl" onClick={() => navigate("/input")}>
            Mulai
          </button>
          <h2 className="text-white font-poppins mt-[15rem] text-lg sm:text-2xl">Supported by BMI (HaloDoc)</h2>
        </div>
      </div>
    </div>
  );
};

export default Landing;
