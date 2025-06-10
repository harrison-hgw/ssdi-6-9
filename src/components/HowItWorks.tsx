import React from 'react';
import { Phone, Users, FileCheck, ArrowRight } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: 1,
      icon: <Phone size={48} className="text-white" />,
      title: "Call or Click",
      description: "Contact us for a free consultation. Our specialists will review your case and answer all your questions.",
      action: "Free consultation"
    },
    {
      number: 2,
      icon: <Users size={48} className="text-white" />,
      title: "Get Matched",
      description: "We connect you with experienced disability attorneys who specialize in cases like yours.",
      action: "Personalized matching"
    },
    {
      number: 3,
      icon: <FileCheck size={48} className="text-white" />,
      title: "Get Support",
      description: "Your attorney handles everything from paperwork to appeals, keeping you informed every step of the way.",
      action: "Full support"
    }
  ];

  const phoneNumber = '1-844-549-4126';

  return (
    <section id="how-it-works" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            3 Simple Steps to
            <span className="block text-[#b42033]">Get Started</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Getting help with your disability claim is easier than you think. 
            Our streamlined process ensures you get the support you need quickly and efficiently.
          </p>
        </div>

        <div className="relative">
          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Card */}
                <div className="bg-gray-50 rounded-lg p-8 text-center hover:bg-gray-100 transition-colors duration-200">
                  {/* Step Number */}
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#b42033] rounded-full mb-6">
                    <span className="text-2xl font-bold text-white">{step.number}</span>
                  </div>
                  
                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-[#b42033] rounded-full">
                      {step.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {step.description}
                  </p>
                  <div className="text-[#b42033] font-medium">
                    {step.action}
                  </div>
                </div>

                {/* Arrow (hidden on mobile) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight size={32} className="text-[#b42033]" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="bg-[#1a1a1a] text-white rounded-lg p-8 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-lg md:text-xl text-gray-300 mb-6">
              Don't wait - the sooner you start, the sooner you can get the benefits you deserve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${phoneNumber}`}
                className="flex items-center justify-center space-x-2 bg-[#b42033] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#a01b2a] transition-colors duration-200"
              >
                <Phone size={20} />
                <span>Call {phoneNumber}</span>
              </a>
              <button className="bg-white text-[#b42033] px-8 py-4 rounded-lg text-lg font-semibold border-2 border-[#b42033] hover:bg-[#b42033] hover:text-white transition-all duration-200">
                Get Free Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
