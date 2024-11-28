import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-transparent text-white">
      <h1 className="text-3xl font-bold">
        CLASS<span className="text-[#AF8FE4]">LENS</span>
      </h1>
      <ul className="flex space-x-8 text-lg">
        <li className="hover:text-[#AF8FE4] cursor-pointer">Home</li>
        <li className="hover:text-[#AF8FE4] cursor-pointer">Examine</li>
        <li className="hover:text-[#AF8FE4] cursor-pointer">Team</li>
      </ul>
      <button className="bg-gradient-to-r from-[#7F4CB1] to-[#AF8FE4] px-4 py-2 rounded-lg text-sm hover:opacity-90">
        Contact Now
      </button>
    </nav>
  );
};

export default Navbar;
