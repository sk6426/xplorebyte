// // import React from "react";

// // interface Industry {
// //   title: string;
// //   description: string;
// //   image: string;
// //   bg: string;
// //   accent: string; // gradient accent
// //   ctaUrl?: string;
// // }

// // const industries: Industry[] = [
// //   {
// //     title: "Beauty & Cosmetics",
// //     description:
// //       "Empower beauty brands to engage and convert shoppers on WhatsApp with personalized catalogs, instant support, and seamless product discovery.",
// //     image: "/whatsapp-business/industry/industry-beauty.png",
// //     bg: "bg-green-50",
// //     accent: "from-emerald-400 via-green-300 to-white",
// //     ctaUrl: "#beauty",
// //   },
// //   {
// //     title: "Health & Wellness",
// //     description:
// //       "Enhance patient experiences by enabling easy appointment scheduling, reminders, and health updates through WhatsApp automation.",
// //     image: "/whatsapp-business/industry/industry-health.png",
// //     bg: "bg-blue-50",
// //     accent: "from-sky-400 via-blue-300 to-white",
// //     ctaUrl: "#health",
// //   },
// //   {
// //     title: "Home Decor & Furnishing",
// //     description:
// //       "Drive more sales and delight customers by sharing catalogs, confirming orders, and collecting feedback, all via WhatsApp conversations.",
// //     image: "/whatsapp-business/industry/industry-decor.png",
// //     bg: "bg-yellow-50",
// //     accent: "from-yellow-300 via-orange-200 to-white",
// //     ctaUrl: "#decor",
// //   },
// //   {
// //     title: "Automotive Industry",
// //     description:
// //       "Streamline promotions, service bookings, and reminders—keeping customers informed and loyal through instant WhatsApp messaging.",
// //     image: "/whatsapp-business/industry/industry-automotive.png",
// //     bg: "bg-teal-50",
// //     accent: "from-teal-300 via-emerald-200 to-white",
// //     ctaUrl: "#automotive",
// //   },
// //   {
// //     title: "Real Estate",
// //     description:
// //       "Connect with property seekers instantly, share listings and documents, and schedule site visits—all within WhatsApp’s secure chat.",
// //     image: "/whatsapp-business/industry/industry-realestate.png",
// //     bg: "bg-blue-50",
// //     accent: "from-blue-400 via-blue-200 to-white",
// //     ctaUrl: "#realestate",
// //   },
// //   {
// //     title: "Freelancer & Consultants",
// //     description:
// //       "Deliver a personal touch with automated responses, share service details, and nurture client relationships using WhatsApp for business.",
// //     image: "/whatsapp-business/industry/industry-freelancer.png",
// //     bg: "bg-teal-50",
// //     accent: "from-teal-400 via-green-200 to-white",
// //     ctaUrl: "#freelancer",
// //   },
// //   {
// //     title: "Travel & Tourism",
// //     description:
// //       "Simplify trip bookings, itinerary updates, and customer inquiries with 24/7 WhatsApp support for every traveler’s journey.",
// //     image: "/whatsapp-business/industry/industry-travel.png",
// //     bg: "bg-green-50",
// //     accent: "from-emerald-400 via-sky-200 to-white",
// //     ctaUrl: "#travel",
// //   },
// //   {
// //     title: "Education",
// //     description:
// //       "Boost student engagement with real-time notifications, schedule updates, and support—all easily delivered through WhatsApp.",
// //     image: "/whatsapp-business/industry/industry-education.png",
// //     bg: "bg-blue-50",
// //     accent: "from-indigo-400 via-cyan-200 to-white",
// //     ctaUrl: "#education",
// //   },
// //   {
// //     title: "Spa & Salons",
// //     description:
// //       "Automate booking confirmations, payment links, and promotional offers to keep your clients coming back for more.",
// //     image: "/whatsapp-business/industry/industry-spa.png",
// //     bg: "bg-yellow-50",
// //     accent: "from-yellow-400 via-orange-200 to-white",
// //     ctaUrl: "#spa",
// //   },
// //   {
// //     title: "E-commerce",
// //     description:
// //       "Increase conversions by sending order updates, product recommendations, and delivery alerts directly to your customers on WhatsApp.",
// //     image: "/whatsapp-business/industry/industry-ecommerce.png",
// //     bg: "bg-blue-50",
// //     accent: "from-sky-400 via-indigo-200 to-white",
// //     ctaUrl: "#ecommerce",
// //   },
// //   {
// //     title: "Banking & Finance",
// //     description:
// //       "Build trust and improve customer retention with instant payment reminders, account updates, and secure service communagesication.",
// //     image: "/whatsapp-business/industry/industry-banking.png",
// //     bg: "bg-teal-50",
// //     accent: "from-teal-400 via-cyan-200 to-white",
// //     ctaUrl: "#banking",
// //   },
// //   {
// //     title: "Restaurants & Food Businesses",
// //     description:
// //       "Speed up orders, share menu options, and accept payments seamlessly—giving every customer a delightful experience via WhatsApp.",
// //     image: "/whatsapp-business/industry/industry-food.png",
// //     bg: "bg-yellow-50",
// //     accent: "from-yellow-300 via-orange-100 to-white",
// //     ctaUrl: "#food",
// //   },
// // ];

