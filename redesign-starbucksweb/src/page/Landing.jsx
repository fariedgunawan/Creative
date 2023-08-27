import "./Landing.css";
import location from "../assets/location.png";
import sb1 from "../assets/content.png";
import sb2 from "../assets/content2.png";
const Landing = () => {
  return (
    <div id="landing-body">
      {/*NAV */}
      <div className="landing-nav flex justify-between font-montserrat items-center">
        <div className="nav-left flex items-center gap-4 text-[20px]">
          <img src="https://www.starbucks.co.id/image/logo.png" className="w-[61px]" />
          <h2 className="font-bold text-white">STARBUCKS</h2>
        </div>
        <div className="nav-center flex gap-[60px] text-[16px] font-semibold text-white">
          <h2>MENU</h2>
          <h2>PROMO</h2>
          <h2>REWARDS</h2>
          <h2>ABOUT</h2>
        </div>
        <div className="nav-right flex gap-[65px]">
          <button className="font-semibold text-[#007042] text-[15px]">LOGIN</button>
          <button className="font-semibold text-white bg-[#007042] px-[25px] py-[5px] rounded-lg text-[15px]">JOIN US</button>
        </div>
      </div>
      {/*END NAV */}

      {/*hero */}
      <div className="landing-hero flex justify-between items-center font-montserrat mt-[3rem] text-white">
        <div className="hero-caption w-[420px]">
          <h2 className="text-[50px] font-bold">Summer's Brightest Drinks</h2>
          <h2 className="text-[18px] font-medium text-justify mt-[37px]">
            We won't let that hold us back. We'll still make the most of our Summer together, doing anything and everything that makes us happy with no regrets or second thoughts.{" "}
          </h2>
          <div className="button-order flex justify-between mt-[30px]">
            <button className="font-bold text-[#007042] bg-white border-2 border-[#007042] px-[30px] py-[15px] rounded-xl">ORDER NOW</button>
            <button className="flex items-center font-bold text-white px-[20px] py-[15px] bg-transparent border-2 rounded-xl ">
              <img src={location} className="w-[24px] mr-1" />
              FIND A STORE
            </button>
          </div>
        </div>
        <div className="hero-img flex gap-[80px] mr-[3rem]">
          <img src={sb1} className="img-1 pt-[5rem]" />
          <img src={sb2} className="img-2 pb-[6rem] " />
        </div>
      </div>
      {/*end hero */}
    </div>
  );
};

export default Landing;
