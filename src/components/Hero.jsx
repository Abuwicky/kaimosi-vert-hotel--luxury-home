import { useEffect, useRef, useState } from 'react';
import { ChevronDown, Star, MapPin } from 'lucide-react';

const heroSlides = [
  {
    bg: 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=1920&q=80',
    headline: 'Escape to Serenity',
    sub: 'at Kaimosi Vert Hotel',
  },
  {
    bg: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=80',
    headline: 'Luxury Meets Tranquility',
    sub: 'Nestled in the Heart of Nature',
  },
  {
    bg: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1920&q=80',
    headline: 'Feel at Home',
    sub: 'Away from Home',
  },
];

export default function Hero({ onBookClick, onViewRooms }) {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    setVisible(true);
    intervalRef.current = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % heroSlides.length);
        setVisible(true);
      }, 500);
    }, 6000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const slide = heroSlides[current];

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 hero-bg transition-opacity duration-700"
        style={{
          backgroundImage: `url(${slide.bg})`,
          opacity: visible ? 1 : 0,
        }}
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-forest-dark/70 via-forest-dark/50 to-forest-dark/80" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-3xl">
          {/* Location badge */}
          <div
            className={`flex items-center gap-2 mb-6 transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="h-px w-8 bg-gold" />
            <div className="flex items-center gap-1.5 text-gold/90 text-xs uppercase tracking-[0.3em]">
              <MapPin size={10} />
              Shamakhokho, Vihiga — Western Kenya
            </div>
          </div>

          {/* Headline */}
          <h1
            className={`font-serif text-5xl sm:text-6xl md:text-7xl text-white font-light leading-tight text-shadow transition-all duration-700 delay-100 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            {slide.headline}
            <br />
            <em className="text-gold not-italic">{slide.sub}</em>
          </h1>

          {/* Subtext */}
          <p
            className={`mt-6 text-white/80 text-lg max-w-xl leading-relaxed font-light transition-all duration-700 delay-200 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Reconnect with nature in our luxurious forest retreat. Experience authentic African hospitality where every detail is crafted for your comfort.
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-wrap gap-4 mt-10 transition-all duration-700 delay-300 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <button onClick={onBookClick} className="btn-primary">
              Book Now
            </button>
            <button onClick={onViewRooms} className="btn-outline">
              View Rooms
            </button>
          </div>

          {/* Trust badges */}
          <div
            className={`flex flex-wrap items-center gap-6 mt-12 transition-all duration-700 delay-500 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2.5 rounded-sm">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={12}
                    className={i < 4 ? 'text-gold fill-gold' : 'text-gold/40'}
                  />
                ))}
              </div>
              <span className="text-white text-sm font-medium">4.4 / 5</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2.5 rounded-sm">
              <span className="text-white/60 text-xs">❤</span>
              <span className="text-white text-sm">Loved by Guests</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2.5 rounded-sm">
              <span className="text-white text-sm">🌿 Forest Location</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick highlights bar */}
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-forest/80 backdrop-blur-md border-t border-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gold/20">
            {[
              { icon: '🌿', title: 'Serene Forest', desc: 'Steps from Kaimosi Forest' },
              { icon: '🍽', title: 'Generous Meals', desc: 'Local & international cuisine' },
              { icon: '⭐', title: 'Exceptional Service', desc: 'Friendly, attentive staff' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 px-6 py-4">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <p className="text-white font-medium text-sm">{item.title}</p>
                  <p className="text-white/50 text-xs">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => document.getElementById('rooms')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-24 right-8 z-10 text-white/40 hover:text-gold transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={28} />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-28 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              clearInterval(intervalRef.current);
              setCurrent(i);
            }}
            className={`h-px transition-all duration-300 ${
              i === current ? 'bg-gold w-8' : 'bg-white/30 w-4'
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
