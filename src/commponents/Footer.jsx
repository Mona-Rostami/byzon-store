import React from "react";
import { FaInstagram, FaFacebook, FaTelegram } from "react-icons/fa";
import { LuLinkedin } from "react-icons/lu";

const Footer = () => {
  return (
    <div className="mx-1">
      <footer className=" w-full rounded-md bg-black min-h-[300px] flex justify-center items-center">
        <div className=" capitalize font-semibold gap-y-2 grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 justify-center items-center gap-5  px-5 text-left text-white">
          <div className=" mt-5">
            <h1 className=" text-3xl font-bold text-red-700">Buyzone</h1>
            <p>Powening your world with the Best in Shop</p>
            <p>
              123 shop st,style city.ny 10001 <br />
              emali:support@Buyzone <br /> phone:123/ 456-7890
            </p>
          </div>
          <div>
            <h1 className="text-2xl">customer service</h1>
            <p>contact us shopping FAQS orser tracking size Guide</p>
          </div>
          <div className=" lg:grid md:grid justify-center items-center">
            <h1 className="text-2xl">follow us</h1>
            <ul className="flex gap-4 ">
              <li>
                <FaInstagram size={25} />
              </li>
              <li>
                <FaFacebook size={25} />
              </li>
              <li>
                <FaTelegram size={25} />
              </li>
              <li>
                {" "}
                <LuLinkedin size={25} />
              </li>
            </ul>
          </div>
          <div>
            <h1 className="text-2xl">stay in the loop</h1>
            <p>
              subscribe to get special offers <br />
              free giveaways, and more
            </p>{" "}
            <div className=" flex justify-around my-4 ">
              <input
                className="w-36 placeholder-gray-950 "
                type="text"
                placeholder="Your email address"
              />
              <button className="bg-red-600 p-2 rounded-md">subscribe</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
