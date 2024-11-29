import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-[#000000] to-[#2d62a2] flex justify-between items-center p-4 bg-transparent text-white">
      <h1 className="text-3xl font-bold ml-8 mr-12">
        CLASS<span className="text-[#AF8FE4]">LENS</span>
      </h1>
      <ul className="flex space-x-20 text-lg">
        <li className="hover:text-[#AF8FE4] cursor-pointer">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="hover:text-[#AF8FE4] cursor-pointer">
          <Link to="examine" smooth={true} duration={500}>
            Examine
          </Link>
        </li>
        <li className="hover:text-[#AF8FE4] cursor-pointer">
          <Link to="team" smooth={true} duration={500}>
            Team
          </Link>
        </li>
        <li className="hover:text-[#AF8FE4] cursor-pointer">
          <Link to="pricing" smooth={true} duration={500}>
            Pricing
          </Link>
        </li>
      </ul>
      <Link to="contact" smooth={true} duration={500}>
        <button className="relative flex justify-center items-center w-[150px] h-[40px] p-[10px] gap-[8px] bg-gradient-to-r from-[#7732FF] to-[#8862c2] border border-[#2C2C2C] rounded-lg text-white text-[18px] font-normal leading-none shadow-[0_4px_4px_rgba(0,0,0,0.25)] hover:opacity-80 hover:cursor-pointer">
          Contact Us
        </button>
      </Link>
    </nav>
  );
};

export default Navbar;
