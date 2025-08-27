import React, { useState } from 'react';
import {
  Users,
  QrCode,
  Send,
  CheckCircle,
  Phone,
  Mail,
  User,
} from 'lucide-react';

const RSVPSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    attendance: 'in-person',
    guests: '1',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend or Google Forms
    console.log('RSVP submitted:', formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section
        id="rsvp"
        className="py-20 bg-gradient-to-br from-royal-blue to-blue-600"
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-white rounded-2xl p-12 shadow-2xl">
            <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-royal-blue mb-4">
              Thank You!
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              Your RSVP has been received. We're excited to see you at the Rise
              and Shine event!
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="bg-royal-blue text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Register
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="rsvp"
      className="py-20 bg-gradient-to-br from-royal-blue to-blue-600"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Register Now
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold to-yellow-400 mx-auto mb-6"></div>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Reserve your spot for this special anniversary celebration
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Registration Information */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <div className="flex items-center space-x-3 mb-6">
                <Users className="w-8 h-8 text-royal-blue" />
                <h3 className="text-2xl font-bold text-royal-blue">
                  Join the Celebration
                </h3>
              </div>

              <div className="space-y-6">
                <p className="text-gray-600 text-lg leading-relaxed">
                  We're excited to celebrate this special anniversary with you!
                  Join us for a day filled with worship, fellowship, and
                  spiritual growth.
                </p>

                <div className="bg-gradient-to-r from-blue-50 to-gold/10 p-6 rounded-lg">
                  <h4 className="font-bold text-royal-blue mb-3">
                    What to Expect:
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-gold rounded-full"></div>
                      <span>Inspiring worship and praise sessions</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-gold rounded-full"></div>
                      <span>Powerful word from R. Golden Jonathan</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-gold rounded-full"></div>
                      <span>Fellowship lunch and community time</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-gold rounded-full"></div>
                      <span>Special youth program</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 text-center">
                <a
                  href="https://forms.gle/djnHKLkiXrjL8nkk8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-gold to-yellow-400 text-royal-blue font-bold py-4 px-8 rounded-lg hover:from-yellow-400 hover:to-gold transition-all duration-300 transform hover:scale-105 shadow-lg text-lg"
                >
                  <Send className="w-5 h-5" />
                  <span>Register Now</span>
                </a>
              </div>
            </div>
          </div>

          {/* Event Highlights */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">
                Event Highlights
              </h3>
              <ul className="space-y-3 text-blue-100">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
                  <span>Morning Worship & Praise</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
                  <span>Youth Special Session</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
                  <span>Fellowship Lunch</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
                  <span>Word by R. Golden Jonathan</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
                  <span>Evening Thanksgiving</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RSVPSection;
