import React from "react";
import galery1 from "../assets/galery-1.png";
import galery2 from "../assets/galery-2.png";
import galery3 from "../assets/galery-3.png";
import row from "../assets/Right.png";

const Galery = () => {
  return (
    <div className="galery-section flex justify-between px-[144px] items-center mt-[16px] mb-[4rem]">
      <div className="galery-card flex flex-col items-center">
        <img src={galery1} />
        <div className="galery-caption-card p-[16px] flex flex-col items-center gap-[16px] bg-[#F5F7FA] -mt-[96px] rounded-[8px] shadow-xl">
          <h2 className="w-[285px] text-center text-[20px] font-semibold leading-[28px] text-[#717171]">Creating Streamlined Safeguarding Processes with OneRen</h2>
          <h2 className="text-[#4CAF4F] text-[20px] font-semibold flex items-center gap-[8px]">
            Readmore{" "}
            <span>
              <img src={row} />
            </span>
          </h2>
        </div>
      </div>
      <div className="galery-card flex flex-col items-center">
        <img src={galery2} />
        <div className="galery-caption-card p-[16px] flex flex-col items-center gap-[16px] bg-[#F5F7FA] -mt-[96px] rounded-[8px] shadow-xl">
          <h2 className="w-[285px] text-center text-[20px] font-semibold leading-[28px] text-[#717171]">What are your safeguarding responsibilities and how can you manage them?</h2>
          <h2 className="text-[#4CAF4F] text-[20px] font-semibold flex items-center gap-[8px]">
            Readmore{" "}
            <span>
              <img src={row} />
            </span>
          </h2>
        </div>
      </div>
      <div className="galery-card flex flex-col items-center">
        <img src={galery3} />
        <div className="galery-caption-card p-[16px] flex flex-col items-center gap-[16px] bg-[#F5F7FA] -mt-[96px] rounded-[8px] shadow-xl">
          <h2 className="w-[285px] text-center text-[20px] font-semibold leading-[28px] text-[#717171]">Revamping the Membership Model with Triathlon Australia</h2>
          <h2 className="text-[#4CAF4F] text-[20px] font-semibold flex items-center gap-[8px]">
            Readmore{" "}
            <span>
              <img src={row} />
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Galery;
