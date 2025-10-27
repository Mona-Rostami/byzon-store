import React from "react";
import Banner from "../assets/image.png";
const MidBanner = () => {
  return (
    <div className=" flex my-28 mx-auto justify-center items-center max-w-full ">
      <div
        className=" md:h-[500px] h-[50vh] w-full lg:w-3/4 lg:my-20 bg-cover rounded-2xl"
        style={{
          backgroundImage: `url(${Banner})`,
          backgroundPosition: "center",
          backgroundAttachment: "scroll",
        }}
      >
        <div className=" h-full bg-black/60 rounded-2xl flex justify-center items-center ">
          <div className=" text-white items-center text-center ">
            <h1 className=" font-bold  text-3xl mb-2 ">
              Next-Gen Electronics at our Fingertips
            </h1>
            <p className=" font-medium">
              Discover the latest tech innovations with unbeatable prices and
              free shipping on all orders
            </p>
            <div className=" flex justify-center items-center">
              {" "}
              <button className="mt-3 font-semibold text-center bg-red-600 p-2 rounded-md">
                Show New
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MidBanner;
