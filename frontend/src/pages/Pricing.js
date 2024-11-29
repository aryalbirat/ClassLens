import React from 'react';
import PriceCard from '../components/PriceCard';

export default function Pricing() {
  const pricingPlans = [
    {
      title: "Basic",
      price: "$20",
      duration: "per month",
      description: "Perfect for Small Classrooms",
      features: [
        "Engagement Tracking for up to 30 Students",
        "Monthly Engagement Reports",
        "Basic AI Analytics",
        "Email Support",
      ],
    },
    {
      title: "Standard",
      price: "$50",
      duration: "per month",
      description: "Ideal for Medium-Sized Institutions",
      features: [
        "Engagement Tracking for up to 100 Students",
        "Weekly Engagement Reports",
        "Advanced AI Insights",
        "Priority Email Support"
      ],
    },
    {
      title: "Premium",
      price: "$100",
      duration: "per month",
      description: "Designed for Large Institutions",
      features: [
        "Unlimited Student Tracking",
        "Daily Engagement Reports",
        "Real-Time Engagement",
        "24/7 Priority Support",
        "Integration with LMS",
      ],
    },
  ];

  return (
    <section id="pricing">
      <div className="bg-gradient-to-r from-[#000000] to-[#2d62a2]">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-800 mb-4 text-center">
            Our <span className="text-blue-400">Pricing</span>
          </h1>
        </div>

        <p className="text-xl pt-5 text-white my-3 max-w-3xl mx-auto text-center">
          We are highly skilled individuals specializing in various fields of technology.
        </p>

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
    </section>
  );
}
