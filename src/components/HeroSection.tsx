import React from 'react';
import { Calendar, Clock, ArrowDown } from 'lucide-react';
import CountdownTimer from './CountdownTimer';

const HeroSection: React.FC = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/Rise and shine.jpg" 
          alt="Rise and Shine Event" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-royal-blue/80 via-blue-600/70 to-royal-blue/80"></div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-gold rounded-full"></div>
        <div className="absolute top-40 right-16 w-20 h-20 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-32 left-20 w-24 h-24 border-2 border-gold rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 border-2 border-white rounded-full"></div>
      </div>

      {/* Golden Light Rays */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-radial from-gold/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 pt-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Event Badge */}
          <div className="inline-flex items-center space-x-2 bg-gold/20 backdrop-blur-sm border border-gold/30 rounded-full px-6 py-2 mb-8">
            <Calendar className="w-4 h-4 text-gold" />
            <span className="text-white font-medium">Anniversary Event</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            <span className="block">Rise</span>
            <span className="block text-gold">&</span>
            <span className="block">Shine</span>
          </h1>

          {/* Bible Verse */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 md:p-8 mb-8 max-w-3xl mx-auto">
            <blockquote className="text-lg md:text-xl text-white/95 italic leading-relaxed mb-4">
              "Arise, shine, for your light has come, and the glory of the Lord rises upon you."
            </blockquote>
            <cite className="text-gold font-semibold text-base">— Isaiah 60:1</cite>
          </div>

          {/* Event Info */}
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 mb-8">
            <div className="flex items-center space-x-2 text-white">
              <Calendar className="w-5 h-5 text-gold" />
              <span className="text-lg font-medium">13th September 2025</span>
            </div>
            <div className="flex items-center space-x-2 text-white">
              <Clock className="w-5 h-5 text-gold" />
              <span className="text-lg font-medium">09:00 AM - 05:00 PM</span>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Event Countdown</h2>
            <CountdownTimer />
          </div>

          {/* CTA Button */}
          <button 
            onClick={() => window.open('https://forms.gle/djnHKLkiXrjL8nkk8', '_blank')}
            className="bg-gradient-to-r from-gold to-yellow-400 hover:from-yellow-400 hover:to-gold text-royal-blue font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-gold/25 mb-12"
          >
            Join Us on 13th Sep, 2025
          </button>

          {/* Scroll Indicator */}
          <button 
            onClick={scrollToAbout}
            className="animate-bounce text-white/70 hover:text-white transition-colors"
          >
            <ArrowDown className="w-6 h-6 mx-auto" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;