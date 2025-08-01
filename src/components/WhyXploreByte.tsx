import { FC } from "react";

const reasons = [
  { text: "Enterprise-Grade Security & Reliability", color: "#11A944" },
  { text: "Trusted by 500+ Indian & Global Businesses", color: "#0296FE" },
  { text: "Lightning-Fast Delivery & Support", color: "#FFB800" },
  { text: "Compliant, Scalable, Future-Ready SaaS", color: "#EA1752" },
];

const badges = [
  { label: "ISO Secure", color: "#11A944" },
  { label: "GDPR Compliant", color: "#0296FE" },
  { label: "500+ Clients", color: "#FFB800" },
  { label: "Award-Winning", color: "#EA1752" },
];

const WhyXploreByte: FC = () => {
  return (
    <section className="w-full flex justify-center py-16 px-6 bg-[#101426]/90">
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-12 md:gap-28 items-center relative">
        {/* Left: Reasons */}
        <div className="flex-1 space-y-8">
          <h3 className="text-3xl md:text-4xl font-extrabold mb-4 text-white tracking-wide">
            Why XploreByte?
          </h3>
          <ul className="space-y-4 text-white/90 text-lg font-medium">
            {reasons.map(({ text, color }) => (
              <li
                key={text}
                className="flex items-center gap-3 group cursor-default"
                tabIndex={0}
              >
                <span
                  className="inline-block w-5 h-5 rounded-full mr-2 transition-transform duration-300 group-hover:scale-110 group-focus:scale-110"
                  style={{ backgroundColor: color }}
                  aria-hidden="true"
                />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Vertical Divider for Desktop */}
        <div
          className="hidden md:block absolute left-1/2 top-12 bottom-12 w-[2px] bg-gradient-to-b from-[#FFB800]/80 via-transparent to-[#11A944]/80 -translate-x-1/2 rounded"
          aria-hidden="true"
        ></div>

        {/* Right: Trust Badges */}
        <div className="flex-1 grid grid-cols-2 gap-8">
          {badges.map(({ label, color }) => (
            <div
              key={label}
              className="rounded-xl p-6 text-center font-semibold border transition-shadow shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-opacity-50 cursor-default"
              style={{
                borderColor: `${color}66`,
                backgroundColor: `${color}1a`,
                color,
              }}
              tabIndex={0}
              role="region"
              aria-label={label}
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyXploreByte;

// // components/WhyXploreByte.tsx
// import { FC } from "react";

// const reasons = [
//   { text: "Enterprise-Grade Security & Reliability", color: "#11A944" },
//   { text: "Trusted by 500+ Indian & Global Businesses", color: "#0296FE" },
//   { text: "Lightning-Fast Delivery & Support", color: "#FFB800" },
//   { text: "Compliant, Scalable, Future-Ready SaaS", color: "#EA1752" },
// ];

// const badges = [
//   { label: "ISO Secure", color: "#11A944" },
//   { label: "GDPR Compliant", color: "#0296FE" },
//   { label: "500+ Clients", color: "#FFB800" },
//   { label: "Award-Winning", color: "#EA1752" },
// ];

// const WhyXploreByte: FC = () => {
//   return (
//     <section className="w-full flex justify-center py-14 px-4 bg-[#101426]/90">
//       <div className="w-full max-w-5xl flex flex-col md:flex-row gap-10 md:gap-20 items-center">
//         {/* Left: Reasons */}
//         <div className="flex-1 space-y-6">
//           <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white">
//             Why XploreByte?
//           </h3>
//           <ul className="space-y-3 text-white/80 text-base">
//             {reasons.map(({ text, color }) => (
//               <li key={text} className="flex items-center gap-2">
//                 <span
//                   className="inline-block w-4 h-4 rounded-full mr-1"
//                   style={{ backgroundColor: color }}
//                   aria-hidden="true"
//                 ></span>
//                 {text}
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Right: Trust Badges */}
//         <div className="flex-1 grid grid-cols-2 gap-6">
//           {badges.map(({ label, color }) => (
//             <div
//               key={label}
//               className="rounded-xl p-4 text-center font-semibold border"
//               style={{
//                 borderColor: `${color}66`,
//                 backgroundColor: `${color}1a`,
//                 color,
//               }}
//               tabIndex={0}
//               role="region"
//               aria-label={label}
//             >
//               {label}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyXploreByte;
