import React, { useState } from 'react';
import { Menu, X, Cross } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gold/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <img
              src="/logo.png"
              alt="MPL Ministries Logo"
              className="w-10 h-10 rounded-full object-cover border-2 border-gold"
            />
            <div>
              <h1 className="font-bold text-xl text-royal-blue">
                MPL Ministries
              </h1>
              <p className="text-sm text-gray-600">Rise and Shine</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-gray-700 hover:text-royal-blue transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-royal-blue transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('details')}
              className="text-gray-700 hover:text-royal-blue transition-colors font-medium"
            >
              Event Details
            </button>
            <button
              onClick={() => scrollToSection('rsvp')}
              className="text-gray-700 hover:text-royal-blue transition-colors font-medium"
            >
              Join Us
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-royal-blue transition-colors font-medium"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-royal-blue"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <button
              onClick={() => scrollToSection('hero')}
              className="block w-full text-left px-2 py-2 text-gray-700 hover:text-royal-blue transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-2 py-2 text-gray-700 hover:text-royal-blue transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('details')}
              className="block w-full text-left px-2 py-2 text-gray-700 hover:text-royal-blue transition-colors font-medium"
            >
              Event Details
            </button>
            <button
              onClick={() => scrollToSection('rsvp')}
              className="block w-full text-left px-2 py-2 text-gray-700 hover:text-royal-blue transition-colors font-medium"
            >
              Join Us
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-2 py-2 text-gray-700 hover:text-royal-blue transition-colors font-medium"
            >
              Contact
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
