import React from "react";
import Image from "next/image";

// 1. Define type
type Testimonial = {
  name: string;
  role: string;
  photo: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Anjali Sharma",
    role: "CEO, TechCorp",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    quote:
      "XploreByte transformed our digital presence with unmatched expertise and commitment. Their solutions have accelerated our growth significantly.",
  },
  {
    name: "Ravi Patel",
    role: "Founder, InnovateX",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    quote:
      "Their team’s professionalism and innovative approach to cloud solutions gave our business a competitive edge. Highly recommended!",
  },
  {
    name: "Priya Singh",
    role: "CTO, GlobalTech",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
    quote:
      "Reliable, scalable, and always ahead of the curve. XploreByte’s support and tech expertise helped us streamline complex workflows.",
  },
];

// 2. Use the type in your component
const TestimonialCard = ({ name, role, photo, quote }: Testimonial) => (
  <div className="bg-black border border-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center max-w-md mx-auto">
    <Image
      src={photo}
      alt={name}
      width={80}
      height={80}
      className="w-20 h-20 rounded-full mb-4 border-2 border-emerald-500 object-cover"
    />
    <p className="text-gray-300 italic mb-6">“{quote}”</p>
    <h4 className="text-white font-semibold text-lg">{name}</h4>
    <p className="text-emerald-400 text-sm">{role}</p>
  </div>
);

const TestimonialSection = () => {
  return (
    <section className="py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-manrope font-bold text-gray-100 mb-4">
          What Our Clients Say
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12 font-sans text-lg">
          Trusted by industry leaders, here’s how we’ve helped businesses
          transform and thrive.
        </p>
        <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map(testimonial => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
