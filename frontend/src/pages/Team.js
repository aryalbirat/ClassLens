import React from 'react';
import Card from '../components/Card';
import biratImage from '../assets/birat.jpg';
import dipeshImage from '../assets/dipesh.jpg';
import pranavImage from '../assets/pranav.jpg';
import rasadImage from '../assets/prasad.jpg';

const OurTeam = () => {
  return (
    <div className="relative text-center px-6 py-12 bg-gradient-to-r from-[#000000]  to-[#2d62a2] ">
      {/* Our Team Heading */}
      <h1 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-800 mb-4">
  Our <span className="text-blue-400">Team</span>
</h1>


      {/* Description */}
      <p className="text-xl pt-5 text-white mt-6 max-w-3xl mx-auto">
        We are highly skilled individuals specializing in various fields of technology.
      </p>

      {/* Team Cards */}
      <div className="mt-8">
        <div className="flex gap-5 flex-wrap justify-center">
          <Card name="Rasad Regmi" src={rasadImage} />
          <Card name="Birat Aryal" src={biratImage} />
          <Card name="Dipesh D.C." src={dipeshImage} />
          <Card name="Pranav Subedi" src={pranavImage} />
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
