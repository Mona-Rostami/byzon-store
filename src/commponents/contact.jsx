import React from "react";

const contact = () => {
  return (
    <div className=" max-w-7xl grid justify-center items-center ">
      <h1 className=" flex justify-center mx-auto text-2xl font-bold my-5 md:my-20 ">
        Get in Touch whith <span className=" text-red-500">Byzon</span>
      </h1>
      <div className=" relative w-full  md:mt-15 mx-2 md:mx-10 h-full grid justify-center items-center
       md:grid-cols-2 ">
        <div  className=" lg:mx-40  mx-5 flex flex-col justify-center gap-y-5 ">
          <h1 className="text-red-600 font-bold">Contact info</h1>
          <p>top quality electronic products <br /> from trusted brands</p>
          <div className="">
            {" "}
            <p>
              <span className=" text-red-500">Address:</span>123 Tech iran
            </p>
            <p>
              <span className=" text-red-500">Imail:</span> support@Byzon.com
            </p>
            <p>
              <span className=" text-red-500">phone:</span>9676543210
            </p>
          </div>
        </div>
        <div className="grid gap-y-5  w-90 md:w-[40vw] pl-5">
          <label htmlFor="">Your Name</label>
          <input type="text" className="border" />
          <label htmlFor="">Email Address</label>
          <input type="text"/>
          <label htmlFor="">Your Message</label>
          <input className="p-2 " type='email' placeholder="Type your message" />
        </div>
        <div className=" lg:mx-[24vw] lg:my-10 ">        <button className="hover:bg-rose-500 border border-black  rounded-md bg-red-500 w-[80vw] lg:w-[40vw]  mx-10 my-8 p-2 text-white">Send Message</button>
</div>
      </div>
    </div>
  );
};

export default contact;
