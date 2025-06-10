import React from 'react';
import { AlertTriangle, FileX, Clock, TrendingDown } from 'lucide-react';

const Challenge: React.FC = () => {
  const challenges = [
    {
      icon: <TrendingDown size={48} className="text-[#b42033]" />,
      title: "53% Initial Denial Rate",
      description: "More than half of first-time disability applications are denied, leaving applicants frustrated and uncertain."
    },
    {
      icon: <FileX size={48} className="text-[#b42033]" />,
      title: "Complex Paperwork",
      description: "The application process involves extensive forms, medical documentation, and legal requirements that can overwhelm applicants."
    },
    {
      icon: <Clock size={48} className="text-[#b42033]" />,
      title: "Lengthy Process",
      description: "Disability claims can take months or even years to process, with multiple stages of review and potential appeals."
    },
    {
      icon: <AlertTriangle size={48} className="text-[#b42033]" />,
      title: "Many Give Up",
      description: "Without proper guidance, many deserving individuals abandon their claims after initial denial, missing out on benefits they're entitled to."
    }
  ];

  return (
    <section id="challenge" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Getting approved for disability benefits
            <span className="block text-[#b42033]">can be difficult</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The Social Security Disability system is complex and can be overwhelming. Here's why many people struggle with the process:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {challenges.map((challenge, index) => (
            <div key={index} className="text-center p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
              <div className="flex justify-center mb-4">
                {challenge.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {challenge.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {challenge.description}
              </p>
            </div>
          ))}
        </div>

        {/* Statistics Highlight */}
        <div className="mt-16 bg-[#1a1a1a] text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Don't become a statistic
          </h3>
          <p className="text-lg md:text-xl text-gray-300 mb-6">
            Without proper legal representation, your chances of approval are significantly lower
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#b42033] mb-2">53%</div>
              <div className="text-gray-300">Initial denials</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#b42033] mb-2">300%</div>
              <div className="text-gray-300">Higher approval with legal help</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#b42033] mb-2">12-24</div>
              <div className="text-gray-300">Months average process time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Challenge;
