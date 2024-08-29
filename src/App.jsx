import {BrowserRouter, Route, Routes}  from "react-router-dom"
import Navbar from "./comp/Navbar";
import { useEffect, useState } from "react";
import Hompage from "./comp/Hompage";
import Cart from "./comp/Cart";
import Sigin from "./comp/Sigin";
import SingleProduct from "./comp/SingleProduct";
import Wishlist from "./comp/Wishlist";

function App() {

  const [product,setProduct] = useState([])

  useEffect(()=>{
    fetch('https://dummyjson.com/products').then((res)=>{
      return res.json()
    }).then((data)=>{
      setProduct(data)
    })
  },[])
  return ( 
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Sigin/>} />
          <Route path="/homepage"  element={<Hompage productData={product} />} />
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/singleproduct/:id" element={<SingleProduct/>}/>
          <Route path="/wishlist" element={<Wishlist/>}/>
        </Routes>
      </BrowserRouter>
    </>
   );
}

export default App;