import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getData } from "../context/DataContext";
import { useNavigate } from "react-router-dom";
export default function SimpleSlider() {
  const navigat = useNavigate();

  const { Data } = getData();
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    
  };

  return (
    <Slider {...settings} className="">
      {Data.slice(0, 5).map((item, id) => {
        return (
          <div key={id}>
            <div className="w-full min-h-[50vh] grid grid-cols-2 gap-4  bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700">
              <div className="w-full flex justify-center items-center px-5">
                <div className="">
                  <h3></h3>
                  <h1 className=" text-4xl text-white line-clamp-2">
                    {item.title}
                  </h1>
                  <p className=" line-clamp-3">{item.description}</p>
                  <div className=" ">
                    <button
                      className=" border p-2 mt-2 text-2xl border-neutral-700 bg-gradient-to-bl text-neutral-800 font-bold from-red-500 via-red-500 to-red-600"
                      onClick={() => navigat("/products")}
                    >
                      Show Now
                    </button>
                  </div>
                </div>
              </div>
              <div className=" w-[45vw] h-[45vw] cursor-pointer hover:scale-105 md:w-[350px] my-20 mx-[-1pc] md:h-[350px] flex justify-center items-center bg-stone-200 rounded-full shadow-2xl shadow-stone-700 ">
                <img
                  className="  p-10 "
                  src={item.images}
                  style={{ width: "40vw", height: "45vw" }}
                  alt=""
                />
              </div>
            </div>
          </div>
        );
      })}
    </Slider>
  );
}
