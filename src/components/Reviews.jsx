import { useEffect, useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Amelia N.",
    location: "Nairobi, Kenya",
    rating: 5,
    date: "January 2026",
    title: "Beautifully Serene",
    review:
      "Beautifully serene, calm and soothing — exactly what I needed to recharge. The rooms are clean, well-furnished, and comfortable. Waking up to the sounds of the forest was magical. Will absolutely return!",
    avatar: "AN",
    color: "bg-forest",
  },
  {
    id: 2,
    name: "James O.",
    location: "Kisumu, Kenya",
    rating: 5,
    date: "February 2026",
    title: "Generous Meal Portions",
    review:
      "The food here is exceptional. Generous meal portions, fresh ingredients, and incredible flavour. The breakfast alone is worth the trip — you will not leave hungry! The staff ensures everything is perfect.",
    avatar: "JO",
    color: "bg-gold",
  },
  {
    id: 3,
    name: "Sarah K.",
    location: "Nakuru, Kenya",
    rating: 5,
    date: "December 2025",
    title: "Friendly Staff & Management",
    review:
      "Friendly staff and management who go above and beyond to make you comfortable. The location is incredible — so close to nature yet with all the luxuries you need. Perfect for a romantic getaway!",
    avatar: "SK",
    color: "bg-forest",
  },
  {
    id: 4,
    name: "David M.",
    location: "Kampala, Uganda",
    rating: 4,
    date: "November 2025",
    title: "Peaceful Nature Retreat",
    review:
      "A hidden gem in Western Kenya! The forest setting is breathtaking and the tranquillity is unlike anything you'll find in the city. Great value for money and an experience I'll treasure forever.",
    avatar: "DM",
    color: "bg-gold-dark",
  },
  {
    id: 5,
    name: "Grace W.",
    location: "Eldoret, Kenya",
    rating: 5,
    date: "October 2025",
    title: "Feel at Home Away from Home",
    review:
      "Kaimosi Vert Hotel truly makes you feel at home away from home. The warm hospitality, beautiful surroundings, and impeccable service created an unforgettable experience. Highly recommended!",
    avatar: "GW",
    color: "bg-forest-light",
  },
];

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < rating ? "text-gold fill-gold" : "text-charcoal/20"}
        />
      ))}
    </div>
  );
}

function ReviewCard({ review }) {
  return (
    <div className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
      <div className="mb-5">
        <Quote size={28} className="text-gold/30" />
      </div>
      <StarRating rating={review.rating} />
      <h4 className="font-serif text-xl font-light text-charcoal mt-3 mb-3">
        "{review.title}"
      </h4>
      <p className="text-charcoal/60 text-sm leading-relaxed flex-1">
        {review.review}
      </p>
      <div className="flex items-center gap-3 mt-6 pt-6 border-t border-charcoal/10">
        <div
          className={`w-10 h-10 rounded-full ${review.color} flex items-center justify-center text-white text-xs font-semibold`}
        >
          {review.avatar}
        </div>
        <div>
          <p className="font-medium text-charcoal text-sm">{review.name}</p>
          <p className="text-charcoal/40 text-xs">
            {review.location} · {review.date}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Reviews() {
  const [active, setActive] = useState(0);
  const headRef = useRef(null);
  const totalSlides = Math.ceil(reviews.length / 3);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      },
      { threshold: 0.1 },
    );
    if (headRef.current) observer.observe(headRef.current);
    return () => observer.disconnect();
  }, []);

  const visibleReviews = reviews; // show all on desktop, sliding on mobile

  return (
    <section id="reviews" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headRef} className="reveal text-center mb-14">
          <p className="section-label">Guest Reviews</p>
          <h2 className="section-title text-charcoal">
            Loved by Every
            <em className="text-forest italic"> Guest</em>
          </h2>
          <div className="w-16 h-px bg-gold mx-auto mt-4" />

          {/* Overall rating */}
          <div className="inline-flex items-center gap-4 mt-8 bg-forest text-white px-8 py-4">
            <div className="text-center">
              <p className="font-serif text-4xl font-light text-gold">4.4</p>
              <StarRating rating={4} />
              <p className="text-white/50 text-xs mt-1">Overall Rating</p>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div className="text-left">
              <p className="text-white/80 text-sm leading-relaxed max-w-xs">
                Our guests consistently rate us highly for
                <br />
                <span className="text-gold font-medium">
                  service, comfort, and natural beauty.
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleReviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <p className="font-serif text-2xl italic text-forest/70 mb-6">
            "Join thousands of happy guests — your perfect stay awaits."
          </p>
          <a
            href="https://wa.me/254794408594"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Book Your Stay Now
          </a>
        </div>
      </div>
    </section>
  );
}
