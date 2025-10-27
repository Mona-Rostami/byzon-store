import { useState } from "react";
import { getData } from "../context/DataContext";
import FilterSection from "./FilterSection";
import Pagination from "../commponents/pagination";
import ProductCard from "./ProductCard";
import Lottie from "lottie-react";
import notfound from "../assets/empty.json";
const Products = () => {
  const { Data } = getData();

  const [search, setsearch] = useState("");
  const [category, setCategory] = useState("All");
  const [price, setprice] = useState([0, 5000]);
  const [page, setpage] = useState(1);
  const handelcategorychange = (e) => {
    setCategory(e.target.value);
    setpage(1);
  };
  const pagehandel = (SelectedPage) => {
    setpage(SelectedPage);
  };

  const lottie = <Lottie animationData={notfound} classID="w-[500px]" />;

  const filterData = Data?.filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) &&
      (category === "All" || item.category === category) &&
      item.price >= price[0] &&
      item.price <= price[1]
  );
  const dynamicPage = Math.ceil(filterData.length / 8);

  return (
    <div className="">
      {Data?.length > 0 ? (
        <div className="w-full h-full">
          <div className="grid  md:grid-cols-[1fr_2fr] grid-cols-1 lg:grid-cols-[1fr_4fr]">
            <FilterSection
            
              search={search}
              setsearch={setsearch}
              category={category}
              setCategory={setCategory}
              price={price}
              setprice={setprice}
              setpage={setpage}
              handelcategorychange={handelcategorychange}
            />

            {filterData.length === 0 || page === 0 ? (
              <div>
                <div>{lottie}</div>
              </div>
            ) : (
              <div className=" grid grid-cols-2 lg:grid-cols-3  mt-8 w-full  gap-5 ">
                {filterData.slice(page * 8 - 8, page * 8).map((item, id) => {
                  return (
                    <div key={id} className=" w-full  h-full  ">
                      <ProductCard item={item} />
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          <div className="flex justify-center w-full items-center">
            <Pagination
              dynamicPage={dynamicPage}
              pagehandel={pagehandel}
              page={page}
            />
          </div>
        </div>
      ) : (
        <div>
          {" "}
          <Lottie animationData={notfound} classID="w-[500px]" />
        </div>
      )}
    </div>
  );
};

export default Products;
