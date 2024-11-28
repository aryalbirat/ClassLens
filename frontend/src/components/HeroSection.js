import React from "react";
import image from '../assets/image.png';

const HeroSection = () => {
    return (
        <div className="relative h-[75vh] bg-gradient-to-r from-[#12131E] via-[#6d28d9] to-[#1F2242] flex flex-col md:flex-row items-center justify-between px-8 pt-[50px]">
            <div className="relative rounded-lg w-[800px] p-4 mt-[120px]">

                <p className="text-lg text-gray-300 leading-relaxed mb-6 mt-[-120px]">
                    Classlens is an innovative project that leverages AI and machine learning to monitor and assess student attentiveness in real-time
                    using CCTV footage. By analyzing visual cues such as facial expressions and the posture, the system aims to provide valuable insights
                    into student engagement during lessons. This data-driven approach can help educators identify moments when students are losing focus,
                    enabling timely interventions to enhance the overall learning experience. Classlens represents a step forward in integrating
                    technology into education to foster more interactive and effective teaching environments.
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
            <div className="absolute top-[50%] right-[5%] transform -translate-y-1/2">
                <img
                    src={image}  // Updated to use the imported image variable
                    alt="Your Image"
                    className="w-[550px] rounded-xl shadow-lg"
                />
            </div>
        </div>
    );
};

export default HeroSection;
