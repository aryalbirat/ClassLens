import React from 'react';

const PriceCard = ({ title, description, price, period, features }) => {
  return (
    <div className="ml-16 border rounded-md p-6 hover:shadow-lg transition-shadow bg-black text-white w-64 h-auto">
      <h3 className="text-white text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-400">{description}</p>
      <div className="mt-6">
        <h3 className="text-white text-2xl font-semibold">
          {price} <sub className="text-white text-sm font-medium">{period}</sub>
        </h3>
      </div>
      <div className="mt-6">
        <h4 className="text-white text-xl font-semibold mb-2">Includes</h4>
        <ul className="mt-4 space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 mr-2 fill-green-500"
                viewBox="0 0 24 24"
              >
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"></path>
              </svg>
              {feature}
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="w-full mt-6 px-5 py-2.5 text-sm text-white bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:outline-none rounded-md transition-colors"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default PriceCard;
