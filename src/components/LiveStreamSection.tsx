import React from 'react';
import { Play, Youtube, Users, Wifi } from 'lucide-react';

const LiveStreamSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-red-500/20 backdrop-blur-sm border border-red-500/30 rounded-full px-6 py-2 mb-6">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-red-400 font-medium">Live Stream</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Join Us Online
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold to-yellow-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Can't make it in person? Experience the full event through our
            high-quality live stream
          </p>
        </div>

        {/* Live Stream Container */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl">
            <div className="aspect-video rounded-xl mb-8 relative overflow-hidden">
              {/* YouTube embed */}
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/gDZ7poxyIlk?si=74A90Wia-v29enqm"
                title="MPL Ministries Live Stream"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-xl"
              ></iframe>

              {/* Live indicator */}
              <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-2">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span>LIVE on Sep 13</span>
              </div>
            </div>

            {/* Channel Info */}
            <div className="mt-8 p-6 bg-gradient-to-r from-red-900/30 to-red-800/30 rounded-xl border border-red-500/20">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">
                    MPL Ministries Channel
                  </h4>
                  <p className="text-gray-300">
                    Subscribe for updates and past event recordings
                  </p>
                </div>
                <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center space-x-2">
                  <Youtube className="w-5 h-5" />
                  <a href="https://www.youtube.com/@mplministries?sub_confirmation=1">
                    Subscribe
                  </a>
                </button>
              </div>
            </div>

            {/* Stream Schedule Notice */}
            <div className="mt-6 p-4 bg-yellow-500/20 border border-yellow-500/30 rounded-lg">
              <p className="text-yellow-200 text-center">
                <strong>Note:</strong> Live stream will begin at 09:00 AM on
                September 13th, 2025. Set a reminder to not miss the
                celebration!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveStreamSection;
