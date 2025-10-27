import { createContext, useContext, useState } from "react";
import React from "react";
export const context = createContext();
const Cartcontext = ({ children }) => {
  const [cartdata, setcartdata] = useState([]);
  const addToCart = (prop) => {
    const updatecart = cartdata.find((item) => item.id === prop.id);
    if (updatecart) {
      const newUpdate = cartdata.map((item) =>
        item.id === prop.id ? { ...item, quntity: item.quntity + 1 } : item
      );
      setcartdata(newUpdate);
    } else {
      setcartdata([...cartdata, { ...prop, quntity: 1 }]);
    }
  };

  const updateQuntity = (cartdata, productId, action) => {
    const deIncrease = cartdata
      .map((item) => {
        if (item.id === productId) {
          let guntitys = item.quntity;
          console.log(guntitys);

          if (action === "decrease") {
            guntitys = guntitys - 1;
          } else if (action === "increase") {
            guntitys = guntitys + 1;
          }
          return guntitys > 0 ? { ...item, quntity: guntitys } : null;
        }
        return item;
      })
      .filter((item) => item !== null);
    setcartdata(deIncrease);
  };

  const deLetecategory = (product) => {
    return setcartdata(cartdata.filter((item) => item.id !== product));
  };

  return (
    <div>
      <context.Provider
        value={{
          addToCart,
          cartdata,
          setcartdata,
          updateQuntity,
          deLetecategory,
        }}
      >
        {children}
      </context.Provider>
    </div>
  );
};
export default Cartcontext;

export const useCart = () => useContext(context);
