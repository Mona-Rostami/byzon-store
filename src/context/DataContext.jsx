import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
export const create = createContext();
const DataContext = ({ children }) => {
  const [Data, setData] = useState([]);
  const getApi = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/products");
      setData(res.data.products);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getApi();
  });

  const category = (Data, product) => {
    const Apicate = Data.map((item) => {
      return item[product];
    });
    return ["All", ...new Set(Apicate)];
  };
  const categoryonlyData = category(Data, "category");
  return (
    <div>
      <create.Provider value={{ Data, categoryonlyData }}>
        {children}
      </create.Provider>
    </div>
  );
};
export const getData = () => useContext(create);
export default DataContext;