// // const IndustriesGrid: React.FC = () => (
// //   <section className="py-20 bg-gradient-to-br from-white via-slate-50 to-blue-50">
// //     <div className="max-w-7xl mx-auto px-6">
// //       <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-12">
// //         Built for any <span className="text-emerald-500">Industry</span>
// //       </h2>
// //       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
// //         {industries.map((ind, idx) => (
// //           <div
// //             key={ind.title}
// //             className={`
// //               group relative rounded-3xl shadow-xl flex flex-col p-8 ${ind.bg}
// //               transition hover:scale-[1.035] hover:shadow-2xl hover:z-20 duration-300
// //               border border-white/60 hover:border-emerald-400/70
// //               before:absolute before:top-0 before:left-0 before:w-full before:h-2 before:rounded-t-3xl
// //               before:bg-gradient-to-r before:${ind.accent} before:opacity-90
// //               before:transition-all before:duration-300
// //               hover:before:opacity-100
// //               `}
// //             style={{ minHeight: 430, overflow: "hidden" }}
// //           >
// //             {/* Gradient Accent Bar (already in tailwind above, invisible on mobile if wanted) */}
// //             <img
// //               src={ind.image}
// //               alt={ind.title}
// //               className="w-full h-40 object-contain rounded-2xl mb-5 bg-white group-hover:shadow-lg transition"
// //             />
// //             <h3 className="text-xl font-extrabold text-slate-900 mb-2">
// //               {ind.title}
// //             </h3>
// //             <p className="text-slate-700 mb-4 flex-1">{ind.description}</p>
// //             <a
// //               href={ind.ctaUrl}
// //               className="font-semibold text-emerald-700 flex items-center gap-2 group-hover:underline group-hover:underline-offset-4"
// //             >
// //               Learn more
// //               <span className="group-hover:translate-x-1 transition">
// //                 <svg
// //                   className="w-5 h-5"
// //                   fill="none"
// //                   stroke="currentColor"
// //                   strokeWidth={3}
// //                   viewBox="0 0 24 24"
// //                 >
// //                   <path d="M5 12h14M12 5l7 7-7 7"></path>
// //                 </svg>
// //               </span>
// //             </a>
// //             {/* Soft background blob for more “wow” */}
// //             <span
// //               className={`
// //                 absolute -bottom-10 -right-16 w-56 h-28 rounded-full
// //                 blur-2xl opacity-30 group-hover:opacity-50
// //                 pointer-events-none
// //                 ${idx % 2 === 0 ? "bg-emerald-200" : "bg-purple-200"}
// //               `}
// //             />
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   </section>
// // );

// // export default IndustriesGrid;
// "use client";
// import React from "react";

// interface Industry {
//   title: string;
//   description: string;
//   image: string;
//   bg: string;
//   accent: string;
//   ctaUrl?: string;
// }

