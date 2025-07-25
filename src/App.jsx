import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Events from "./components/Events";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import StartUps from "./components/StartUps";
import { Footer } from "./components/Footer";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import ForgetPassword from "./components/ForgetPassword";

function App() {
  return <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        {/* <Route path="/services" element={<Services />} /> */}
        {/* <Route path="/program" element={<Program />} /> */}
        <Route path="/startUps" element={<StartUps />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
      </Routes>
      <Footer />
    </BrowserRouter>




  </>
}
export default App;