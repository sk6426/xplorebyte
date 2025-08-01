"use client";
import Image from "next/image";
// import { FC, useState } from "react";
import React, { FC, useState, ReactNode } from "react";
const whyChooseUsData = [
  {
    title: "Custom-Tailored Strategies",
    description:
      "We deeply analyze your business objectives to design precise solutions that enhance your market positioning. Our expertise blends proven methods with fresh innovation to achieve impactful outcomes.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="lucide lucide-target w-5 h-5 text-emerald-400"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <circle cx="12" cy="12" r="6"></circle>
        <circle cx="12" cy="12" r="2"></circle>
      </svg>
    ),
  },
  {
    title: "Adaptive & Scalable Architecture",
    description:
      "We create cloud-native solutions that seamlessly grow with your business needs. Our future-proof designs incorporate the latest technologies and scalable frameworks for long-term success.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="lucide lucide-trending-up w-5 h-5 text-emerald-400"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M16 7h6v6"></path>
        <path d="m22 7-8.5 8.5-5-5L2 17"></path>
      </svg>
    ),
  },
  {
    title: "Client-Focused Collaboration",
    description:
      "We prioritize your feedback at every stage. Our transparent process ensures you’re fully informed and involved, enabling us to deliver precisely what your business requires.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="lucide lucide-users w-5 h-5 text-emerald-400"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
        <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
        <circle cx="9" cy="7" r="4"></circle>
      </svg>
    ),
  },
  {
    title: "Security and Compliance Priority",
    description:
      "We implement robust security protocols and adhere to regulatory standards to keep your data and users safe. Our commitment ensures your peace of mind in a complex digital environment.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="lucide lucide-shield w-5 h-5 text-emerald-400"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
      </svg>
    ),
  },
];

const teamData = [
  {
    name: "Marcus Johnson",
    role: "Lead Architect",
    image:
      "https://images.unsplash.com/photo-1601576084861-5de423553c0f?w=800&q=80",
    socials: {
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Sarah Chen",
    role: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1470072508653-1be229b63562?w=800&q=80",
    socials: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "David Rodriguez",
    role: "Tech Lead",
    image:
      "https://images.unsplash.com/photo-1511424323602-d3c1a4138056?w=800&q=80",
    socials: {
      linkedin: "#",
      website: "#",
    },
  },
  {
    name: "Emma Wilson",
    role: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1485960994840-902a67e187c8?w=800&q=80",
    socials: {
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    name: "Alex Kim",
    role: "DevOps Engineer",
    image:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?w=800&q=80",
    socials: {
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Lisa Zhang",
    role: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?w=800&q=80",
    socials: {
      linkedin: "#",
      twitter: "#",
    },
  },
];

const AccordionItem: FC<{
  title: string;
  description: string;
  icon: ReactNode;
}> = ({ title, description, icon }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded-xl hover:shadow-lg transition-all duration-300 border-gray-800 bg-black">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between px-6 py-5 text-left font-medium transition-colors duration-200 ${
          isOpen ? "text-emerald-400" : "text-gray-100 hover:text-emerald-400"
        }`}
      >
        <div className="flex items-center space-x-3">
          {icon}
          <span className="font-sans">{title}</span>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`lucide lucide-chevron-down w-5 h-5 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <path d="m6 9 6 6 6-6"></path>
        </svg>
      </button>
      {isOpen && (
        <div className="px-6 pb-5 leading-relaxed font-sans text-gray-400">
          {description}
        </div>
      )}
    </div>
  );
};

const TeamCard: FC<{
  name: string;
  role: string;
  image: string;
  socials: {
    linkedin?: string;
    github?: string;
    twitter?: string;
    instagram?: string;
    website?: string;
  };
}> = ({ name, role, image, socials }) => {
  return (
    <div className="rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group bg-black">
      <div className="relative">
        <Image
          src={image}
          alt={name}
          width={400} // use your actual image or card width in pixels
          height={160} // or card height in pixels (adjust to match your design)
          className="w-full h-32 sm:h-40 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 from-white/20"></div>
      </div>
      <div className="p-4">
        <p className="font-semibold font-sans text-gray-100">{name}</p>
        <p className="text-sm mb-2 font-sans text-emerald-400">{role}</p>
        <div className="flex space-x-2">
          {socials.linkedin && (
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label={`${name} LinkedIn`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="lucide lucide-linkedin w-4 h-4 cursor-pointer transition-colors duration-200 text-gray-600 hover:text-blue-400"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          )}
          {socials.github && (
            <a
              href={socials.github}
              target="_blank"
              rel="noreferrer"
              aria-label={`${name} GitHub`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="lucide lucide-github w-4 h-4 cursor-pointer transition-colors duration-200 text-gray-600 hover:text-gray-100"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
            </a>
          )}
          {socials.twitter && (
            <a
              href={socials.twitter}
              target="_blank"
              rel="noreferrer"
              aria-label={`${name} Twitter`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="lucide lucide-twitter w-4 h-4 cursor-pointer transition-colors duration-200 text-gray-600 hover:text-blue-600"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
          )}
          {socials.instagram && (
            <a
              href={socials.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label={`${name} Instagram`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="lucide lucide-instagram w-4 h-4 cursor-pointer transition-colors duration-200 text-gray-600 hover:text-pink-400"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
            </a>
          )}
          {socials.website && (
            <a
              href={socials.website}
              target="_blank"
              rel="noreferrer"
              aria-label={`${name} Website`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="lucide lucide-globe w-4 h-4 cursor-pointer transition-colors duration-200 text-gray-600 hover:text-gray-100"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                <path d="M2 12h20"></path>
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const WhyChooseUsSection: FC = () => {
  return (
    <section className="py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16">
        {/* Accordion */}
        <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <div className="flex items-center space-x-2 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="lucide lucide-star w-5 h-5 text-emerald-400"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
            </svg>
            <h2 className="text-sm font-semibold uppercase tracking-wider font-sans text-emerald-400">
              Why Choose Us
            </h2>
          </div>
          <h3 className="sm:text-4xl lg:text-5xl text-3xl text-gray-100 tracking-tight font-manrope mb-8">
            Built on Integrity,
            <br className="hidden sm:block" />{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r font-manrope from-emerald-400 to-emerald-600">
              Fueled by Excellence
            </span>
          </h3>
          <div className="space-y-4">
            {whyChooseUsData.map(({ title, description, icon }) => (
              <AccordionItem
                key={title}
                title={title}
                description={description}
                icon={icon}
              />
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <div className="flex items-center space-x-2 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="lucide lucide-users w-5 h-5 text-emerald-400"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
              <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
              <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
              <circle cx="9" cy="7" r="4"></circle>
            </svg>
            <h2 className="text-sm font-semibold uppercase tracking-wider font-sans text-emerald-400">
              Our Team
            </h2>
          </div>
          <h3 className="sm:text-4xl lg:text-5xl text-3xl text-gray-100 tracking-tight font-manrope mb-8">
            Discover the Team Driving{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r font-manrope from-emerald-400 to-emerald-600">
              Digital Innovation
            </span>
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {teamData.map(({ name, role, image, socials }) => (
              <TeamCard
                key={name}
                name={name}
                role={role}
                image={image}
                socials={socials}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
