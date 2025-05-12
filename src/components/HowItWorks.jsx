import React from 'react';
import { FaUpload, FaDollarSign, FaMoneyCheckAlt } from 'react-icons/fa';

const steps = [
  {
    icon: <FaUpload size={40} className="text-blue-600" />,
    title: "Upload License",
    desc: "Submit your unused software license details through our secure platform."
  },
  {
    icon: <FaDollarSign size={40} className="text-blue-600" />,
    title: "Get Valuation",
    desc: "Our system instantly calculates a fair market value for your license."
  },
  {
    icon: <FaMoneyCheckAlt size={40} className="text-blue-600" />,
    title: "Get Paid",
    desc: "Receive payment directly to your bank or wallet within 24 hours."
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gray-100">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">How It Works</h2>
        <p className="text-gray-600 mt-2">Simple 3-step process to cash out unused software licenses.</p>
      </div>
      <div className="max-w-6xl mx-auto px-4 grid gap-10 md:grid-cols-3">
        {steps.map((step, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl transition">
            <div className="mb-4 flex justify-center">{step.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
