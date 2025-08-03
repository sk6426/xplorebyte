import React from "react";
import {
  FaSlack,
  FaShopify,
  FaHubspot,
  FaGoogle,
  FaMicrosoft,
  FaSpotify,
  FaAirbnb,
  FaDropbox,
  FaFigma,
  FaStripe,
  FaAws,
  FaApple,
} from "react-icons/fa";
import { SiZoho, SiNotion, SiZapier } from "react-icons/si";

const brandIcons = [
  { name: "Slack", icon: <FaSlack /> },
  { name: "Shopify", icon: <FaShopify /> },
  { name: "HubSpot", icon: <FaHubspot /> },
  { name: "Zoho", icon: <SiZoho /> },
  { name: "Google", icon: <FaGoogle /> },
  { name: "Microsoft", icon: <FaMicrosoft /> },
  { name: "Spotify", icon: <FaSpotify /> },
  { name: "Airbnb", icon: <FaAirbnb /> },
  { name: "Dropbox", icon: <FaDropbox /> },
  { name: "Figma", icon: <FaFigma /> },
  { name: "Stripe", icon: <FaStripe /> },
  { name: "AWS", icon: <FaAws /> },

  { name: "Apple", icon: <FaApple /> },
  { name: "Notion", icon: <SiNotion /> },
  { name: "Zapier", icon: <SiZapier /> },
];

const SocialProof: React.FC = () => (
  <section className="py-8 bg-white/10 backdrop-blur-xl">
    <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
      <h3 className="text-lg font-semibold text-slate-200 mb-5 tracking-wider uppercase">
        Trusted by forward-thinking teams
      </h3>
      <div className="flex flex-wrap justify-center items-center gap-10 opacity-90">
        {brandIcons.map(brand => (
          <span
            key={brand.name}
            title={brand.name}
            className="text-4xl text-slate-100 opacity-70 hover:opacity-100 transition-all duration-200"
          >
            {brand.icon}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default SocialProof;
