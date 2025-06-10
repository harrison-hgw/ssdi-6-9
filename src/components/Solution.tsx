import React from 'react';
import { CheckCircle, FileText, DollarSign, Scale, TrendingUp } from 'lucide-react';

const Solution: React.FC = () => {
  const benefits = [
    {
      icon: <TrendingUp size={48} className="text-green-500" />,
      title: "Higher Claim Approvals",
      description: "Your application is 300% more likely to be approved with professional legal representation through Advoca.",
      highlight: "300% more likely"
    },
    {
      icon: <FileText size={48} className="text-blue-500" />,
      title: "Simple Application Process",
      description: "We handle all the complex paperwork, documentation, and legal requirements so you can focus on your health.",
      highlight: "We handle everything"
    },
    {
      icon: <DollarSign size={48} className="text-green-500" />,
      title: "No Upfront Costs",
      description: "Our attorneys work on contingency - they only get paid if you win your case. No financial risk to you.",
      highlight: "Only pay if you win"
    },
    {
      icon: <Scale size={48} className="text-purple-500" />,
      title: "Experienced Legal Network",
      description: "Connect with specialized disability attorneys who understand the system and have a proven track record of success.",
      highlight: "Proven track record"
    }
  ];

  return (
    <section id="why-advoca" className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Advoca makes the process
            <span className="block text-[#b42033]">simple</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't let the complexity of the disability system prevent you from getting the benefits you deserve. 
            Advoca connects you with experienced professionals who will guide you through every step.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  {benefit.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    {benefit.description}
                  </p>
                  <div className="inline-flex items-center space-x-1 text-[#b42033] font-medium">
                    <CheckCircle size={16} />
                    <span>{benefit.highlight}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Success Story */}
        <div className="bg-[#b42033] text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Success Stories Matter
          </h3>
          <p className="text-lg md:text-xl mb-6 opacity-90">
            "I was denied twice on my own. With Advoca's help, I finally got approved and received my benefits. 
            They made the impossible possible." - Sarah M.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-2xl font-bold mb-1">85%</div>
              <div className="text-sm opacity-75">Success rate with representation</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-1">$1,300</div>
              <div className="text-sm opacity-75">Average monthly benefit</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-1">10+</div>
              <div className="text-sm opacity-75">Years average attorney experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
