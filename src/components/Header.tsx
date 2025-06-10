import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    setIsMenuOpen(false);
  };

  const phoneNumber = '1-844-549-4126';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-[#b42033] cursor-pointer"
                onClick={() => scrollToSection('hero')}>
              American Advice
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('how-it-works')}
              className={`text-gray-700 hover:text-[#b42033] transition-colors duration-200 font-medium ${
                activeSection === 'how-it-works' ? 'text-[#b42033]' : ''
              }`}
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection('why-advoca')}
              className={`text-gray-700 hover:text-[#b42033] transition-colors duration-200 font-medium ${
                activeSection === 'why-advoca' ? 'text-[#b42033]' : ''
              }`}
            >
              Why Choose Us?
            </button>
          </nav>

          {/* Phone Number */}
          <div className="hidden md:flex items-center">
            <a
              href={`tel:${phoneNumber}`}
              className="flex items-center space-x-2 bg-[#b42033] text-white px-6 py-3 rounded-lg hover:bg-[#a01b2a] transition-colors duration-200 font-medium text-lg"
            >
              <Phone size={20} />
              <span>{phoneNumber}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-[#b42033] focus:outline-none focus:ring-2 focus:ring-[#b42033]"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:text-[#b42033] font-medium"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection('why-advoca')}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:text-[#b42033] font-medium"
            >
              Why Choose Us?
            </button>
            <a
              href={`tel:${phoneNumber}`}
              className="flex items-center space-x-2 bg-[#b42033] text-white px-3 py-2 rounded-lg hover:bg-[#a01b2a] transition-colors duration-200 font-medium mt-2"
            >
              <Phone size={18} />
              <span>{phoneNumber}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
