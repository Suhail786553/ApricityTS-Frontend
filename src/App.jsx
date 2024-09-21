import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Product from "./Components/Product/Product";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import Contact from './Components/Contact/Contact';
import Usecases from './Components/Usecases/Usecases';
// import OwnerLogin from "./Components/Login/OwnerLogin";
import BackupPage from "./Components/Login/BackupPage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
        {/* <Route path="/login" element={<OwnerLogin />} /> */}
        <Route path="/backup" element={<BackupPage />} />
        {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
