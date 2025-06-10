import React from 'react';
import { Phone, CheckCircle } from 'lucide-react';

const Hero: React.FC = () => {
  const phoneNumber = '1-844-549-4126';

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="relative pt-20 pb-16 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2240%22 height=%2240%22 viewBox=%220 0 40 40%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22%23b42033%22 fill-opacity=%220.1%22%3E%3Cpath d=%22M0 0h40v40H0z%22/%3E%3Cpath d=%22M20 20L0 0v40l20-20zm20 0L20 0v40l20-20z%22/%3E%3C/g%3E%3C/svg%3E')] bg-repeat"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Social Security Disability
            <span className="block text-[#b42033]">supports you when you're unable to work</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Advoca helps make the process of claiming your benefits or appealing a denial simple
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 mb-10">
            <div className="flex items-center space-x-2 text-gray-700">
              <CheckCircle size={20} className="text-green-500" />
              <span className="font-medium">Free Consultation</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-700">
              <CheckCircle size={20} className="text-green-500" />
              <span className="font-medium">No Upfront Costs</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-700">
              <CheckCircle size={20} className="text-green-500" />
              <span className="font-medium">Experienced Attorneys</span>
            </div>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection('qualification')}
              className="bg-[#b42033] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#a01b2a] transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl min-w-[200px]"
            >
              See if You Qualify
            </button>
            <a
              href={`tel:${phoneNumber}`}
              className="flex items-center space-x-2 bg-white text-[#b42033] px-8 py-4 rounded-lg text-lg font-semibold border-2 border-[#b42033] hover:bg-[#b42033] hover:text-white transition-all duration-200 shadow-lg hover:shadow-xl min-w-[200px] justify-center"
            >
              <Phone size={20} />
              <span>Call {phoneNumber}</span>
            </a>
          </div>

          {/* Supporting Text */}
          <p className="text-gray-500 mt-6 text-sm max-w-2xl mx-auto">
            Don't navigate the complex disability system alone. Our experienced team is here to help you get the benefits you deserve.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
