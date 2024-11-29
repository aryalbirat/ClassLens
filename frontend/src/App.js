import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Examine from "./pages/Examine";
import Team from "./pages/Team";

const App = () => {
  return (
    <div className="bg-gradient-to-r from-[#12131E] via-[#6d28d9] to-[#1F2242] min-h-screen text-white">
      <Navbar />
      <Home />
      <Examine />  
      <Team></Team>    
    </div>
  );
};

export default App