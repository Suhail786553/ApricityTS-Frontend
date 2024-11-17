import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Product from "./Components/Product/Product";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import Contact from './Components/Contact/Contact';
import Usecases from './Components/Usecases/Usecases';
import BackupPage from "./Components/Login/BackupPage";
import Owner from './Components/Owner/Owner';
import Result from './Components/Result/Result';
import TryFree from "./Components/Result/TryFree";
import Terms from "./Components/Result/Terms";
import Legal from "./Components/Solutions/Legal";
import Finance from "./Components/Solutions/Finance";
import Government from './Components/Solutions/Government';
import Healthcare from './Components/Solutions/Healthcare';
import Insurance from './Components/Solutions/Insurance';
import Itsector from './Components/Solutions/Itsector';
import Retail from './Components/Solutions/Retail';
import Signup from './Components/Login/Signup';
import Login from './Components/Login/Login';
import DashboardPage from './Components/Dashboard/Dashboard'; // Assuming DashboardPage is imported
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Define PrivateRoute as a function
// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem("token"); // Check if the token exists
  return isAuthenticated ? children : <Navigate to="/login" />;
};
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/usecases" element={<Usecases />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/backup" element={<BackupPage />} />
        <Route path="/owner" element={<Owner />} />
        <Route path="/result" element={<Result />} />
        <Route path="/tryfree" element={<TryFree />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/finance" element={<Finance />} />
        <Route path="/government" element={<Government />} />
        <Route path="/healthcare" element={<Healthcare />} />
        <Route path="/insurance" element={<Insurance />} />
        <Route path="/it" element={<Itsector />} />
        <Route path="/retail" element={<Retail />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        
        {/* Use PrivateRoute for protected routes */}
        <Route 
          path="/dashboard" 
          element={
            <PrivateRoute>
              <DashboardPage />
            </PrivateRoute>
          } 
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