// const industries: Industry[] = [
//   {
//     title: "Beauty & Cosmetics",
//     description:
//       "Empower beauty brands to engage and convert shoppers on WhatsApp with personalized catalogs, instant support, and seamless product discovery.",
//     image: "/whatsapp-business/industry/industry-beauty.png",
//     bg: "bg-green-50",
//     accent: "from-emerald-400 via-green-300 to-white",
//     ctaUrl: "#beauty",
//   },
//   {
//     title: "Health & Wellness",
//     description:
//       "Enhance patient experiences by enabling easy appointment scheduling, reminders, and health updates through WhatsApp automation.",
//     image: "/whatsapp-business/industry/industry-health.png",
//     bg: "bg-blue-50",
//     accent: "from-sky-400 via-blue-300 to-white",
//     ctaUrl: "#health",
//   },
//   {
//     title: "Home Decor & Furnishing",
//     description:
//       "Drive more sales and delight customers by sharing catalogs, confirming orders, and collecting feedback, all via WhatsApp conversations.",
//     image: "/whatsapp-business/industry/industry-decor.png",
//     bg: "bg-yellow-50",
//     accent: "from-yellow-300 via-orange-200 to-white",
//     ctaUrl: "#decor",
//   },
//   {
//     title: "Automotive Industry",
//     description:
//       "Streamline promotions, service bookings, and reminders—keeping customers informed and loyal through instant WhatsApp messaging.",
//     image: "/whatsapp-business/industry/industry-automotive.png",
//     bg: "bg-teal-50",
//     accent: "from-teal-300 via-emerald-200 to-white",
//     ctaUrl: "#automotive",
//   },
//   {
//     title: "Real Estate",
//     description:
//       "Connect with property seekers instantly, share listings and documents, and schedule site visits—all within WhatsApp’s secure chat.",
//     image: "/whatsapp-business/industry/industry-realestate.png",
//     bg: "bg-blue-50",
//     accent: "from-blue-400 via-blue-200 to-white",
//     ctaUrl: "#realestate",
//   },
//   {
//     title: "Freelancer & Consultants",
//     description:
//       "Deliver a personal touch with automated responses, share service details, and nurture client relationships using WhatsApp for business.",
//     image: "/whatsapp-business/industry/industry-freelancer.png",
//     bg: "bg-teal-50",
//     accent: "from-teal-400 via-green-200 to-white",
//     ctaUrl: "#freelancer",
//   },
//   {
//     title: "Travel & Tourism",
//     description:
//       "Simplify trip bookings, itinerary updates, and customer inquiries with 24/7 WhatsApp support for every traveler’s journey.",
//     image: "/whatsapp-business/industry/industry-travel.png",
//     bg: "bg-green-50",
//     accent: "from-emerald-400 via-sky-200 to-white",
//     ctaUrl: "#travel",
//   },
//   {
//     title: "Education",
//     description:
//       "Boost student engagement with real-time notifications, schedule updates, and support—all easily delivered through WhatsApp.",
//     image: "/whatsapp-business/industry/industry-education.png",
//     bg: "bg-blue-50",
//     accent: "from-indigo-400 via-cyan-200 to-white",
//     ctaUrl: "#education",
//   },
//   {
//     title: "Spa & Salons",
//     description:
//       "Automate booking confirmations, payment links, and promotional offers to keep your clients coming back for more.",
//     image: "/whatsapp-business/industry/industry-spa.png",
//     bg: "bg-yellow-50",
//     accent: "from-yellow-400 via-orange-200 to-white",
//     ctaUrl: "#spa",
//   },
//   {
//     title: "E-commerce",
//     description:
//       "Increase conversions by sending order updates, product recommendations, and delivery alerts directly to your customers on WhatsApp.",
//     image: "/whatsapp-business/industry/industry-ecommerce.png",
//     bg: "bg-blue-50",
//     accent: "from-sky-400 via-indigo-200 to-white",
//     ctaUrl: "#ecommerce",
//   },
//   {
//     title: "Banking & Finance",
//     description:
//       "Build trust and improve customer retention with instant payment reminders, account updates, and secure service communagesication.",
//     image: "/whatsapp-business/industry/industry-banking.png",
//     bg: "bg-teal-50",
//     accent: "from-teal-400 via-cyan-200 to-white",
//     ctaUrl: "#banking",
//   },
//   {
//     title: "Restaurants & Food Businesses",
//     description:
//       "Speed up orders, share menu options, and accept payments seamlessly—giving every customer a delightful experience via WhatsApp.",
//     image: "/whatsapp-business/industry/industry-food.png",
//     bg: "bg-yellow-50",
//     accent: "from-yellow-300 via-orange-100 to-white",
//     ctaUrl: "#food",
//   },
// ];

