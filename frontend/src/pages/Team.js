import React from "react";
import Card from "../components/Card";
import biratImage from "../assets/birat.jpg";
import dipeshImage from "../assets/dipesh.jpg";
import pranavImage from "../assets/pranav.jpg";
import rasadImage from "../assets/rasad.jpg";

const Team = () => {
  return (
    <section id="team">
      <div className="relative text-center px-6 py-16 bg-gradient-to-r from-[#000000]  to-[#2d62a2] ">
        <h1 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-800 mb-4">
          Our <span className="text-blue-400">Team</span>
        </h1>

        <p className="text-xl pt-5 text-white mt-6 max-w-3xl mx-auto">
          We are highly skilled individuals specializing in various fields of technology.
        </p>

        <div className="mt-8">
          <div className="flex gap-5 flex-wrap justify-center">
            <Card
              name="Rasad Regmi"
              src={rasadImage}
              facebook="https://www.facebook.com/rasad.regmi"
              linkedin="https://www.linkedin.com/in/rasad-regmi/"
              github="https://github.com/rasadregmi"
            />
            <Card
              name="Birat Aryal"
              src={biratImage}
              facebook="https://www.facebook.com/aryalbiratt"
              linkedin="https://www.linkedin.com/in/aryalbirat/"
              github="https://github.com/aryalbirat"
            />
            <Card
              name="Dipesh D.C."
              src={dipeshImage}
              facebook="https://www.facebook.com/profile.php?id=100088129415264"
              linkedin="https://www.linkedin.com/in/dipesh-dc-25a140248/"
              github="https://github.com/dipeshdc"
            />
            <Card
              name="Pranav Subedi"
              src={pranavImage}
              facebook="https://www.facebook.com/pranav.subdee"
              linkedin="https://www.linkedin.com/in/pranav-subedi-132261322/"
              github="https://github.com/pranavsubedi12"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
