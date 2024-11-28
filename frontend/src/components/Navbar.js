import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-transparent text-white">
      <h1 className="text-3xl font-bold ml-8 mr-12">
        CLASS<span className="text-[#AF8FE4]">LENS</span>
      </h1>
      <ul className="flex space-x-20 text-lg"> 
        <li className="hover:text-[#AF8FE4] cursor-pointer">Home</li>
        <li className="hover:text-[#AF8FE4] cursor-pointer">Examine</li>
        <li className="hover:text-[#AF8FE4] cursor-pointer">Team</li>
        <li className="hover:text-[#AF8FE4] cursor-pointer">Pricing</li>
      </ul>
      
      <button className="bg-gradient-to-r from-[#7F4CB1] to-[#AF8FE4] px-6 py-3 rounded-lg text-sm hover:opacity-90 ml-8"> {/* Decreased ml-8 to ml-2 to move Contact Now closer */}
        Contact Now
      </button>
    </nav>
  );
};

export default Navbar;
