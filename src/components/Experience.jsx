import { useEffect, useRef } from 'react';
import { Leaf, Heart, Globe, Sun } from 'lucide-react';

const highlights = [
  {
    icon: Leaf,
    title: 'Kaimosi Forest Retreat',
    desc: 'Surrounded by one of Western Kenya\'s ancient forests, our hotel offers a rare chance to breathe pristine air and witness breathtaking biodiversity.',
  },
  {
    icon: Heart,
    title: 'Authentic Hospitality',
    desc: 'Our staff treats every guest like family — warm, attentive, and genuinely caring. Experience hospitality that feels deeply human and personal.',
  },
  {
    icon: Globe,
    title: 'Cultural Immersion',
    desc: 'Located in Shamakhokho, you\'re at the heart of Luhya culture. Explore local traditions, crafts, and the vibrant spirit of Western Kenya.',
  },
  {
    icon: Sun,
    title: 'Total Serenity',
    desc: 'Wake up to birdsong, misty mornings, and pure calm. This is a place where time slows down and your soul truly rests.',
  },
];

function HighlightCard({ icon: Icon, title, desc, index }) {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), index * 150);
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div ref={ref} className="reveal flex gap-5">
      <div className="flex-shrink-0 w-12 h-12 border border-gold/40 flex items-center justify-center">
        <Icon size={20} className="text-gold" />
      </div>
      <div>
        <h4 className="font-serif text-xl font-light text-white mb-2">{title}</h4>
        <p className="text-white/60 text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

export default function Experience() {
  const textRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add('visible'); },
      { threshold: 0.1 }
    );
    if (textRef.current) observer.observe(textRef.current);
    if (imgRef.current) observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="bg-forest">
      {/* Top section - Story */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div ref={textRef} className="reveal">
            <p className="section-label">Our Story</p>
            <h2 className="font-serif text-5xl font-light text-white leading-tight mb-6">
              Where the Forest
              <br />
              <em className="text-gold">Embraces You</em>
            </h2>
            <div className="w-12 h-px bg-gold mb-8" />
            <p className="text-white/70 leading-relaxed mb-5">
              Nestled at the edge of the ancient Kaimosi Forest in Shamakhokho, Vihiga, Kaimosi Vert Hotel was born from a vision: to create a sanctuary where luxury and nature exist in perfect harmony.
            </p>
            <p className="text-white/70 leading-relaxed mb-5">
              Every corner of our hotel is designed to bring you closer to nature — the scent of fresh earth, the sound of birds at dawn, the sight of mist rolling through the treetops. Yet none of this comes at the cost of your comfort.
            </p>
            <p className="text-white/70 leading-relaxed mb-8">
              Whether you're a business traveler seeking focus, a couple on a romantic escape, or a family creating lasting memories — Kaimosi Vert Hotel is your home away from home in Western Kenya.
            </p>
            <div className="flex flex-wrap gap-8">
              {[
                { num: '4.4★', label: 'Guest Rating' },
                { num: '100%', label: 'Nature-Immersed' },
                { num: '24/7', label: 'Guest Service' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-serif text-3xl text-gold">{stat.num}</p>
                  <p className="text-white/50 text-xs uppercase tracking-wider mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Images collage */}
          <div ref={imgRef} className="reveal grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="overflow-hidden h-56">
                <img
                  src="https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&q=80"
                  alt="Kaimosi Forest"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="overflow-hidden h-36">
                <img
                  src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&q=80"
                  alt="Hotel lounge"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="overflow-hidden h-36">
                <img
                  src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&q=80"
                  alt="Hotel room"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="overflow-hidden h-56">
                <img
                  src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80"
                  alt="Hotel amenities"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Highlights grid */}
      <div className="border-t border-white/10 bg-forest-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {highlights.map((item, i) => (
              <HighlightCard key={item.title} {...item} index={i} />
            ))}
          </div>
        </div>
      </div>

      {/* Parallax quote banner */}
      <div
        className="relative py-24 overflow-hidden"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1535262412227-85541e910204?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-forest/75" />
        <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
          <div className="w-12 h-px bg-gold mx-auto mb-8" />
          <blockquote className="font-serif text-3xl sm:text-4xl text-white font-light leading-snug italic">
            "Luxury meets tranquility — this is not just a hotel,
            <br className="hidden sm:block" />
            it is a feeling."
          </blockquote>
          <div className="w-12 h-px bg-gold mx-auto mt-8" />
          <p className="text-gold/70 text-xs uppercase tracking-[0.3em] mt-4">
            Kaimosi Vert Hotel, Shamakhokho
          </p>
        </div>
      </div>
    </section>
  );
}
