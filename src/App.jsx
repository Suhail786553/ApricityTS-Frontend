import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import Product from './Components/Product/Product';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
      <Footer/>
    </BrowserRouter>

  );
}

export default App;