// const IndustriesGrid: React.FC = () => (
//   <section className="py-14 md:py-20 bg-gradient-to-br from-white via-slate-50 to-blue-50">
//     <div className="max-w-7xl mx-auto px-3 md:px-8">
//       <h2 className="text-2xl md:text-4xl font-bold text-slate-900 text-center mb-8 md:mb-12">
//         Built for any <span className="text-emerald-500">Industry</span>
//       </h2>
//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
//         {industries.map((ind, idx) => (
//           <div
//             key={ind.title}
//             className={`
//               group relative rounded-3xl shadow-lg flex flex-col px-4 py-6 md:px-7 md:py-9 ${ind.bg}
//               transition hover:scale-[1.03] hover:shadow-2xl hover:z-20 duration-300
//               border border-white/70 hover:border-emerald-400/60
//               min-h-[390px] md:min-h-[420px]
//               overflow-visible
//             `}
//           >
//             {/* Glow/Blob Behind Image */}
//             <span
//               className="absolute left-1/2 -top-6 -translate-x-1/2 z-0 blur-2xl rounded-full w-40 h-16"
//               style={{
//                 background:
//                   "radial-gradient(ellipse at 50% 60%, #a7f3d0 0%, #fff 80%)",
//                 opacity: 0.5,
//               }}
//             />
//             {/* IMAGE */}
//             <div className="flex justify-center relative z-10 mb-3 mt-[-32px]">
//               <img
//                 src={ind.image}
//                 alt={ind.title}
//                 className="..." // your classes
//                 onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
//                   e.currentTarget.src = "/images/industry-placeholder.png";
//                 }}
//               />
//             </div>
//             {/* TITLE & DESCRIPTION */}
//             <h3 className="text-lg md:text-xl font-extrabold text-slate-900 mb-1 md:mb-2">
//               {ind.title}
//             </h3>
//             <p className="text-slate-700 mb-3 md:mb-4 text-sm md:text-base flex-1 leading-relaxed">
//               {ind.description}
//             </p>
//             <a
//               href={ind.ctaUrl}
//               className="font-semibold text-emerald-700 flex items-center gap-2 group-hover:underline group-hover:underline-offset-4 text-sm md:text-base"
//             >
//               Learn more
//               <span className="group-hover:translate-x-1 transition">
//                 <svg
//                   className="w-5 h-5"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth={3}
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M5 12h14M12 5l7 7-7 7"></path>
//                 </svg>
//               </span>
//             </a>
//             {/* Soft background blob for more “wow” */}
//             <span
//               className={`
//                 absolute -bottom-10 -right-16 w-40 h-16 rounded-full
//                 blur-2xl opacity-25 group-hover:opacity-40
//                 pointer-events-none
//                 ${idx % 2 === 0 ? "bg-emerald-200" : "bg-purple-200"}
//               `}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   </section>
// );

// export default IndustriesGrid;

"use client";
import React from "react";

interface Industry {
  title: string;
  description: string;
  image: string;
  bg: string;
  accent: string; // Not used in this design, but kept for data structure consistency
  ctaUrl?: string;
}

const industries: Industry[] = [
  {
    title: "Beauty & Cosmetics",
    description:
      "Empower beauty brands to engage and convert shoppers on WhatsApp with personalized catalogs, instant support, and seamless product discovery.",
    image: "/whatsapp-business/industry/industry-beauty.png",
    bg: "bg-green-50",
    accent: "from-emerald-400 via-green-300 to-white",
    ctaUrl: "#beauty",
  },
  {
    title: "Health & Wellness",
    description:
      "Enhance patient experiences by enabling easy appointment scheduling, reminders, and health updates through WhatsApp automation.",
    image: "/whatsapp-business/industry/industry-health.png",
    bg: "bg-blue-50",
    accent: "from-sky-400 via-blue-300 to-white",
    ctaUrl: "#health",
  },
  {
    title: "Home Decor & Furnishing",
    description:
      "Drive more sales and delight customers by sharing catalogs, confirming orders, and collecting feedback, all via WhatsApp conversations.",
    image: "/whatsapp-business/industry/industry-decor.png",
    bg: "bg-yellow-50",
    accent: "from-yellow-300 via-orange-200 to-white",
    ctaUrl: "#decor",
  },
  {
    title: "Automotive Industry",
    description:
      "Streamline promotions, service bookings, and reminders—keeping customers informed and loyal through instant WhatsApp messaging.",
    image: "/whatsapp-business/industry/industry-automotive.png",
    bg: "bg-teal-50",
    accent: "from-teal-300 via-emerald-200 to-white",
    ctaUrl: "#automotive",
  },
  {
    title: "Real Estate",
    description:
      "Connect with property seekers instantly, share listings and documents, and schedule site visits—all within WhatsApp’s secure chat.",
    image: "/whatsapp-business/industry/industry-realestate.png",
    bg: "bg-blue-50",
    accent: "from-blue-400 via-blue-200 to-white",
    ctaUrl: "#realestate",
  },
  {
    title: "Freelancer & Consultants",
    description:
      "Deliver a personal touch with automated responses, share service details, and nurture client relationships using WhatsApp for business.",
    image: "/whatsapp-business/industry/industry-freelancer.png",
    bg: "bg-teal-50",
    accent: "from-teal-400 via-green-200 to-white",
    ctaUrl: "#freelancer",
  },
  {
    title: "Travel & Tourism",
    description:
      "Simplify trip bookings, itinerary updates, and customer inquiries with 24/7 WhatsApp support for every traveler’s journey.",
    image: "/whatsapp-business/industry/industry-travel.png",
    bg: "bg-green-50",
    accent: "from-emerald-400 via-sky-200 to-white",
    ctaUrl: "#travel",
  },
  {
    title: "Education",
    description:
      "Boost student engagement with real-time notifications, schedule updates, and support—all easily delivered through WhatsApp.",
    image: "/whatsapp-business/industry/industry-education.png",
    bg: "bg-blue-50",
    accent: "from-indigo-400 via-cyan-200 to-white",
    ctaUrl: "#education",
  },
  {
    title: "Spa & Salons",
    description:
      "Automate booking confirmations, payment links, and promotional offers to keep your clients coming back for more.",
    image: "/whatsapp-business/industry/industry-spa.png",
    bg: "bg-yellow-50",
    accent: "from-yellow-400 via-orange-200 to-white",
    ctaUrl: "#spa",
  },
  {
    title: "E-commerce",
    description:
      "Increase conversions by sending order updates, product recommendations, and delivery alerts directly to your customers on WhatsApp.",
    image: "/whatsapp-business/industry/industry-ecommerce.png",
    bg: "bg-blue-50",
    accent: "from-sky-400 via-indigo-200 to-white",
    ctaUrl: "#ecommerce",
  },
  {
    title: "Banking & Finance",
    description:
      "Build trust and improve customer retention with instant payment reminders, account updates, and secure service communication.",
    image: "/whatsapp-business/industry/industry-banking.png",
    bg: "bg-teal-50",
    accent: "from-teal-400 via-cyan-200 to-white",
    ctaUrl: "#banking",
  },
  {
    title: "Restaurants & Food Businesses",
    description:
      "Speed up orders, share menu options, and accept payments seamlessly—giving every customer a delightful experience via WhatsApp.",
    image: "/whatsapp-business/industry/industry-food.png",
    bg: "bg-yellow-50",
    accent: "from-yellow-300 via-orange-100 to-white",
    ctaUrl: "#food",
  },
];

