import { useEffect, useRef } from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, ExternalLink } from 'lucide-react';

export default function Contact({ onBookClick }) {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add('visible'); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="py-24 bg-forest">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={ref} className="reveal text-center mb-14">
          <p className="section-label">Find Us</p>
          <h2 className="font-serif text-5xl font-light text-white leading-tight">
            Come Visit <em className="text-gold">Us</em>
          </h2>
          <div className="w-16 h-px bg-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Address */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 border border-gold/30 flex items-center justify-center">
                <MapPin size={16} className="text-gold" />
              </div>
              <div>
                <p className="text-gold text-xs uppercase tracking-widest mb-1">Location</p>
                <p className="text-white font-medium">Kaimosi Vert Hotel</p>
                <p className="text-white/60 text-sm">Shamakhokho, Vihiga County</p>
                <p className="text-white/60 text-sm">Western Kenya</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 border border-gold/30 flex items-center justify-center">
                <Phone size={16} className="text-gold" />
              </div>
              <div>
                <p className="text-gold text-xs uppercase tracking-widest mb-1">Phone / WhatsApp</p>
                <a
                  href="tel:+254794408594"
                  className="text-white hover:text-gold transition-colors font-medium"
                >
                  +254 794408594
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 border border-gold/30 flex items-center justify-center">
                <Mail size={16} className="text-gold" />
              </div>
              <div>
                <p className="text-gold text-xs uppercase tracking-widest mb-1">Email</p>
                <a
                  href="mailto:abuririwycliffe@gmail.com"
                  className="text-white hover:text-gold transition-colors font-medium"
                >
                  abuririwycliffe@gmail.com
                </a>
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 border border-gold/30 flex items-center justify-center">
                <ExternalLink size={16} className="text-gold" />
              </div>
              <div>
                <p className="text-gold text-xs uppercase tracking-widest mb-3">Follow Us</p>
                <div className="flex gap-3">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2.5 text-sm transition-colors"
                  >
                    <Instagram size={14} />
                    Instagram
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2.5 text-sm transition-colors"
                  >
                    <Facebook size={14} />
                    Facebook
                  </a>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="tel:+254794408594" className="btn-primary">
                Call Now
              </a>
              <a
                href="https://maps.google.com/?q=Shamakhokho+Vihiga+Kenya"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                Get Directions
              </a>
            </div>
          </div>

          {/* Map embed */}
          <div className="bg-white/5 border border-white/10 overflow-hidden">
            <div className="bg-white/10 px-4 py-3 flex items-center gap-2">
              <MapPin size={14} className="text-gold" />
              <span className="text-white/70 text-sm">Shamakhokho, Vihiga — Western Kenya</span>
            </div>
            <iframe
              title="Kaimosi Vert Hotel Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7980.2!2d34.75!3d0.13!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182a01xxxxxxxx%3A0x0!2sKaimosi%2C%20Vihiga!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske"
              width="100%"
              height="360"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale contrast-110"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
