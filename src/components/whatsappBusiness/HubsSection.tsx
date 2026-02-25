// import React from "react";

// interface HubFeature {
//   title: string;
//   description: string;
//   badge: string;
//   badgeColor: string;
//   image: string;
//   learnMoreUrl: string;
// }

// const hubs: HubFeature[] = [
//   {
//     title: "Scale Marketing",
//     description:
//       "Automate customer engagement on WhatsApp & Instagram to drive leads and conversions",
//     badge: "Marketing Hub",
//     badgeColor: "bg-emerald-500",
//     image: "/whatsapp-business/hub-marketing.png", // <--- Use your own image or video thumbnail
//     learnMoreUrl: "#marketing",
//   },
//   {
//     title: "Delight Customers",
//     description:
//       "Stay on top of every customer query with a unified team inbox built for WhatsApp, Instagram",
//     badge: "Support Hub",
//     badgeColor: "bg-blue-500",
//     image: "/whatsapp-business/hub-support.png",
//     learnMoreUrl: "#support",
//   },
//   {
//     title: "Win Deals",
//     description:
//       "Capture leads, engage prospects, and close deals faster with WhatsApp first Sales CRM",
//     badge: "Sales CRM",
//     badgeColor: "bg-yellow-500 text-gray-900",
//     image: "/whatsapp-business/hub-sales.png",
//     learnMoreUrl: "#sales",
//   },
// ];

// const HubsSection: React.FC = () => (
//   <section className="py-20 bg-gradient-to-br from-white via-slate-100 to-blue-50">
//     <div className="max-w-7xl mx-auto px-6">
//       <div className="grid md:grid-cols-3 gap-10">
//         {hubs.map((hub, idx) => (
//           <div
//             key={hub.title}
//             className="group rounded-3xl bg-white shadow-2xl border border-gray-200 p-6 flex flex-col items-center transition-transform duration-200 hover:scale-105 hover:shadow-emerald-200/60"
//           >
//             <div className="relative w-full flex flex-col items-center mb-4">
//               {/* Badge */}
//               <span
//                 className={`absolute top-2 left-2 px-4 py-1 rounded-full font-bold text-sm shadow ${hub.badgeColor}`}
//               >
//                 {hub.badge}
//               </span>
//               {/* Image */}
//               <img
//                 src={hub.image}
//                 alt={hub.title}
//                 className="w-[260px] h-[260px] rounded-2xl object-cover border-2 border-gray-100 mt-6"
//               />
//             </div>
//             <h3 className="text-2xl font-bold text-slate-900 mb-2 text-center">
//               {hub.title}
//             </h3>
//             <p className="text-slate-600 mb-4 text-center">{hub.description}</p>
//             <a
//               href={hub.learnMoreUrl}
//               className="text-emerald-700 font-semibold underline underline-offset-4 decoration-2 hover:text-emerald-500 flex items-center gap-2"
//             >
//               Learn More
//               <svg
//                 className="w-4 h-4"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth={3}
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M5 12h14M12 5l7 7-7 7"></path>
//               </svg>
//             </a>
//           </div>
//         ))}
//       </div>
//     </div>
//   </section>
// );

// export default HubsSection;
import React from "react";

interface HubFeature {
  title: string;
  description: string;
  badge: string;
  badgeColor: string;
  image: string;
  learnMoreUrl: string;
}

const hubs: HubFeature[] = [
  {
    title: "Scale Marketing",
    description:
      "Automate customer engagement on WhatsApp & Instagram to drive leads and conversions",
    badge: "Marketing Hub",
    badgeColor: "bg-emerald-500",
    image: "/whatsapp-business/hub-marketing.png",
    learnMoreUrl: "#marketing",
  },
  {
    title: "Delight Customers",
    description:
      "Stay on top of every customer query with a unified team inbox built for WhatsApp, Instagram",
    badge: "Support Hub",
    badgeColor: "bg-blue-500",
    image: "/whatsapp-business/hub-support.png",
    learnMoreUrl: "#support",
  },
  {
    title: "Win Deals",
    description:
      "Capture leads, engage prospects, and close deals faster with WhatsApp first Sales CRM",
    badge: "Sales CRM",
    badgeColor: "bg-yellow-500 text-gray-900",
    image: "/whatsapp-business/hub-sales.png",
    learnMoreUrl: "#sales",
  },
];

const HubsSection: React.FC = () => (
  <section className="py-20 bg-gradient-to-br from-white via-slate-100 to-blue-50">
    <div className="max-w-7xl mx-auto px-6">
      {/* Section Headline */}
      <div className="mb-12 text-center">
        <h3 className="text-lg md:text-xl font-semibold text-emerald-600 mb-2 tracking-wide uppercase">
          Next-Gen WhatsApp Platform
        </h3>
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-1">
          Smart Automation for Teams of Any Size
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-10">
        {hubs.map((hub, idx) => (
          <div
            key={hub.title}
            className="group rounded-3xl bg-white shadow-2xl border border-gray-200 p-6 flex flex-col items-center transition-transform duration-200 hover:scale-105 hover:shadow-emerald-200/60"
          >
            <div className="relative w-full flex flex-col items-center mb-4">
              {/* Badge */}
              <span
                className={`absolute top-2 left-2 px-4 py-1 rounded-full font-bold text-sm shadow ${hub.badgeColor}`}
              >
                {hub.badge}
              </span>
              {/* Image */}
              <img
                src={hub.image}
                alt={hub.title}
                className="w-[260px] h-[260px] rounded-2xl object-cover border-2 border-gray-100 mt-6"
              />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2 text-center">
              {hub.title}
            </h3>
            <p className="text-slate-600 mb-4 text-center">{hub.description}</p>
            <a
              href={hub.learnMoreUrl}
              className="text-emerald-700 font-semibold underline underline-offset-4 decoration-2 hover:text-emerald-500 flex items-center gap-2"
            >
              Learn More
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={3}
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HubsSection;
