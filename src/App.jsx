import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Rooms from './components/Rooms';
import Experience from './components/Experience';
import Dining from './components/Dining';
import Reviews from './components/Reviews';
import CTABanner from './components/CTABanner';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import FloatingButtons from './components/FloatingButtons';

function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState('');

  const openBooking = (room = '') => {
    setSelectedRoom(room);
    setBookingOpen(true);
  };

  return (
    <div className="min-h-screen">
      <Navbar onBookClick={() => openBooking()} />
      <Hero
        onBookClick={() => openBooking()}
        onViewRooms={() => document.getElementById('rooms')?.scrollIntoView({ behavior: 'smooth' })}
      />
      <Rooms onBook={(room) => openBooking(room)} />
      <Experience />
      <Dining />
      <Reviews />
      <CTABanner onBookClick={() => openBooking()} />
      <Contact onBookClick={() => openBooking()} />
      <Footer onBookClick={() => openBooking()} />
      <FloatingButtons onBookClick={() => openBooking()} />
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        initialRoom={selectedRoom}
      />
    </div>
  );
}

export default App;
