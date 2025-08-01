"use client";

import { FC } from "react";

const statsData = [
  {
    label: "Client Satisfaction",
    value: "98%",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="lucide lucide-heart w-4 h-4 text-red-500"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
      </svg>
    ),
  },
  {
    label: "Projects Delivered",
    value: "500+",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="lucide lucide-briefcase w-4 h-4 text-blue-500"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
        <rect width="20" height="14" x="2" y="6" rx="2"></rect>
      </svg>
    ),
  },
  {
    label: "Revenue Generated",
    value: "$50M+",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="lucide lucide-dollar-sign w-4 h-4 text-green-500"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <line x1="12" x2="12" y1="2" y2="22"></line>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
      </svg>
    ),
  },
  {
    label: "Years Experience",
    value: "8+",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="lucide lucide-calendar w-4 h-4 text-purple-500"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M8 2v4"></path>
        <path d="M16 2v4"></path>
        <rect width="18" height="18" x="3" y="4" rx="2"></rect>
        <path d="M3 10h18"></path>
      </svg>
    ),
  },
];

const StatsSection: FC = () => {
  return (
    <section className="border-y bg-black border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {statsData.map(({ label, value, icon }, idx) => (
            <div
              key={label}
              className="animate-fade-in-up"
              style={{ animationDelay: `${0.1 * (idx + 1)}s` }}
            >
              <div className="text-3xl lg:text-4xl mb-2 font-manrope text-gray-100">
                {value}
              </div>
              <div className="flex items-center justify-center space-x-1 mb-1">
                {icon}
                <p className="text-sm font-medium font-sans text-gray-400">
                  {label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
