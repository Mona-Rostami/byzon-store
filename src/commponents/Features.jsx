import React from "react";
import { Truck, Lock, RotateCcw, Clock } from "lucide-react";

const features = [
  { icon: Truck, text: "Free Shipping", subtext: "on orders over $100" },
  { icon: Lock, text: "secure payment", subtext: "100% protected payments" },
  { icon: RotateCcw, text: "Easy Returns", subtext: "30-day return policy" },
  { icon: Clock, text: "24/7 Suppor", subtext: "Dedicated customer service" },
];
const Features = () => {
  return (
    <div>
      <div className=" my-25">
        <div className="flex  justify-around items-center gap-8 md:m-2 max-sm:grid grid-cols-2 ">
          {features.map((item, id) => {
            return (
              <div key={id}>
                <div className="">
                  <div className=" flex justify-center items-center  gap-x-5">
                    <div>
                      <item.icon className="w-8 h-8" />
                    </div>
                    <div>
                      <p>{item.text}</p>
                      <p>{item.subtext}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Features;
