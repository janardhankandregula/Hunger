import React from "react";
import { useState } from "react";
import { HEADER_LOGO } from "../utilis/constants";
import useCheckInternet from "../utilis/useCheckInternet";
import { avatar_png } from "../utilis/constants";
import { Link } from "react-router-dom";
import { useLogin } from "../utilis/loginContext";
import { useCartPage } from "../utilis/CartPageContext";
import { useSelector } from "react-redux";
import {
  FaShoppingCart,
  FaHome,
  FaUser,
  FaEnvelope,
  FaCircle,
} from "react-icons/fa";

const TailwindHeader = () => {
  const { login, logout, loggedInUser } = useLogin();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const { cartLength } = useCartPage();
  const cartLength2 = useSelector((state) => state.cart.items.length);
  //console.log(cartLength2);

  const clicked = () => {
    setIsLoggedIn((prevState) => !prevState);
    isLoggedIn ? logout() : login("janardhan");
    //console.log(isLoggedIn);
  };

  const internetStatus = useCheckInternet();

  return (
    <div>
      <nav className="bg-gradient-to-r from-indigo-200 to-red-500">
        <div className="flex w-full px-2 sm:px-6 lg:px-8 ">
          <div className="relative flex items-center justify-between w-full">
            <div className="flex flex-1 items-center justify-between sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center mb-6">
                <img
                  className="w-[200px] mt-[25px] rounded-2xl"
                  src={HEADER_LOGO}
                  alt="Your Company"
                />
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-8 mt-[80px] ml-40 pl-40">
                  <Link
                    to="/"
                    className="rounded-md bg-gray-900 px-3 py-2 text-xl font-medium text-white"
                  >
                    <FaHome size={24} />
                  </Link>
                  <Link
                    to="/About"
                    className="rounded-md px-3 py-2 text-xl font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    <FaUser size={24} />
                  </Link>
                  <Link
                    to="/Contact"
                    className="rounded-md px-3 py-2 text-xl font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    <FaEnvelope size={24} />
                  </Link>
                  <Link
                    to="/CartPage"
                    className="relative rounded-md px-3 pb-[20px] text-xl font-medium text-gray-300 hover:bg-gray-700 hover:text-white flex items-center"
                  >
                    <FaShoppingCart size={30} />{" "}
                    <span
                      data-testid="cartlen"
                      className="absolute -top-0.5 -right-0.5 w-4 h-4 flex items-center justify-center bg-black text-white text-lg font-bold rounded-xl p-3"
                    >
                      {cartLength2}
                    </span>
                  </Link>
                  <Link className="rounded-md px-3 py-2 text-xl font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                    <FaCircle size={16} color={internetStatus} />
                    <span style={{ marginLeft: 8 }}>
                      {/* {internetStatus ? 'Online' : 'Offline'} */}
                    </span>
                  </Link>
                  <button
                    data-testid="login-button"
                    className="rounded-md px-3 py-2 text-xl font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    onClick={clicked}
                  >
                    {isLoggedIn ? "log-out" : "log-in"}
                  </button>
                  <span className="rounded-md px-3 py-2 text-xl font-medium text-black-300 hover:bg-gray-700 hover:text-white">
                    {loggedInUser}
                  </span>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 flex items-center pr-2 mr-10 right-[10px] sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                type="button"
                className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span className="absolute -inset-1.5"></span>
                <span className="sr-only">View notifications</span>
                <svg
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                  />
                </svg>
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 flex items-center justify-center bg-white text-black text-lg font-bold rounded-xl p-3">
                  {cartLength2}
                </span>
              </button>
              <div className="relative ml-5">
                <button
                  type="button"
                  className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <span className="absolute -inset-1.5"></span>
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-12 w-12 rounded-full"
                    src={avatar_png}
                    alt="error"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default TailwindHeader;
