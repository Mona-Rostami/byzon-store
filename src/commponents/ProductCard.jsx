import React from "react";
import { useNavigate } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { useCart } from "../context/Cartcontext";
const ProductCard = ({ item }) => {
  const navigate=useNavigate()
  const{addToCart}=useCart()
  return (
    <div className="w-full ">
    <div className=" hover:scale-110 w-full  gap-y-2 h-full grid justify-center items-center  text-center  ">
      <img
        onClick={()=>navigate(`/products/${item.id}`)}
        className=" mx-auto"
        src={item.images}
        style={{ height: "100px" }}
        alt=""
      />
      <div className=" flex justify-center items-center">
        <h1 className=" font-medium">{item.title}</h1>
      </div>
       <p className="mb-2">${item.price}</p>
      <div className=" flex gap-x-5 justify-center items-end ">
        {" "}
       
        <button onClick={()=>addToCart(item)} className="bg-red-600 rounded-2xl w-32 h-10 flex justify-center items-center text-white ">
          <IoCartOutline className="w-6 h-6" />
          Add to card
        </button>{" "}
      </div>
    </div>
    </div>
  );
};

export default ProductCard;



