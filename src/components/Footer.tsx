import React from 'react';
import { Heart, Cross } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-royal-blue to-blue-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Logo and Ministry Name */}
          <div className="flex items-center justify-center space-x-3 mb-6">
            <img 
              src="/logo.png" 
              alt="MPL Ministries Logo" 
              className="w-12 h-12 rounded-full object-cover border-2 border-gold"
            />
            <div className="text-left">
              <h3 className="font-bold text-2xl">MPL Ministries</h3>
              <p className="text-blue-200 text-sm">Rise and Shine Anniversary</p>
            </div>
          </div>

          {/* Event Details */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 mb-8 inline-block">
            <div className="text-gold font-bold text-lg mb-2">September 13, 2025</div>
            <div className="text-blue-200">09:00 AM - 05:00 PM</div>
            <div className="text-blue-200">Join us for a day of celebration and worship</div>
          </div>

          {/* Bible Verse */}
          <blockquote className="text-lg italic text-blue-100 mb-6 max-w-2xl mx-auto">
            "Arise, shine, for your light has come, and the glory of the Lord rises upon you."
            <cite className="block text-gold font-semibold mt-2">— Isaiah 60:1</cite>
          </blockquote>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gold to-transparent mb-6"></div>

          {/* Copyright */}
          <div className="flex flex-col md:flex-row items-center justify-between text-blue-200 text-sm">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <span>© {currentYear} MPL Ministries. All rights reserved.</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-400 fill-current" />
              <span>for God's glory</span>
            </div>
          </div>

          {/* Final Message */}
          <div className="mt-6 text-gold font-semibold">
            #RiseAndShine #MPLMinistries #Anniversary2025
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;