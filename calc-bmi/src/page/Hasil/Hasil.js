import "../Hasil/Hasil.css";
import { useLocation, useNavigate } from "react-router-dom";
import React from "react";

const Hasil = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const bmi = location.state?.bmi;

  let hasilText = "";
  let hasilColor = "";
  let pesan = "";

  if (bmi >= 18.5 && bmi <= 25) {
    hasilText = "Berat Badan Normal";
    hasilColor = "text-sky-300";
    pesan = "Terus Pertahankan Jangan Insecure !";
  } else if (bmi > 25) {
    hasilText = "Berat Badan Berlebih";
    hasilColor = "text-red-700 font-bold";
    pesan = "Terus Berolahraga dan Kurangi Lemak";
  } else if (bmi < 18) {
    hasilText = "Berat Badan Kurang";
    hasilColor = "text-red-400 font-bold";
    pesan = "Banyakin Makannya ya :)";
  }
  return (
    <div id="hasil-body-pria">
      <div className="hasil-container">
        <div className="hasil-content">
          <h2 className="text-xl fonat-poppins text-white font-semibold sm:text-2xl md:text-3xl">Kalkulasi Berat Badan Ideal</h2>
          <div className="hasil-card">
            <h2 className="text-white font-poppins text-xl sm:text-2xl">Hasil :</h2>
            <h2 className="font-poppins text-md sm:text-lg mt-10 text-white">Berdasarkan Hasil Anda Dinyatakan</h2>
            <h2 className={`font-poppins text-lg sm:text-xl mt-6 ${hasilColor}`}>{hasilText}</h2>
            <h2 className="text-white mt-7">Pesan Dari Kami</h2>
            <h2 className="text-white mt-4">{pesan}</h2>
            <button className="text-white bg-blue-700 px-7 py-2 mt-[2rem] rounded-md font-poppins text-md sm:text-lg" onClick={() => navigate("/")}>
              Cek Kembali
            </button>
          </div>
          <h2 className="text-white font-poppins mt-[4rem] text-lg sm:text-2xl">Supported by BMI (HaloDoc)</h2>
        </div>
      </div>
    </div>
  );
};

export default Hasil;
