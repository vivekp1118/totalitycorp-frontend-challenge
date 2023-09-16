import logo1 from "../assets/calvin.svg";
import logo2 from "../assets/gucci.svg";
import logo3 from "../assets/prada.svg";
import logo4 from "../assets/varsache.svg";
import logo5 from "../assets/zara.svg";

import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex h-[auto] w-[100%] flex-col items-center justify-around bg-[#F2F0F1] sm:flex-row md:items-center">
        <div className="flex flex-col justify-around gap-4 px-10 pt-10 sm:w-[600px] sm:px-0 sm:pl-10 ">
          <p className="text-[2rem] font-extrabold leading-[1.1] md:text-[2.5rem]">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </p>
          <p className="text-sm text-gray-500">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <button
            className="rounded-3xl bg-black px-8 py-2 text-white sm:w-[fit-content]"
            onClick={() => navigate("/all-products")}
          >
            Shop Now
          </button>
          <div className="flex flex-wrap justify-center gap-5 sm:justify-start sm:gap-2">
            <p className="flex-shrink-0 basis-[100px] text-2xl font-semibold">
              200+
              <p className="text-[0.8rem] font-normal leading-[1.2] text-gray-500">
                International Brands
              </p>
            </p>

            <p className="flex-shrink-0 basis-[100px] text-2xl font-semibold">
              2,000+
              <p className="text-[0.8rem] font-normal leading-[1.2] text-gray-500">
                High-Quality Products
              </p>
            </p>
            <p className="flex-shrink-0 basis-[100px] text-center text-2xl font-semibold">
              30,000+
              <p className="text-left text-[0.8rem] font-normal leading-[1.2] text-gray-500">
                Happy Customers
              </p>
            </p>
          </div>
        </div>
        <div className="relative h-[28rem] w-full max-w-[520px] bg-[url('../src/assets/Hero.jpg')] bg-cover bg-top bg-no-repeat sm:bg-[top]"></div>
      </div>
      <div className="flex h-[auto] w-full flex-wrap items-center justify-around gap-5 bg-black p-5 ">
        <div className="block h-6 flex-shrink-0 basis-[auto] ">
          <img src={logo5} className="h-full" />
        </div>
        <div className="block h-6 flex-shrink-0 basis-[auto]">
          <img src={logo3} className="h-full" />
        </div>
        <div className="block h-6 flex-shrink-0 basis-[auto]">
          <img src={logo4} className="h-full" />
        </div>
        <div className="block h-6 flex-shrink-0 basis-[auto]">
          <img src={logo2} className="h-full" />
        </div>
        <div className="block h-6 flex-shrink-0 basis-[auto]">
          <img src={logo1} className="h-full" />
        </div>
      </div>
    </>
  );
}

export default Hero;
