import React from 'react';
import PriceCard from '../components/PriceCard';

export default function Pricing() {
  // Sample data for pricing plans
  const pricingPlans = [
    {
      title: "Starter",
      price: "$10",
      duration: "per month",
      description: "For Individuals and Small Teams",
      features: [
        "50 Page Unlock",
        "Unlimited Access to Templates",
        "Basic Support"
      ],
    },
    {
      title: "Professional",
      price: "$30",
      duration: "per month",
      description: "For Growing Teams and Businesses",
      features: [
        "100 Page Unlock",
        "Advanced Templates",
        "Priority Support",
      ],
    },
    {
      title: "Enterprise",
      price: "$50",
      duration: "per month",
      description: "For Large Teams and Enterprises",
      features: [
        "Unlimited Page Unlock",
        "Custom Branding",
        "24/7 Support",

      ],
    }
  ];

  return (
    <div className="bg-gradient-to-r from-[#000000] to-[#2d62a2]">
      {/* Title Section */}
      <div className="flex flex-col justify-center items-center pt-32">
        <h1 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-800 mb-4 text-center">
          Our <span className="text-blue-400">Pricing</span>
        </h1>
      </div>

      {/* Description */}
      <p className="text-xl pt-5 text-white my-3 max-w-3xl mx-auto text-center">
        We are highly skilled individuals specializing in various fields of technology.
      </p>

      {/* Pricing Cards */}
      <div className="flex justify-center space-x-8 pt-10">
        {pricingPlans.map((plan, index) => (
          <PriceCard
            key={index}
            title={plan.title}
            price={plan.price}
            duration={plan.duration}
            description={plan.description}
            features={plan.features}
          />
        ))}
      </div>
    </div>
  );
}
