import { useEffect, useRef } from "react";
import {
  Wifi,
  Tv,
  Droplets,
  Coffee,
  Wind,
  Shield,
  Star,
  ArrowRight,
} from "lucide-react";

const rooms = [
  {
    id: 1,
    name: "Standard Room",
    category: "Classic Comfort",
    desc: "Elegant and cozy, our Standard Room offers a serene retreat with premium bedding and garden views — perfect for solo travelers and couples.",
    price: "From KSh 3,500",
    img: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
    amenities: [Wifi, Tv, Droplets, Coffee],
    amenityLabels: ["Free WiFi", "Smart TV", "Hot Shower", "Coffee Maker"],
    badge: null,
  },
  {
    id: 2,
    name: "Deluxe Room",
    category: "Enhanced Luxury",
    desc: "Spacious and sophisticated, the Deluxe Room features forest-facing windows, premium furnishings, and a private bathroom with deluxe toiletries.",
    price: "From KSh 5,500",
    img: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80",
    amenities: [Wifi, Tv, Droplets, Coffee, Wind],
    amenityLabels: [
      "Free WiFi",
      "Smart TV",
      "Hot Shower",
      "Coffee Maker",
      "AC",
    ],
    badge: "Most Popular",
  },
  {
    id: 3,
    name: "Superior Room",
    category: "Premium Experience",
    desc: "Elevated comfort with a superior room featuring a king-size bed, panoramic forest views, and exclusive access to our premium amenities.",
    price: "From KSh 7,500",
    img: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80",
    amenities: [Wifi, Tv, Droplets, Coffee, Wind, Shield],
    amenityLabels: [
      "Free WiFi",
      "Smart TV",
      "Hot Shower",
      "Coffee Maker",
      "AC",
      "Safe",
    ],
    badge: null,
  },
  {
    id: 4,
    name: "Forest Suite",
    category: "Ultimate Retreat",
    desc: "Our signature suite wraps you in luxury with a private lounge, king bed, deep-soak tub, and floor-to-ceiling views of the ancient Kaimosi Forest.",
    price: "From KSh 12,000",
    img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
    amenities: [Wifi, Tv, Droplets, Coffee, Wind, Shield],
    amenityLabels: [
      "Free WiFi",
      "Smart TV",
      "Hot Shower",
      "Coffee Maker",
      "AC",
      "Safe",
    ],
    badge: "Best Value",
  },
  {
    id: 5,
    name: "Family Room",
    category: "Family Comfort",
    desc: "Designed for families, this spacious room features two double beds, ample storage, and thoughtful amenities to make your family stay memorable.",
    price: "From KSh 8,500",
    img: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80",
    amenities: [Wifi, Tv, Droplets, Coffee, Wind],
    amenityLabels: [
      "Free WiFi",
      "Smart TV",
      "Hot Shower",
      "Coffee Maker",
      "AC",
    ],
    badge: null,
  },
  {
    id: 6,
    name: "Business Room",
    category: "Executive Stay",
    desc: "Purpose-built for the business traveler, featuring a dedicated work desk, high-speed WiFi, ergonomic chair, and a premium espresso machine.",
    price: "From KSh 6,500",
    img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80",
    amenities: [Wifi, Tv, Droplets, Coffee, Wind, Shield],
    amenityLabels: [
      "Free WiFi",
      "Smart TV",
      "Hot Shower",
      "Coffee Maker",
      "AC",
      "Safe",
    ],
    badge: null,
  },
];

function RoomCard({ room, onBook, index }) {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("visible");
          }, index * 100);
        }
      },
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [index]);

  const AmenityIcons = room.amenities.slice(0, 4);

  return (
    <div
      ref={ref}
      className="reveal group bg-white overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500"
    >
      {/* Image */}
      <div className="relative overflow-hidden h-56 sm:h-64">
        <img
          src={room.img}
          alt={room.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        {room.badge && (
          <div className="absolute top-4 right-4 bg-gold text-forest-dark text-xs font-semibold uppercase tracking-wider px-3 py-1">
            {room.badge}
          </div>
        )}
        <div className="absolute bottom-4 left-4">
          <p className="text-gold text-xs uppercase tracking-widest">
            {room.category}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-serif text-2xl font-light text-charcoal">
            {room.name}
          </h3>
          <p className="text-forest font-semibold text-sm whitespace-nowrap ml-2">
            {room.price}
          </p>
        </div>

        <p className="text-charcoal/60 text-sm leading-relaxed mb-5">
          {room.desc}
        </p>

        {/* Amenities */}
        <div className="flex flex-wrap gap-3 mb-6">
          {room.amenities.map((Icon, i) => (
            <div
              key={i}
              className="flex items-center gap-1.5 bg-cream px-2.5 py-1.5 text-xs text-charcoal/70"
              title={room.amenityLabels[i]}
            >
              <Icon size={11} className="text-forest" />
              <span>{room.amenityLabels[i]}</span>
            </div>
          ))}
        </div>

        <button
          onClick={() => onBook(room.name)}
          className="w-full bg-forest text-white text-sm uppercase tracking-widest py-3 hover:bg-forest-light transition-colors flex items-center justify-center gap-2 group/btn"
        >
          Book This Room
          <ArrowRight
            size={14}
            className="group-hover/btn:translate-x-1 transition-transform"
          />
        </button>
      </div>
    </div>
  );
}

export default function Rooms({ onBook }) {
  const titleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      },
      { threshold: 0.1 },
    );
    if (titleRef.current) observer.observe(titleRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="rooms" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={titleRef} className="reveal text-center mb-16">
          <p className="section-label">Our Accommodations</p>
          <h2 className="section-title text-charcoal">
            Rooms & <em className="text-forest italic">Suites</em>
          </h2>
          <div className="w-16 h-px bg-gold mx-auto mt-4" />
          <p className="mt-6 text-charcoal/60 max-w-xl mx-auto leading-relaxed">
            Each room is thoughtfully designed to blend modern luxury with the
            natural beauty of Kaimosi Forest — your perfect sanctuary awaits.
          </p>

          {/* Urgency */}
          <div className="inline-flex items-center gap-2 mt-6 bg-red-50 border border-red-200 px-5 py-2.5 text-sm text-red-700">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            Limited rooms available this season — book early to secure your
            preferred room!
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, i) => (
            <RoomCard key={room.id} room={room} onBook={onBook} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-charcoal/50 text-sm mb-4">
            Need help choosing? Contact us directly.
          </p>
          <a href="tel:+254794408594" className="btn-outline-dark">
            Call +254 794408594
          </a>
        </div>
      </div>
    </section>
  );
}
