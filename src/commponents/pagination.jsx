import React from "react";
const getpage = (total, current) => {
  const pages = [];
  if (total <= 5) {
    for (let i = 1; i <= total; i++) pages.push(i);
  } else {
    if (current <= 3) {
      pages.push(1, 2, 3, "...", total);
    } else if (current >= total - 2) {
      pages.push(1, "...", total - 2, total - 1, total);
    } else {
      pages.push(1, "...", current - 1, current, current + 1, "...", total);
    }
  }
  return pages;
};
const Pagination = ({ dynamicPage, page, pagehandel, lottie }) => {
  return (
    <div className=" flex gap-5 my-15  text-2xl font-semibold">
      <button
        className={`${
          page === 1 || page === 0
            ? "text-red-500 p-2 rounded-xl"
            : "text-black"
        }`}
        onClick={() => {
          if (page > 0) {
            pagehandel(page - 1);
          }
        }}
      >
        prive
      </button>

      <div className="flex justify-center items-center gap-5">
        {getpage(dynamicPage, page)?.map((item, id) => {
          return (
            <div key={id}>
              <label
                htmlFor=""
                onClick={() => typeof item === "number" && pagehandel(item)}
                className={`cursor-pointer ${
                  item === page ? "font-bold text-red-600" : ""
                }`}
              >
                {item}
              </label>
            </div>
          );
        })}
      </div>

      <button
        disabled={page === dynamicPage}
        className={`${
          page === dynamicPage ? "text-red-500 p-2 rounded-xl " : "text-black"
        }`}
        onClick={() => {
          if (page < dynamicPage) {
            pagehandel(page + 1);
          }
        }}
      >
        next
      </button>
    </div>
  );
};

export default Pagination;
