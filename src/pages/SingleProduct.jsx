import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { useParams } from "react-router-dom";
import { useCart } from "../context/Cartcontext";

const SingleProduct = () => {
  const { addToCart } = useCart();
  const params = useParams();
  console.log(params);
  const [singlepage, setSinglepage] = useState([]);

  const getApi = async () => {
    try {
      const res = await axios.get(
        `https://dummyjson.com/products/${params.id}`
      );
      const singledata = res.data;
      setSinglepage(singledata);
      console.log(singledata);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getApi();
  }, []);
  console.log(singlepage);

  return (
    <div>
      {singlepage ? (
        <div>
          <div>
            <h1>
              <span>Home</span>/<span>Products</span>/
              <span>{singlepage.title}</span>
            </h1>
          </div>
          <div className="grid grid-cols-2 gap-5 my-15">
            <div className=" grid justify-center items-center">
              <img className=" w-50" src={singlepage.images} alt="" />
            </div>
            <div className="flex flex-col justify-center ">
              <h1 className="text-2xl font-semibold">{singlepage.title}</h1>
              <p className="text-gray-500">{singlepage.category}</p>
              <h1 className="font-semibold my-5">
                <span className="text-red-700 ">${singlepage.price}</span>
                <button className="bg-red-600 p-2 text-white rounded-md">
                  4% discount
                </button>
              </h1>
              <p className=" text-gray-800">{singlepage.description}</p>
              <div className="flex gap-5 my-8">
                <span> Quntity:</span>
                <input className="w-20" type="number" value={1} />
              </div>
              <div className=" flex justify-center items-center w-1/2 bg-red-700 ">
                <IoCartOutline size={25} />{" "}
                <button
                  className=" p-2 rounded-md text-white font-semibold"
                  onClick={() => addToCart(singlepage.length)}
                >
                  add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default SingleProduct;
