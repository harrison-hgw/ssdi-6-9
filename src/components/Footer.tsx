import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const phoneNumber = '1-844-549-4126';
  const currentYear = new Date().getFullYear();

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
    <footer className="bg-[#1a1a1a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Column */}
          <div>
            <h3 className="text-xl font-bold text-[#b42033] mb-4">About Advoca</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Advoca helps connect disabled individuals with experienced Social Security Disability attorneys. 
              We simplify the complex disability application process and help you get the benefits you deserve.
            </p>
            <p className="text-sm text-gray-400">
              <strong>Important:</strong> Advoca is a marketing referral service, not a law firm. 
              We connect you with qualified disability attorneys who can represent you.
            </p>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="text-xl font-bold text-[#b42033] mb-4">Legal Information</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <button 
                  onClick={() => scrollToSection('privacy-policy')}
                  className="hover:text-[#b42033] transition-colors duration-200"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('terms')}
                  className="hover:text-[#b42033] transition-colors duration-200"
                >
                  Terms of Service
                </button>
              </li>
            </ul>
            <div className="mt-6 text-sm text-gray-400">
              <p className="mb-2">
                <strong>Disclaimer:</strong> Results vary by individual case. 
                Past results do not guarantee future outcomes.
              </p>
              <p>
                <strong>Attorney Advertising:</strong> Attorneys only paid if you win your case.
              </p>
            </div>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-xl font-bold text-[#b42033] mb-4">Contact Information</h3>
            <div className="space-y-4">
              <a 
                href={`tel:${phoneNumber}`}
                className="flex items-center space-x-3 text-gray-300 hover:text-[#b42033] transition-colors duration-200"
              >
                <Phone size={20} />
                <span className="text-lg font-semibold">{phoneNumber}</span>
              </a>
              <p className="text-gray-400 text-sm">
                Available 24/7 for free consultations
              </p>
            </div>

            {/* Additional Services */}
            <div className="mt-6">
              <h4 className="font-semibold text-gray-300 mb-2">We Help With:</h4>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Initial disability applications</li>
                <li>• Disability claim appeals</li>
                <li>• Hearing representation</li>
                <li>• Medical record collection</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Advoca. All rights reserved.
            </div>
            <div className="text-gray-400 text-sm">
              Owned by Forge47 LLC and FunkZone Media LLC
            </div>
          </div>
          
          {/* Final Call to Action */}
          <div className="mt-6 text-center">
            <p className="text-gray-300 mb-2">
              Ready to get started? Call us now for your free consultation.
            </p>
            <a
              href={`tel:${phoneNumber}`}
              className="inline-flex items-center space-x-2 bg-[#b42033] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#a01b2a] transition-colors duration-200"
            >
              <Phone size={18} />
              <span>Call {phoneNumber}</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
