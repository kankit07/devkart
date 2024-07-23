import React, { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import {
  CodeBracketIcon,
  Bars3Icon,
  XMarkIcon,
  ShoppingCartIcon,
  FunnelIcon,
} from "@heroicons/react/24/outline";
import { CartState } from "../../context/context";
import Filters from "../Products/Filters";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [filterMenu, setFilterMenu] = useState(false);

  const {
    state: { cart },
    filterDispatch,
  } = CartState();

  const navigate = useNavigate();
  const location = useLocation();

  const handleContactClick = (e) => {
    e.preventDefault();
    setToggleMenu(false);
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
      <div className=" lg:mx-auto">
        <div className="flex lg:mx-auto justify-between lg:w-5/6 ">
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
              <Link to="/" className="">
                Home
              </Link>
              <Link to="/products">Products</Link>
              <Link onClick={handleContactClick} style={{ cursor: "pointer" }}>
                Contact Us
              </Link>
            </div>
            <div className="hidden lg:flex">
              <input
                type="text"
                placeholder="Search Products"
                className="p-3 rounded-lg bg-white w-[500px]"
                //
                onChange={(e) => {
                  filterDispatch({
                    type: "FILTER_BY_SEARCH",
                    payload: e.target.value,
                  });
                }}
              />
            </div>
          </div>
          {/* secondary */}
          <div className="flex gap-3">
            <div className="ml-2 flex items-center gap-2">
              <div className="relative">
                <button className="relative">
                  <Link to="/checkout">
                    <ShoppingCartIcon className="h-12 text-primary" />
                    {cart.length > 0 && (
                      <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-yellow-400 text-xs font-bold text-black">
                        {cart.length}
                      </span>
                    )}
                  </Link>
                </button>
              </div>
            </div>
          </div>
          {/* Mobile navigation toggle */}
          <div className="lg:hidden flex items-center">
            <button onClick={() => setFilterMenu(!filterMenu)}>
              {!filterMenu ? (
                <FunnelIcon className="h-12" />
              ) : (
                <XMarkIcon className="h-12" />
              )}
            </button>
          </div>
          <div className="lg:hidden flex items-center">
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
      {/* mobile navigation */}
      <div
        className={`fixed z-40 w-full  bg-gray-100 overflow-hidden flex flex-col lg:hidden gap-12  origin-top duration-700 ${
          !filterMenu ? "h-0" : "h-full"
        }`}
      >
        <div className="p-8 lg:flex justify-center md:pt-16 lg:bg-gray-200 lg:w-1/3">
          <Filters />
        </div>
      </div>
      <div
        className={`fixed z-40 w-full  bg-gray-100 overflow-hidden flex flex-col lg:hidden gap-12  origin-top duration-700 ${
          !toggleMenu ? "h-0" : "h-full"
        }`}
      >
        <div className="px-8">
          <div className="flex flex-col gap-8 font-bold tracking-wider">
            <Link
              onClick={() => {
                setToggleMenu(false);
              }}
              to="/"
              className="border-l-4 border-gray-600"
            >
              Home
            </Link>
            <Link
              onClick={() => {
                setToggleMenu(false);
              }}
              to="/products"
            >
              Products
            </Link>
            <Link onClick={handleContactClick} style={{ cursor: "pointer" }}>
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
