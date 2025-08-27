import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import EventDetails from './components/EventDetails';
import RSVPSection from './components/RSVPSection';
import LiveStreamSection from './components/LiveStreamSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <EventDetails />
      <RSVPSection />
      <LiveStreamSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;