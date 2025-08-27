import React from 'react';
import {
  Calendar,
  Clock,
  MapPin,
  User,
  ExternalLink,
  CheckCircle,
} from 'lucide-react';

const EventDetails: React.FC = () => {
  const schedule = [
    {
      time: '09:00 AM - 01:00 PM',
      event: 'Youth Session',
      description: 'Praise & Worship with the Ministry Team',
      icon: '🙏',
    },
    {
      time: '01:00 PM - 02:00 PM',
      event: 'Fellowship Lunch',
      description: 'Community meal and networking',
      icon: '🍽️',
    },
    {
      time: '02:00 PM - 05:00 PM',
      event: '2nd Session',
      description: 'Testimonies and closing worship',
      icon: '✨',
    },
  ];

  return (
    <section
      id="details"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-royal-blue mb-4">
            Event Details
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold to-yellow-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about our special anniversary
            celebration
          </p>
        </div>

        {/* Key Details Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-gold">
            <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center mb-4">
              <Calendar className="w-6 h-6 text-gold" />
            </div>
            <h3 className="font-bold text-royal-blue mb-2">Date</h3>
            <p className="text-gray-700 font-medium">13th September 2025</p>
            <p className="text-sm text-gray-500">Saturday</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-royal-blue">
            <div className="w-12 h-12 bg-royal-blue/20 rounded-lg flex items-center justify-center mb-4">
              <Clock className="w-6 h-6 text-royal-blue" />
            </div>
            <h3 className="font-bold text-royal-blue mb-2">Time</h3>
            <p className="text-gray-700 font-medium">09:00 AM - 05:00 PM</p>
            <p className="text-sm text-gray-500">8 hours of celebration</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-green-500">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-bold text-royal-blue mb-2">Venue</h3>
            <p className="text-gray-700 font-medium">Venue Details</p>
            <p className="text-sm text-gray-500">
              YESU KRESTHU PRADHANA MANDHIRAM ,17-3-70/1, parlopeta,
              Jagannickpur, Kakinada, Andhra Pradesh 533007{' '}
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-purple-500">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <User className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="font-bold text-royal-blue mb-2">Speaker</h3>
            <p className="text-gray-700 font-medium">R. Golden Jonathan</p>
            <p className="text-sm text-gray-500">RAJAHMUNDRY</p>
          </div>
        </div>

        {/* Event Schedule */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-royal-blue mb-4">
              Event Schedule
            </h3>
            <p className="text-gray-600 text-lg">
              A full day of worship, fellowship, and spiritual growth
            </p>
          </div>

          <div className="space-y-6">
            {schedule.map((item, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-6 bg-gradient-to-r from-blue-50 to-transparent rounded-xl hover:from-blue-100 transition-colors"
              >
                <div className="text-3xl">{item.icon}</div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h4 className="text-xl font-bold text-royal-blue mb-1">
                        {item.event}
                      </h4>
                      <p className="text-gray-600 mb-2">{item.description}</p>
                    </div>
                    <div className="bg-gold/20 text-gold px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap">
                      {item.time}
                    </div>
                  </div>
                </div>
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
