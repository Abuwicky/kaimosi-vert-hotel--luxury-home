import { useEffect, useRef } from 'react';
import { Clock, Star } from 'lucide-react';

const dishes = [
  {
    name: 'Western Kenya Nyama Choma',
    category: 'Signature Grill',
    desc: 'Slow-roasted, perfectly seasoned local beef served with ugali, sukuma wiki, and house kachumbari.',
    img: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80',
    tag: 'Chef\'s Special',
  },
  {
    name: 'Forest Herb Tilapia',
    category: 'Fresh Catch',
    desc: 'Pan-fried Lake Victoria tilapia marinated in aromatic forest herbs, served with pilau rice and coconut chutney.',
    img: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&q=80',
    tag: null,
  },
  {
    name: 'Full African Breakfast',
    category: 'Morning Feast',
    desc: 'Start your day with a generous spread — mandazi, eggs to order, fresh fruits, uji wa wimbi, and artisan teas.',
    img: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=600&q=80',
    tag: 'Guest Favourite',
  },
  {
    name: 'International Buffet',
    category: 'Global Flavours',
    desc: 'A rotating buffet celebrating world cuisines — from pasta and grills to stews and salads, crafted fresh daily.',
    img: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=600&q=80',
    tag: null,
  },
];

function DishCard({ dish, index }) {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting)
          setTimeout(() => entry.target.classList.add('visible'), index * 120);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div ref={ref} className="reveal group overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-500">
      <div className="relative overflow-hidden h-52">
        <img
          src={dish.img}
          alt={dish.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="absolute top-3 left-3">
          <span className="text-[10px] uppercase tracking-widest text-gold bg-forest/80 backdrop-blur-sm px-2 py-1">
            {dish.category}
          </span>
        </div>
        {dish.tag && (
          <div className="absolute top-3 right-3">
            <span className="text-[10px] uppercase tracking-widest text-forest bg-gold px-2 py-1 font-medium">
              {dish.tag}
            </span>
          </div>
        )}
      </div>
      <div className="p-5">
        <h4 className="font-serif text-xl font-light text-charcoal mb-2">{dish.name}</h4>
        <p className="text-charcoal/55 text-sm leading-relaxed">{dish.desc}</p>
      </div>
    </div>
  );
}

export default function Dining() {
  const headRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add('visible'); },
      { threshold: 0.1 }
    );
    if (headRef.current) observer.observe(headRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="dining" className="py-24 bg-cream-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headRef} className="reveal grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-16">
          <div>
            <p className="section-label">Dining at Kaimosi Vert</p>
            <h2 className="section-title text-charcoal">
              A Feast for Every
              <br />
              <em className="text-forest italic">Appetite</em>
            </h2>
            <div className="w-12 h-px bg-gold mt-4" />
          </div>
          <div>
            <p className="text-charcoal/60 leading-relaxed mb-4">
              Our restaurant serves generous, flavour-rich meals that celebrate the best of local and international cuisine. Guests consistently rave about our portions, freshness, and the warmth of our dining experience.
            </p>
            <div className="flex items-center gap-2 text-sm text-charcoal/60">
              <Clock size={14} className="text-gold" />
              <span>Breakfast 6am–10am · Lunch 12pm–3pm · Dinner 6pm–10pm</span>
            </div>
          </div>
        </div>

        {/* Dishes grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dishes.map((dish, i) => (
            <DishCard key={dish.name} dish={dish} index={i} />
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 bg-forest text-white grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {[
            { icon: '🍽', title: 'Generous Portions', desc: 'Consistently praised by guests' },
            { icon: '🌿', title: 'Fresh & Local', desc: 'Sourced from nearby farms daily' },
            { icon: '👨‍🍳', title: 'Expert Chefs', desc: 'Crafted with passion and skill' },
          ].map((item) => (
            <div key={item.title} className="flex items-center gap-4 px-8 py-6">
              <span className="text-3xl">{item.icon}</span>
              <div>
                <p className="font-medium text-white">{item.title}</p>
                <p className="text-white/50 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
