import { useState, useEffect } from "react";
import { X, Calendar, Users, Bed } from "lucide-react";
import { supabase } from "../supabaseClient"; // ✅ ADDED

const roomTypes = [
  "Standard Room",
  "Deluxe Room",
  "Superior Room",
  "Forest Suite",
  "Family Room",
];

export default function BookingModal({ isOpen, onClose }) {
  const [form, setForm] = useState({
    checkin: "",
    checkout: "",
    guests: "1",
    room: "",
    name: "",
    phone: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [rooms, setRooms] = useState([]);

  // Load available rooms from the rooms table
  useEffect(() => {
    const fetchRooms = async () => {
      const { data, error } = await supabase.from("rooms").select("*");
      if (!error) setRooms(data);
    };
    fetchRooms();
  }, []);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // 1️⃣ Insert user into users table if not exists
      const { data: existingUsers } = await supabase
        .from("users")
        .select("*")
        .eq("phone", form.phone);

      let userId;
      if (existingUsers.length > 0) {
        userId = existingUsers[0].id;
      } else {
        const { data: newUser, error: userError } = await supabase
          .from("users")
          .insert([{ name: form.name, phone: form.phone }])
          .select()
          .single();
        if (userError) throw userError;
        userId = newUser.id;
      }

      // 2️⃣ Find room ID (or null if any room)
      let roomId = null;
      if (form.room) {
        const selectedRoom = rooms.find((r) => r.name === form.room);
        if (selectedRoom) roomId = selectedRoom.id;
      }

      // 3️⃣ Insert booking
      const { data: bookingData, error: bookingError } = await supabase
        .from("bookings")
        .insert([
          {
            user_id: userId,
            room_id: roomId,
            checkin: form.checkin,
            checkout: form.checkout,
            guests: parseInt(form.guests),
            status: "pending",
          },
        ])
        .select()
        .single();

      if (bookingError) throw bookingError;

      console.log("Booking inserted:", bookingData);

      // 4️⃣ Open WhatsApp
      const msg = `Hello, I'd like to book a room at Kaimosi Vert Hotel.%0AName: ${form.name}%0ACheck-in: ${form.checkin}%0ACheck-out: ${form.checkout}%0AGuests: ${form.guests}%0ARoom: ${form.room || "Any Available"}%0APhone: ${form.phone}`;
      window.open(`https://wa.me/254794408594?text=${msg}`, "_blank");

      // 5️⃣ UI feedback
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 3000);
    } catch (err) {
      console.error("Error:", err.message || err);
      alert("Booking failed: " + (err.message || "Unknown error"));
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-lg bg-cream animate-fade-up overflow-y-auto max-h-[90vh]">
        {/* Header */}
        <div className="bg-forest px-8 py-6 flex items-center justify-between">
          <div>
            <p className="section-label text-xs">Start Your Journey</p>
            <h2 className="font-serif text-2xl text-white font-light">
              Reserve Your Stay
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-white/60 hover:text-white transition-colors"
            aria-label="Close"
          >
            <X size={22} />
          </button>
        </div>

        {submitted ? (
          <div className="p-10 text-center">
            <div className="w-16 h-16 bg-forest/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">✓</span>
            </div>
            <h3 className="font-serif text-2xl text-forest mb-2">
              Request Sent!
            </h3>
            <p className="text-charcoal/60">
              We'll confirm your booking via WhatsApp shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-8 space-y-5">
            {/* Name */}
            <div>
              <label className="block text-xs uppercase tracking-widest text-charcoal/60 mb-2">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Full name"
                className="w-full border border-charcoal/20 bg-white px-4 py-3 text-sm focus:outline-none focus:border-forest transition-colors"
              />
            </div>

            {/* Dates */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-widest text-charcoal/60 mb-2">
                  <Calendar size={10} className="inline mr-1" />
                  Check-in
                </label>
                <input
                  type="date"
                  name="checkin"
                  value={form.checkin}
                  onChange={handleChange}
                  required
                  min={new Date().toISOString().split("T")[0]}
                  className="w-full border border-charcoal/20 bg-white px-4 py-3 text-sm focus:outline-none focus:border-forest transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-charcoal/60 mb-2">
                  <Calendar size={10} className="inline mr-1" />
                  Check-out
                </label>
                <input
                  type="date"
                  name="checkout"
                  value={form.checkout}
                  onChange={handleChange}
                  required
                  min={form.checkin || new Date().toISOString().split("T")[0]}
                  className="w-full border border-charcoal/20 bg-white px-4 py-3 text-sm focus:outline-none focus:border-forest transition-colors"
                />
              </div>
            </div>

            {/* Guests & Room */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-widest text-charcoal/60 mb-2">
                  <Users size={10} className="inline mr-1" />
                  Guests
                </label>
                <select
                  name="guests"
                  value={form.guests}
                  onChange={handleChange}
                  className="w-full border border-charcoal/20 bg-white px-4 py-3 text-sm focus:outline-none focus:border-forest transition-colors appearance-none"
                >
                  {[1, 2, 3, 4, 5, 6].map((n) => (
                    <option key={n} value={n}>
                      {n} Guest{n > 1 ? "s" : ""}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-charcoal/60 mb-2">
                  <Bed size={10} className="inline mr-1" />
                  Room Type
                </label>
                <select
                  name="room"
                  value={form.room}
                  onChange={handleChange}
                  className="w-full border border-charcoal/20 bg-white px-4 py-3 text-sm focus:outline-none focus:border-forest transition-colors appearance-none"
                >
                  <option value="">Any Room</option>
                  {roomTypes.map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-xs uppercase tracking-widest text-charcoal/60 mb-2">
                Phone / WhatsApp
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="+254 7XX XXX XXX"
                className="w-full border border-charcoal/20 bg-white px-4 py-3 text-sm focus:outline-none focus:border-forest transition-colors"
              />
            </div>

            {/* CTA */}
            <button
              type="submit"
              className="btn-primary w-full text-center py-4"
            >
              Confirm via WhatsApp
            </button>

            <p className="text-center text-xs text-charcoal/40">
              Or call us directly:{" "}
              <a
                href="tel:+254794408594"
                className="text-forest hover:underline"
              >
                +254794408594
              </a>
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
