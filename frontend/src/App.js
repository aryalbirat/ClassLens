import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Examine from "./pages/Examine";

const App = () => {
  return (
    <div className="bg-gradient-to-r from-[#12131E] via-[#6d28d9] to-[#1F2242] min-h-screen text-white">
      <Navbar />
      <Home />
      <Examine />      
    </div>
  );
};

export default App