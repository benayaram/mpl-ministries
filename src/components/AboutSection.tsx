import React from 'react';
import { Heart, Users, Target, Star } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <img
              src="/logo.png"
              alt="MPL Ministries Logo"
              className="w-20 h-20 rounded-full object-cover border-4 border-gold shadow-lg"
            />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-royal-blue mb-4">
            About MPL Ministries
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold to-yellow-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Celebrating God's faithfulness and His continuous work in our lives
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-royal-blue to-blue-600 rounded-2xl p-8 text-white transform hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-gold" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-blue-100 leading-relaxed">
              To spread the Gospel of Jesus Christ, nurture spiritual growth, and build a community 
              of believers who are equipped to serve God and impact their world with His love.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gold to-yellow-400 rounded-2xl p-8 text-royal-blue transform hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <Heart className="w-8 h-8 text-royal-blue" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="leading-relaxed">
              To be a beacon of hope and transformation in our community, raising disciples 
              who shine Christ's light in darkness and demonstrate His love through service.
            </p>
          </div>
        </div>

        {/* Anniversary Theme */}
        <div className="bg-gradient-to-r from-blue-50 to-yellow-50 rounded-2xl p-8 md:p-12 text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-gold to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
            <Star className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-3xl font-bold text-royal-blue mb-6">Anniversary Theme</h3>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mb-6">
            This year's "Rise and Shine" theme calls us to embrace our identity as children of light. 
            Just as Isaiah prophesied, we are called to arise and shine because God's glory has risen upon us. 
            This anniversary is not just a celebration of our past, but a declaration of our bright future in Christ.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex items-center space-x-2">
              <Users className="w-6 h-6 text-royal-blue" />
              <span className="text-royal-blue font-semibold">Community Impact</span>
            </div>
            <div className="flex items-center space-x-2">
              <Heart className="w-6 h-6 text-royal-blue" />
              <span className="text-royal-blue font-semibold">Spiritual Growth</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;