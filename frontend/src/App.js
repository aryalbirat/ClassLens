import React from "react";
import Navbar from "./components/Navbar";
import Examine from "./pages/Examine";
import Team from "./pages/Team";
import Pricing from "./pages/Pricing";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <div className="bg-gradient-to-r from-[#12131E] via-[#6d28d9] to-[#1F2242] min-h-screen text-white">
      <Navbar />
      <Home />
      <Examine />  
      <Team />    
      <Pricing/>
      <Contact />
    </div>
  );
};

export default App;