import React, { useState } from "react";
import { TbMenu2 } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { CiCircleRemove } from "react-icons/ci";
const IconeMenu = () => {
  const [open, setopen] = useState(false);
  const navigate = useNavigate();
  return (
    <div>

     {
     !open?<div onClick={()=>setopen(!open)}><TbMenu2 size={25} /></div>:<div onClick={()=>setopen(!open)}><CiCircleRemove size={25}/></div>
     }

      
      {open?<div>
            <div className="  absolute left-0 top-20 w-[100vw] h-[60vh]  flex flex-col gap-10 justify-center items-center  bg-gradient-to-tl from-blue-900  to-blue-950 rounded-2xl text-white ">
              <h1 onClick={() => navigate("/")}>Home</h1>
              <h1 onClick={() => navigate("/products")}>Product</h1>
              <h1 onClick={() => navigate("/About")}>About</h1>
              <h1 onClick={() => navigate("/Contact")}>Contact</h1>
            </div>
       </div>: <div></div>
      }
       
    </div>
  );
};

export default IconeMenu;
