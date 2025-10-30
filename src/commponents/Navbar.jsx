import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { PiMapPinLine } from "react-icons/pi";
import { MdArrowDropDown } from "react-icons/md";
import { BsXLg } from "react-icons/bs";
import { PiShoppingCartLight } from "react-icons/pi";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import IconeMenu from'./IconeMenu'
import { useCart } from "../context/Cartcontext";
import { TbMenu2 } from "react-icons/tb";

const Navbar = ({ setDropdown, dropdown, hiden, setHiden, location }) => {
  const navigate = useNavigate();
  const { cartdata } = useCart();
  console.log(cartdata);

  const ToggelDrowbedown = () => {
    setDropdown(!dropdown);
  };
  return (
    <div
      className="  w-full  relative "
      style={{ boxShadow: " 5px 5px 48px #bcbcbc,-5px -5px 48px #ffffff" }}
    >
      <div className=" flex md:justify-between  items-center">
        <div className="flex justify-end items-center">
          <Link to={"/"}>
            <h1 className=" p-5 text-5xl font-medium">
              <span className="text-red-700 font-semibold">B</span>yzon
            </h1>
          </Link>

          <div className="flex   gap-1 text-2xl max-sm:hidden md:mt-2">
            <PiMapPinLine className="mt-1 text-red-600" />
            <div className=" ">
              {!hiden && location ? (
                <div className=" flex font-semibold">
                  <p className="text-red-500 ">{location.country}</p>
                  <p>{location.city}</p>
                </div>
              ) : (
                <div>Add Address</div>
              )}
            </div>
            <MdArrowDropDown onClick={ToggelDrowbedown} className="mt-1" />
            <div></div>
            {dropdown && (
              <div className="z-10 absolute mt-14 bg-purple-400 max-w-[200px] max-h-[250px]">
                <h2 className="flex justify-between text-4xl ml-3">
                  chang Location
                  <span className="m-2">
                    <BsXLg size={25} onClick={ToggelDrowbedown} />
                  </span>
                </h2>{" "}
                <div className="grid text-sm gap-y-2 my-5  text-center">
                  <button
                    className=" bg-red-500  text-red-50 p-1 mx-3 font-medium rounded-md cursor-pointer"
                    onClick={() => setHiden(true)}
                  >
                    {" "}
                    Detect my location
                  </button>
                  <button
                    className="bg-red-500 text-red-50 p-1  mx-3 font-medium rounded-md cursor-pointer hover:bg-green-500"
                    onClick={() => setHiden(false)}
                  >
                    Add location
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        
        <div className=" md:flex justify-center lg:gap-5 lg:mx-5 items-center mt-2  ">
          <ul className="flex md:text-[18px] max-sm:hidden font-medium justify-center items-center  lg:gap-x-10 md:gap-x-3  ">
            <li className="">
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "  border-b-red-500 border-b-2 translate-all"
                      : "text-black"
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/products"}
                className={({ isActive }) =>
                  `${isActive ? "  border-b-red-500 border-b-2" : "text-black"}`
                }
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/About"}
                className={({ isActive }) =>
                  `${isActive ? "  border-b-red-500 border-b-2" : "text-black"}`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/contact"}
                className={({ isActive }) =>
                  `${isActive ? "  border-b-red-500 border-b-2" : "text-black"}`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <div
            className=" flex gap-5 justify-end pr-5 max-sm:w-[200px]  "
           
          >
            {" "}
            <Link className="flex" to={'/cart'}>
              {" "}
              <PiShoppingCartLight className="h-7 w-7 " />
              <span className=" h-3 w-3 bg-rose-500 text-[8px] text-center  text-amber-50 rounded-full">
              {cartdata.length}
            </span>
            </Link>
            {" "}
            <div className="  md:hidden z-10 ">
         <IconeMenu/>
          </div>
          </div>
           <div className="mt-2 max-sm:hidden">
          <SignedOut>
            <SignInButton className="bg-red-500 px-2 font-bold  text-black/50 text-lg rounded-md text-nowrap " />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
        </div>
         
       
      </div>
    </div>
  );
};

export default Navbar;
