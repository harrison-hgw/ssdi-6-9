import React from 'react';
import { Phone, Clock, CheckCircle, Users } from 'lucide-react';

const FinalCTA: React.FC = () => {
  const phoneNumber = '1-844-549-4126';

  const reasons = [
    {
      icon: <CheckCircle size={20} className="text-green-400" />,
      text: "No upfront costs - only pay if you win"
    },
    {
      icon: <Users size={20} className="text-green-400" />,
      text: "Experienced disability attorneys"
    },
    {
      icon: <Clock size={20} className="text-green-400" />,
      text: "Free consultation available now"
    }
  ];

  return (
    <section id="final-cta" className="py-16 bg-[#1a1a1a] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Get the Benefits
          <span className="block text-[#b42033]">You Deserve</span>
        </h2>
        
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Don't navigate the complex disability system alone. Our experienced team has helped thousands of people get approved for the benefits they're entitled to.
        </p>

        {/* Reasons to Call */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-10">
          {reasons.map((reason, index) => (
            <div key={index} className="flex items-center space-x-2">
              {reason.icon}
              <span className="text-gray-300">{reason.text}</span>
            </div>
          ))}
        </div>

        {/* Large Phone Number */}
        <div className="mb-8">
          <p className="text-lg text-gray-300 mb-2">Call now for your free consultation</p>
          <div className="text-4xl md:text-5xl font-bold text-[#b42033] mb-4">
            {phoneNumber}
          </div>
          <p className="text-gray-400">Available 24/7 - Speak with a specialist today</p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a
            href={`tel:${phoneNumber}`}
            className="flex items-center justify-center space-x-2 bg-[#b42033] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#a01b2a] transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            <Phone size={20} />
            <span>Call Now - Free Consultation</span>
          </a>
          <button className="bg-transparent text-[#b42033] px-8 py-4 rounded-lg text-lg font-semibold border-2 border-[#b42033] hover:bg-[#b42033] hover:text-white transition-all duration-200">
            Request Callback
          </button>
        </div>

        {/* Urgency Message */}
        <div className="bg-[#b42033]/10 border border-[#b42033]/30 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-[#b42033] mb-2">
            Don't Wait - Time Matters
          </h3>
          <p className="text-gray-300">
            The sooner you apply, the sooner you can start receiving benefits. 
            Some benefits may be retroactive, but delays in filing can cost you money. 
            Contact us today to protect your rights and maximize your benefits.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
