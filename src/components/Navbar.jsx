import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; // ❌ Removed Phone

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Rooms", href: "#rooms" },
  { label: "Experience", href: "#experience" },
  { label: "Dining", href: "#dining" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ onBookClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-forest shadow-2xl py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            className="cursor-pointer"
            onClick={() => handleNavClick("#home")}
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 border border-gold flex items-center justify-center">
                <span className="text-gold font-serif text-sm font-semibold">
                  KV
                </span>
              </div>
              <div>
                <p className="text-white font-serif text-lg leading-tight tracking-wide">
                  Kaimosi Vert
                </p>
                <p className="text-gold/70 text-[9px] uppercase tracking-[0.25em]">
                  Hotel & Retreat
                </p>
              </div>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="nav-link text-white/80 hover:text-gold"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            {/* ❌ Phone removed */}
            <button
              onClick={onBookClick}
              className="btn-primary text-xs py-2.5 px-6"
            >
              Book Now
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-white p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-[500px] mt-4" : "max-h-0"
          }`}
        >
          <div className="bg-forest-dark border-t border-gold/20 pt-4 pb-6 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="block w-full text-left px-4 py-3 text-white/80 hover:text-gold hover:bg-forest transition-colors text-sm uppercase tracking-widest"
              >
                {link.label}
              </button>
            ))}
            <div className="px-4 pt-3 space-y-3">
              {/* ❌ Phone removed */}
              <button
                onClick={() => {
                  setMenuOpen(false);
                  onBookClick();
                }}
                className="btn-primary w-full text-center text-xs"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
