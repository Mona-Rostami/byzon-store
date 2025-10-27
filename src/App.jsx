import { useEffect, useState } from "react";
import React from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Navbar from "./commponents/Navbar";
import Home from "./commponents/Home";
import Products from "./commponents/Products";
import About from "./commponents/About";
import Contact from "./commponents/contact";
import Footer from "./commponents/Footer";
import axios from "axios";
import DataContext from "./context/DataContext";
import Cartcontext from "./context/Cartcontext";
import Cart from "./pages/Cart";
import SingleProduct from "./pages/SingleProduct";
const App = () => {
  const [location, setLocation] = useState();
  const [hiden, setHiden] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const getlocation = async () => {
    try {
      const res = await axios.get("http://ip-api.com/json");
      const { country, city } = res.data;
      setLocation({ country, city });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getlocation();
  }, []);

  return (
    <div>
      <Cartcontext>
        {" "}
        <DataContext>
          <BrowserRouter>
            <Navbar
              location={location}
              setLocation={setLocation}
              hiden={hiden}
              setHiden={setHiden}
              dropdown={dropdown}
              setDropdown={setDropdown}
            />
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/products" element={<Products />}></Route>
              <Route path="/cart" element={<Cart />}></Route>
              <Route path="/products/:id" element={<SingleProduct />}></Route>
              <Route path="/About" element={<About />}></Route>
              <Route path="/Contact" element={<Contact />}></Route>
            </Routes>
            <Footer />
          </BrowserRouter>
        </DataContext>
      </Cartcontext>
    </div>
  );
};

export default App;

//import { useEffect, useState } from "react";
// import Navbar from "./commponents/Navbar";
// import Products from "./commponents/Products";
// import Contact from "./commponents/contact";
// import About from "./commponents/About";
// import Home from "./commponents/Home";
// import Footer from "./commponents/Footer";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import axios from "axios";
// import { DataProvider } from "./context/DataContext";
// const App = () => {
//   const [openDropdown, SetopenDropdown] = useState(false);
//   const [hiden, setHiden] = useState(false);
//   const [location, Satlocation] = useState();
//   const axiosLocation = async () => {
//     try {
//       const getlocation = await axios.get("http://ip-api.com/json");
//       const { regionName, country } = getlocation.data;
//       Satlocation({ regionName, country });
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   useEffect(() => {
//     axiosLocation();
//   }, []);

//   return (
//     <div>
//       <>
//       <DataProvider><BrowserRouter>
//           {" "}
//           <Navbar
//             openDropdown={openDropdown}
//             SetopenDropdown={SetopenDropdown}
//             hiden={hiden}
//             setHiden={setHiden}
//             location={location}
//           />
//           <Routes>
//             <Route path="/" element={<Home />}></Route>
//             <Route path="/Products" element={<Products />}></Route>
//             <Route path="/Contact" element={<Contact />}></Route>
//             <Route path="/About" element={<About />}></Route>
//           </Routes>
//           <Footer/>
//         </BrowserRouter></DataProvider>

//       </>
//     </div>
//   );
// };

// export default App;
