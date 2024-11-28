import React from "react";

const HeroSection = () => {
  return (
    <div className="relative h-screen bg-gradient-to-r from-[#12131E] via-[#6d28d9] to-[#1F2242] flex items-center justify-center px-8">
      {/* Content Box */}
      <div className="relative border-2 border-[#7F4CB1] rounded-lg w-[800px] p-10 bg-gradient-to-r from-[#12131E] to-[#1F2242]">
        <h1 className="text-4xl font-bold mb-6">
          CLASS<span className="text-[#AF8FE4]">LENS</span>
        </h1>
        <p className="text-lg text-gray-300 leading-relaxed mb-6">
          In a digital age driven by innovation, cryptocurrency has emerged as a
          revolutionary force that is reshaping the way we perceive and interact
          with money. At [Your Crypto Platform], we are your gateway to this
          exciting world of decentralized finance, empowering you to explore,
          invest, and transact with confidence.
        </p>
        <div className="flex space-x-4">
          <button className="bg-gradient-to-r from-[#7F4CB1] to-[#AF8FE4] text-white px-6 py-2 rounded-md hover:opacity-90">
            Examine
          </button>
          <button className="bg-blue-600 px-6 py-2 text-white rounded-md hover:bg-blue-700 transition">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
