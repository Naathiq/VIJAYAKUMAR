/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const handleOpenBooking = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    setIsBookingOpen(true);
  };

  const handleSelectServiceFromCard = (serviceName: string) => {
    setSelectedService(serviceName);
    // Smooth scroll down to contact section or open modal
    handleOpenBooking(serviceName);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 selection:bg-amber-300 selection:text-slate-950 font-sans">
      {/* Navigation Header */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* 2. About Us Section */}
        <About onOpenBooking={() => handleOpenBooking()} />

        {/* 3. Services Section (All 7 services) */}
        <Services onSelectService={handleSelectServiceFromCard} />

        {/* 4. Why Choose Us Section */}
        <WhyChooseUs />

        {/* 5. Contact Section (NAP, Call, WhatsApp, Email, Map) */}
        <Contact preselectedService={selectedService} />
      </main>

      {/* 8. Footer Section */}
      <Footer onSelectService={handleSelectServiceFromCard} />

      {/* Fast Booking / Callback Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialService={selectedService}
      />
    </div>
  );
}
