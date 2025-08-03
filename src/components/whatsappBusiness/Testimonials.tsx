import React from "react";
import StarRating from "./StarRating";

const testimonials = [
  {
    name: "Priya Singh",
    company: "RetailMart",
    avatar: "/images/testimonial1.png",
    quote:
      "xChatByte made it effortless to connect with our customers. Our sales via WhatsApp doubled in 2 months!",
    rating: 5,
  },
  {
    name: "Amit Verma",
    company: "GrowBiz",
    avatar: "/images/testimonial2.png",
    quote:
      "The automation tools are a game-changer. Our team saves hours every week!",
    rating: 4.8,
  },
  {
    name: "Anjali Mehra",
    company: "FoodBasket",
    avatar: "/images/testimonial3.png",
    quote:
      "Support is fantastic and onboarding was easy. Highly recommend for SMBs!",
    rating: 5,
  },
];

const Testimonials: React.FC = () => (
  <section className="py-20 bg-gradient-to-tr from-slate-950 to-gray-900 relative">
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-14">
        Our Customers <span className="text-emerald-400">Love</span> xChatByte
      </h2>
      <div className="grid md:grid-cols-3 gap-10">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="relative bg-white/10 border border-white/10 backdrop-blur-lg rounded-3xl shadow-xl p-8 flex flex-col items-center text-center hover:scale-[1.04] transition-all duration-300"
          >
            <img
              src={t.avatar}
              alt={t.name + " avatar"}
              className="w-20 h-20 rounded-full object-cover border-4 border-emerald-400 mb-4 shadow-lg"
            />
            <StarRating rating={t.rating} />
            <blockquote className="text-lg text-slate-100 italic my-4">
              “{t.quote}”
            </blockquote>
            <div className="mt-2">
              <span className="font-semibold text-white">{t.name}</span>
              <span className="ml-2 text-emerald-300 text-sm font-medium">
                {t.company}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
