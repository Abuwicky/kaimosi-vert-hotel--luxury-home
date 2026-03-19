import { Phone, Mail, MapPin, Instagram, Facebook, ArrowUp } from 'lucide-react';

export default function Footer({ onBookClick }) {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const handleNavClick = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-charcoal text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 border border-gold flex items-center justify-center">
                <span className="text-gold font-serif text-sm font-semibold">KV</span>
              </div>
              <div>
                <p className="text-white font-serif text-xl">Kaimosi Vert</p>
                <p className="text-gold/60 text-[9px] uppercase tracking-[0.25em]">Hotel & Retreat</p>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              A luxury nature retreat nestled near Kaimosi Forest in Shamakhokho, Vihiga. Where tranquility meets hospitality.
            </p>
            <div className="flex gap-3">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 border border-white/20 flex items-center justify-center text-white/50 hover:text-gold hover:border-gold transition-colors">
                <Instagram size={15} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 border border-white/20 flex items-center justify-center text-white/50 hover:text-gold hover:border-gold transition-colors">
                <Facebook size={15} />
              </a>
              <a href="https://wa.me/254726526802" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 border border-white/20 flex items-center justify-center text-white/50 hover:text-gold hover:border-gold transition-colors text-xs font-bold">
                WA
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-xs uppercase tracking-[0.3em] text-gold mb-5">Quick Links</h5>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '#home' },
                { label: 'Our Rooms', href: '#rooms' },
                { label: 'Experience', href: '#experience' },
                { label: 'Dining', href: '#dining' },
                { label: 'Reviews', href: '#reviews' },
                { label: 'Contact Us', href: '#contact' },
              ].map((l) => (
                <li key={l.label}>
                  <button
                    onClick={() => handleNavClick(l.href)}
                    className="text-white/50 hover:text-gold text-sm transition-colors"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Rooms */}
          <div>
            <h5 className="text-xs uppercase tracking-[0.3em] text-gold mb-5">Accommodations</h5>
            <ul className="space-y-3 text-white/50 text-sm">
              {['Standard Room', 'Deluxe Room', 'Superior Room', 'Forest Suite', 'Family Room', 'Business Room'].map((r) => (
                <li key={r}>
                  <button
                    onClick={() => handleNavClick('#rooms')}
                    className="hover:text-gold transition-colors"
                  >
                    {r}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="text-xs uppercase tracking-[0.3em] text-gold mb-5">Get In Touch</h5>
            <div className="space-y-4">
              <div className="flex gap-3 items-start">
                <MapPin size={14} className="text-gold mt-0.5 flex-shrink-0" />
                <p className="text-white/50 text-sm">Shamakhokho, Vihiga County, Western Kenya</p>
              </div>
              <div className="flex gap-3 items-center">
                <Phone size={14} className="text-gold flex-shrink-0" />
                <a href="tel:+254726526802" className="text-white/50 hover:text-gold text-sm transition-colors">
                  +254 794408594
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <Mail size={14} className="text-gold flex-shrink-0" />
                <a href="mailto:info@kaimosihotel.com" className="text-white/50 hover:text-gold text-sm transition-colors">
                  abuririwycliffe@gmail.com
                </a>
              </div>
            </div>
            <button onClick={onBookClick} className="mt-6 btn-primary text-xs py-3 px-6">
              Book Now
            </button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-row items-center justify-between gap-3 flex-wrap">
          <p className="text-white/30 text-xs">
            © 2026 Kaimosi Vert Hotel. All rights reserved. | Shamakhokho, Vihiga, Kenya
          </p>
          <div className="flex items-center gap-4 text-white/30 text-xs">
            <span>Privacy Policy</span>
            <span>·</span>
            <span>Terms of Service</span>
          </div>
          <button
            onClick={scrollTop}
            className="w-9 h-9 border border-white/20 flex items-center justify-center text-white/40 hover:text-gold hover:border-gold transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  );
}
