import React from 'react';

const CallToAction = () => {
  return (
    <div className="text-center py-20 px-10 text-white">
      <h1 className="text-4xl font-bold mb-6">
        In a digital age driven by innovation...
      </h1>
      <p className="text-lg mb-10">
        Cryptocurrency has emerged as a revolutionary force reshaping the way
        we perceive and interact with money. At <strong>[Your Crypto Platform]</strong>,
        we are your gateway to decentralized finance.
      </p>
      <div className="flex justify-center space-x-6">
        <button className="bg-purple-600 px-6 py-3 rounded-lg text-white hover:bg-purple-700">
          Examine
        </button>
        <button className="bg-blue-600 px-6 py-3 rounded-lg text-white hover:bg-blue-700">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default CallToAction;
