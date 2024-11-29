import React from "react";
import image from '../assets/image.png';

const Home = () => {
    return (
        <div className="relative h-[75vh] bg-gradient-to-r   from-[#000000]  to-[#2d62a2]  flex flex-col md:flex-row items-center justify-between px-8 pt-[50px]">
            <div className="relative rounded-lg w-[800px] p-4 mt-[120px]">
                <p className="text-lg text-gray-300 leading-relaxed mb-6 mt-[-120px]">
                Classlens is an AI-powered project designed to monitor and assess student attentiveness in real time through visual cues like facial expressions and posture. By analyzing these indicators, it provides valuable insights into student engagement, helping educators enhance learning experiences. This innovative approach integrates technology into education, fostering more interactive and effective teaching environments.
                </p>
                <div className="flex space-x-4">
                    <button className="bg-gradient-to-r from-[#006aff] to-[#31838d] text-white px-6 py-2 rounded-md hover:opacity-90">
                        Examine
                    </button>
                    <button className="bg-gradient-to-r from-[#7732FF] to-[#8862c2] px-6 py-2 text-white rounded-md  hover:opacity-70 transition">
                        Contact Us
                    </button>
                </div>
            </div>
            <div className="absolute top-[50%] right-[5%] transform -translate-y-1/2 group">
        <img
          src={image}
          className="w-[550px] rounded-xl shadow-lg transition-transform duration-500 ease-in-out transform group-hover:scale-105 group-hover:rotate-2 group-hover:shadow-2xl"
          alt="Classlens"
        />
      </div>
        </div>
    );
};

export default Home;
