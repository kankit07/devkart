import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import {
  CodeBracketIcon,
  Bars3Icon,
  XMarkIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const handleContactClick = (e) => {
    e.preventDefault();
    if (location.pathname === "/") {
      // If we're already on the home page, just scroll to the section
      const contactSection = document.getElementById("contact-us");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If we're on another page, navigate to home and then scroll
      navigate("/", { state: { scrollTo: "contact-us" } });
    }
  };
  return (
    <nav className="bg-gray-200 top-0 sticky z-10">
      <div className=" mx-auto">
        <div className="flex mx-auto justify-between w-5/6 ">
          {/* Primary menu and logo */}
          <div className="flex items-center gap-16 my-8">
            {/* logo */}
            <div>
              <a
                href="/"
                className="flex gap-1 font-bold text-gray-700 items-center "
              >
                <CodeBracketIcon className="h-12 text-primary" />
                <span className="font-bold text-2xl">DevKart</span>
              </a>
            </div>
            {/* primary */}
            <div className="hidden lg:flex gap-10 ">
              <a href="/" className="">
                Home
              </a>
              <a href="/products">Products</a>
              <a onClick={handleContactClick} style={{ cursor: "pointer" }}>
                Contact Us
              </a>
            </div>
          </div>
          {/* secondary */}
          <div className="flex gap-3">
            <div className="ml-2 flex items-center gap-2">
              {/* <input
                className="rounded-full border-solid border-2 border-gray-300 py-1 px-2 hover:bg-gray-700 hover:text-gray-100"
                type="text"
                placeholder="Search"
              /> */}
              <div>
                <button className="">
                  <ShoppingCartIcon className="h-12 text-primary" />
                </button>
              </div>
            </div>
            {/* Mobile navigation toggle */}
            <div className="lg:hidden m-4 flex items-center">
              <button onClick={() => setToggleMenu(!toggleMenu)}>
                {!toggleMenu ? (
                  <Bars3Icon className="h-12" />
                ) : (
                  <XMarkIcon className="h-12" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* mobile navigation */}
      <div
        className={`fixed z-40 w-full  bg-gray-100 overflow-hidden flex flex-col lg:hidden gap-12  origin-top duration-700 ${
          !toggleMenu ? "h-0" : "h-full"
        }`}
      >
        <div className="px-8">
          <div className="flex flex-col gap-8 font-bold tracking-wider">
            <a href="#" className="border-l-4 border-gray-600">
              Features
            </a>
            <a href="#">Pricing</a>
            <a href="#">Download</a>
            <a href="#">Classic</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
