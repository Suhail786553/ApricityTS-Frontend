import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Product from "./Components/Product/Product";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import Contact from './Components/Contact/Contact';
import Usecases from './Components/Usecases/Usecases';
import BackupPage from "./Components/Login/BackupPage";
import Owner from './Components/Owner/Owner';
import Result from './Components/Result/Result';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TryFree from "./Components/Result/TryFree";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      {/* <OwnerLogin/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/usecases" element={<Usecases />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/backup" element={<BackupPage/>} />
        <Route path="/owner" element={<Owner/>} />
        <Route path="/result" element={<Result/>} />
        <Route path="/tryfree" element={<TryFree/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
