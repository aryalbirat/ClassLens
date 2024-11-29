import React from 'react';

const OurTeam = () => {
  return (
    <div className="relative text-center px-6 py-12">
      {/* Our Team Heading */}
      <h1 className="text-5xl font-extrabold text-transparent bg-gradient-to-r from-pink-400 via-blue-400 to-pink-400 bg-clip-text">
        Our Team
      </h1>

      {/* Description */}
      <p className="text-xl text-white mt-4 max-w-3xl mx-auto">
        We are highly skilled individuals specializing in various fields of technology.
      </p>

      {/* Team Member Cards */}
      <div className="mt-12 flex justify-center gap-8 flex-wrap">
        {/* Card 1 */}
        <div className="relative w-72 h-112 border-2 border-transparent rounded-2xl shadow-lg">
          <div className="absolute inset-0 rounded-2xl bg-cover bg-center" style={{ backgroundImage: "url('prasad.jpg')" }}></div>
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-xl font-medium py-2 text-center rounded-b-2xl">
            Prasad Regmi
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative w-72 h-112 border-2 border-transparent rounded-2xl shadow-lg">
          <div className="absolute inset-0 rounded-2xl bg-cover bg-center" style={{ backgroundImage: "url('birat.jpg')" }}></div>
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-xl font-medium py-2 text-center rounded-b-2xl">
            Birat Aryal
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative w-72 h-112 border-2 border-transparent rounded-2xl shadow-lg">
          <div className="absolute inset-0 rounded-2xl bg-cover bg-center" style={{ backgroundImage: "url('dipesh.jpg')" }}></div>
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-xl font-medium py-2 text-center rounded-b-2xl">
            Dipesh D.C.
          </div>
        </div>

        {/* Card 4 */}
        <div className="relative w-72 h-112 border-2 border-transparent rounded-2xl shadow-lg">
          <div className="absolute inset-0 rounded-2xl bg-cover bg-center" style={{ backgroundImage: "url('pranav.jpg')" }}></div>
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-xl font-medium py-2 text-center rounded-b-2xl">
            Pranav Subedi
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
