import { useEffect, useRef } from 'react';

export default function CTABanner({ onBookClick }) {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add('visible'); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1615880484746-a134be9a6ecf?w=1920&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-forest-dark/80" />
      <div ref={ref} className="reveal relative z-10 text-center max-w-3xl mx-auto px-4">
        <p className="section-label">Don't Miss Out</p>
        <h2 className="font-serif text-5xl sm:text-6xl text-white font-light leading-tight mb-4">
          Reserve Your Stay
          <br />
          <em className="text-gold">Today</em>
        </h2>
        <p className="text-white/70 text-lg mb-3 max-w-lg mx-auto">
          Limited rooms available. Secure your perfect forest retreat before it's too late.
        </p>
        <div className="flex items-center justify-center gap-2 text-sm text-red-300 mb-10">
          <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse" />
          Limited rooms available this season
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button onClick={onBookClick} className="btn-primary text-base px-10 py-4">
            Book Now — Secure Your Room
          </button>
          <a
            href="https://wa.me/254726526802"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline text-base px-10 py-4"
          >
            Chat on WhatsApp
          </a>
        </div>
        <p className="text-white/40 text-xs mt-6">
          📍 Shamakhokho, Vihiga · 📞 +254 726 526802
        </p>
      </div>
    </section>
  );
}
