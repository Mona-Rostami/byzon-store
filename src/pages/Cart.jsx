import React from "react";
import { useCart } from "../context/Cartcontext";
import { RiDeleteBin6Line } from "react-icons/ri";
import { LuNotebookText } from "react-icons/lu";
import { CiDeliveryTruck } from "react-icons/ci";
import { IoBagHandle } from "react-icons/io5";
import notfound from "../assets/empty.json";
import Lottie from "lottie-react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartdata, deLetecategory, updateQuntity } = useCart();
  const totalprice = cartdata.reduce(
    (total, item) => total + item.price * item.quntity,
    0
  );
  const Navigation = useNavigate();

  return (
    <div className=" grid justify-center w-full  items-center md:mx-1 my-15">
      {cartdata.length > 0 ? (
        <div>
          <h1 className=" text-2xl ml-[7vw] font-bold">
            My Cart({cartdata.length})
          </h1>

          {cartdata?.map((item, id) => {
            return (
              <div key={id} className="  flex justify-center items-center">
                <div className=" bg-gray-100  md:w-[88%] grid grid-cols-2 gap-20 justify-center  my-5 mx-2  items-center">
                  <div className=" flex items-center gap-5">
                    <img className="w-20 h-25" src={item.images} alt="" />

                    <div className="text-lg font-semibold">
                      {" "}
                      <h1 className=" line-clamp-">{item.title}</h1>
                      <span className=" text-red-500">${item.price}</span>
                    </div>
                  </div>
                  <div className=" flex justify-around items-center ">
                    <button className=" bg-red-600 px-3 rounded-sm py-1 font-semibold text-white flex justify-between">
                      <span
                        onClick={() =>
                          updateQuntity(cartdata, item.id, "decrease")
                        }
                        className="mr-4"
                      >
                        -
                      </span>
                      <span>{item.quntity}</span>
                      <span
                        onClick={() =>
                          updateQuntity(cartdata, item.id, "increase")
                        }
                        className="ml-4"
                      >
                        +
                      </span>
                    </button>
                    <div
                      onClick={() => deLetecategory(item.id)}
                      className="  text-red-600  shadow-xl shadow-gray-200 hover:bg-gray-200 m-auto w-10 h-10 rounded-full p-2 text-center"
                    >
                      <RiDeleteBin6Line size={25} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center">
          <h1>Oh no!Your cart is empty</h1>
          <div className=" flex justify-center items-center">
            <Lottie
              animationData={notfound}
              className="w-[500px]"
              classID="w-[500px]"
            />
          </div>
          <button
            onClick={() => Navigation("/products")}
            className=" bg-red-600 mx-5 my-2 p-2 rounded-md"
          >
            Continue Shopping
          </button>
        </div>
      )}

      {/* delivery info */}
      <div className=" grid justify-center my-1 items-center md:grid-cols-2 gap-[2vw] md:mx-[5vw] mx-[15vw]">
        <div className="   bg-gray-100 p-5">
          <div className=" grid gap-5 ">
            <h1 className="text-2xl font-semibold">Delivery Info</h1>
            <div className="  ">
              <h3>Full Name</h3>
              <input className="w-full" type="text" />
            </div>
            <div>
              <h3 className="py-1">Address</h3>
              <input className="w-full" type="text" />
            </div>
            <div className="grid grid-cols-2 w-full gap-x-15">
              <div className="">
                <h3 className="py-1">State</h3>
                <input className="w-full" type="text" />
              </div>
              <div>
                <h3 className="py-1">PostCode</h3>
                <input className="w-full" type="text" />
              </div>
              <div>
                <h3 className="py-1">Country</h3>
                <input className="w-full" type="text" />
              </div>
              <div>
                <h3 className="py-1">Phone Number</h3>
                <input className="w-full" type="text" />
              </div>
            </div>
            <div className="  bg-red-600 w-20 py-1 text-center rounded-sm text-amber-50">
              <button>Submit</button>
            </div>
          </div>
        </div>
        {/* bill details */}
        <div className="p-5 shadow-xl ">
          <h1 className="flex font-bold "> Bill details</h1>
          <div className=" grid grid-cols-2 justify-center ">
            <div className="grid  gap-2">
              <div>
                <h1 className="flex ">
                  <span className="mt-1">
                    <LuNotebookText />{" "}
                  </span>
                  <p className=" ">items total</p>
                </h1>
              </div>
              <div>
                <h1 className="flex">
                  {" "}
                  <span>
                    <CiDeliveryTruck size={22} />
                  </span>
                  <p>Delivery Charge</p>
                </h1>
              </div>

              <div>
                <h1 className="flex">
                  <span>
                    <IoBagHandle />
                  </span>
                  Handling Charge
                </h1>
              </div>
            </div>
            <div className=" grid justify-end mr-2">
              <h1>${totalprice.toFixed(2)}</h1>
              <h1>
                $25 <span className="text-red-500">FREE</span>
              </h1>
              <h1 className="text-red-500">$5</h1>
            </div>
          </div>
          <hr className=" text-gray-300" />
          <div>
            <div className=" flex justify-between mx-2">
              <h1 className=" font-semibold">Grand total</h1>
              <p className=" font-semibold">${totalprice.toFixed(2)}</p>
            </div>
            <h2 className=" mx-2 my-4 text-gray-700">Apply Promo Code</h2>
            <div className=" flex justify-around gap-x-5 mx-2 my-4">
              <input
                placeholder="Enter code"
                className=" w-full p-1"
                type="text"
              />
              <button className=" border p-1 border-gray-300">Apply</button>
            </div>
            <div className=" flex justify-center items-center m-auto">
              {" "}
              <button className=" w-full  text-amber-50 bg-red-600 p-2 rounded-md">
                proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
