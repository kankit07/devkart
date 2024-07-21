import React from "react";
import Cart from "../../assets/Cart.png";

const HeroBanner = () => {
  return (
    <div className="bg-primary-500 w-full flex flex-col md:flex-row items-center relative">
      <div className="w-full md:w-2/4 p-8 md:p-16 lg:p-36">
        <h1 className="text-xl md:text-2xl font-bold">Welcome to</h1>
        <h1 className="text-4xl md:text-5xl font-bold mt-2">DevKart</h1>
        <p className="text-base md:text-lg mt-4 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button className="bg-yellow-300 text-lg md:text-xl py-2 px-6 rounded-lg hover:bg-red-500 transition duration-300">
          Shop Now
        </button>
      </div>
      <div className="w-full md:w-2/4  flex justify-center">
        <img
          src={Cart}
          alt="hero"
          // width={"600px"}
          className="w-full max-w-md md:max-w-full h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default HeroBanner;
