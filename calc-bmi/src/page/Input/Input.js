import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Input/Input.css";

const Input = () => {
  const navigate = useNavigate();
  const [beratBadan, setBeratBadan] = useState("");
  const [tinggiBadan, setTinggiBadan] = useState("");

  const calculateBMI = () => {
    const berat = parseFloat(beratBadan);
    const tinggi = parseFloat(tinggiBadan) / 100; // Convert cm to meters
    const bmi = berat / (tinggi * tinggi);

    navigate("/hasil", { state: { bmi } });
  };

  return (
    <div id="input-body">
      <div className="input-container">
        <div className="input-content">
          <h2 className="text-xl font-poppins text-white font-semibold sm:text-2xl md:text-3xl">Kalkulasi Berat Badan Ideal</h2>
          <div className="input-card">
            <h2 className="text-white font-poppins text-md sm:text-xl">Masukan Berat Badan *kg</h2>
            <input placeholder="Masukan Berat Badan" className="bg-transparent text-white border-b-2 w-[17rem] mt-5 sm:w-[20rem]" type="text" value={beratBadan} onChange={(e) => setBeratBadan(e.target.value)} />
            <h2 className="text-white font-poppins text-md mt-10 sm:text-xl">Masukan Tinggi Badan *cm</h2>
            <input placeholder="Masukan Tinggi Badan" className="bg-transparent text-white border-b-2 w-[17rem] mt-5 sm:w-[20rem]" type="text" value={tinggiBadan} onChange={(e) => setTinggiBadan(e.target.value)} />
            <button className="text-white bg-blue-700 px-7 py-2 mt-[4rem] rounded-md font-poppins text-md sm:text-xl" onClick={calculateBMI}>
              Kalkulasi
            </button>
          </div>
          <h2 className="text-white font-poppins mt-[4rem] text-lg sm:text-2xl">Supported by BMI (HaloDoc)</h2>
        </div>
      </div>
    </div>
  );
};

export default Input;
