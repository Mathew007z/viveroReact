import React, { useEffect } from "react";
import "./styles.css";
import { Navbar } from "./components/navBar/Navbar";
import Home from "./components/Home/Home";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Footer from "./components/Footer/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./components/Error/Error";
import Cart from "./components/Cart/Cart";
import Nosotros from "./components/Nosotros/Nosotros";
import CartProvider from "../src/Context/CartContext";
import  {Toaster} from 'react-hot-toast' 
import CheckOut from "./components/CheckOut/CheckOut";
// import ReactGA from 'react-ga';
import ReactGA from "react-ga4";



export default function App() {
  const TRACKING_ID = 'G-ZXFSZR32TF';
  ReactGA.initialize(TRACKING_ID);



  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Toaster/>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/productos" element={<ItemListContainer />} />
            <Route exact path="/categoria/:categoriaId" element={<ItemListContainer/>}/>
            <Route exact path="/item/:id" element={<ItemDetailContainer />} />
            <Route exact path="/nosotros" element={<Nosotros />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/form" element={<CheckOut />}/>
            <Route path="*" element={<Error />}/>
          </Routes>
        </CartProvider>
        <Footer />
      </BrowserRouter>
    </>
  );
}
