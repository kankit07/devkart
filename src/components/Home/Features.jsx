import React from "react";
import {
  CreditCardIcon,
  ShieldCheckIcon,
  TruckIcon,
  BanknotesIcon,
} from "@heroicons/react/24/solid";

const Features = () => {
  return (
    <div className="pl-[100px] pr-[100px] pt-32 pb-32 bg-white">
      <div className=" md:ml-12 w-full md:grid md:grid-cols-3 md:gap-4 md:pl-24 flex flex-wrap justify-center gap-12">
        <div className="bg-gray-300 p-6 rounded-lg shadow-lg w-full sm:w-64 md:w-72 lg:w-80 flex flex-wrap justify-center items-center">
          <TruckIcon className="h-12 items-center justify-center" />
          <p>Super Fast And Fre Delivery</p>
        </div>
        <div className="md:grid md:grid-rows-2 gap-12 md:gap-8 flex flex-wrap ">
          <div className="flex items-center gap-2 bg-gray-300 p-6 rounded-lg shadow-lg w-full sm:w-64 md:w-72 lg:w-80">
            <ShieldCheckIcon className="h-12" />
            <p>Non-Contact Shipping</p>
          </div>
          <div className="flex items-center gap-2 bg-gray-300 p-6 rounded-lg shadow-lg w-full sm:w-64 md:w-72 lg:w-80">
            <BanknotesIcon className="h-12" />
            <p className="justify-center items-center">Money-Back Guaranteed</p>
          </div>
        </div>
        <div className="bg-gray-300 p-6 rounded-lg shadow-lg w-full sm:w-64 md:w-72 lg:w-80 flex flex-wrap justify-center items-center">
          <CreditCardIcon className="h-12" />
          <p>Super Secure Payment System</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
