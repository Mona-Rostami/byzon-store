import { Search } from "lucide-react";
import React from "react";
import { getData } from "../context/DataContext";

const FilterSection = ({
  category,
  setCategory,
  price,
  setprice,
  search,
  setsearch,
  setpage,
  handelcategorychange,
}) => {
  const { categoryonlyData } = getData();

  return (
    <div className=" flex justify-center">
    <div className="flex flex-col  justify-center mt-[30px] items-center max-sm:h-[400px] h-2/3 w-[300px] bg-gray-200 ">
      <input
        className="my-9 p-1 "
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setsearch(e.target.value)}
      />
      <h1 className="text-2xl font-semibold">Category</h1>
      <div className="text-[18px] mt-5">
        {categoryonlyData.map((item, id) => {
          return (
            <div key={id}>
              <input
                type="checkbox"
                value={item}
                checked={category === item}
                onChange={handelcategorychange}
              />
              <button>{item}</button>
            </div>
          );
        })}
      </div>
      <div className="grid justify-center items-center text-[18px] mt-5">
        <label htmlFor="">
          PriceRange:${price[0]}-${price[1]}
        </label>
        <input
          type="range"
          min="0"
          max="5000"
          value={price[1]}
          onChange={(e) => setprice([price[0], Number(e.target.value)])}
        />
      </div>
    </div>
    </div>
  );
};

export default FilterSection;