const IndustriesGrid: React.FC = () => (
  <section className="py-14 md:py-20 bg-gradient-to-br from-white via-slate-50 to-blue-50">
    <div className="max-w-7xl mx-auto px-3 md:px-8">
      <h2 className="text-2xl md:text-4xl font-bold text-slate-900 text-center mb-8 md:mb-12">
        Built for any <span className="text-emerald-500">Industry</span>
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
        {industries.map((ind, idx) => (
          <div
            key={ind.title}
            className={`
              group relative rounded-3xl shadow-lg flex flex-col px-4 py-6 md:px-7 md:py-9 ${ind.bg}
              transition hover:scale-[1.03] hover:shadow-2xl hover:z-20 duration-300
              border border-white/70 hover:border-emerald-400/60
              min-h-[390px] md:min-h-[420px]
              overflow-visible
            `}
          >
            {/* Glow/Blob Behind Image */}
            <span
              className="absolute left-1/2 -top-6 -translate-x-1/2 z-0 blur-2xl rounded-full w-40 h-16"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 60%, #a7f3d0 0%, #fff 80%)",
                opacity: 0.5,
              }}
            />
            {/* IMAGE */}
            <div className="flex justify-center relative z-10 mb-3 mt-[-32px]">
              <img
                src={ind.image}
                alt={ind.title}
                className="h-32 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                  e.currentTarget.src = "/images/industry-placeholder.png";
                }}
              />
            </div>
            {/* TITLE & DESCRIPTION */}
            <h3 className="text-lg md:text-xl font-extrabold text-slate-900 mb-1 md:mb-2 text-center">
              {ind.title}
            </h3>
            <p className="text-slate-700 mb-3 md:mb-4 text-sm md:text-base flex-1 leading-relaxed text-center">
              {ind.description}
            </p>
            <a
              href={ind.ctaUrl}
              className="font-semibold text-emerald-700 flex items-center justify-center gap-2 group-hover:underline group-hover:underline-offset-4 text-sm md:text-base"
            >
              Learn more
              <span className="group-hover:translate-x-1 transition">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={3}
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </span>
            </a>
            {/* Soft background blob for more “wow” */}
            <span
              className={`
                absolute -bottom-10 -right-16 w-40 h-16 rounded-full
                blur-2xl opacity-25 group-hover:opacity-40
                pointer-events-none
                ${idx % 2 === 0 ? "bg-emerald-200" : "bg-purple-200"}
              `}
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default IndustriesGrid;
