// components/Footer.tsx
import { FC } from "react";

const socials = [
  { name: "LinkedIn", href: "#", color: "#0296FE" },
  { name: "X", href: "#", color: "#11A944" },
  { name: "Instagram", href: "#", color: "#EA1752" },
  { name: "WhatsApp", href: "#", color: "#25D366" },
  { name: "YouTube", href: "#", color: "#FFB800" },
];

const quickLinks = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#" },
  { label: "BusiOrbitX", href: "#" },
  { label: "Contact", href: "#" },
];

const Footer: FC = () => {
  return (
    <footer className="bg-gradient-to-r from-[#0A0E23] to-[#181B32] px-6 py-12 text-white/80">
      <div className="w-full max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        {/* Brand + Socials */}
        <div>
          <div className="mb-3 font-bold text-2xl text-white flex items-center gap-2">
            <svg
              width="30"
              height="30"
              viewBox="0 0 400 400"
              fill="none"
              aria-label="XploreByte logo"
              role="img"
            >
              {/* Logo paths */}
              <rect
                x="50"
                y="75"
                width="40"
                height="250"
                rx="20"
                transform="rotate(-45 50 75)"
                fill="#FFB800"
              />
              <rect
                x="95"
                y="270"
                width="40"
                height="250"
                rx="20"
                transform="rotate(-135 95 270)"
                fill="#2196F3"
              />
              <rect
                x="137"
                y="137"
                width="50"
                height="50"
                transform="rotate(-45 137 137)"
                fill="#FF8000"
                opacity="0.9"
              />
              <path
                d="M200,90 Q315,90 315,200 Q315,310 200,310"
                stroke="#EB222B"
                strokeWidth="40"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M200,200 Q300,200 300,300 Q300,360 200,360"
                stroke="#6F42C1"
                strokeWidth="40"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M200,310 Q270,310 270,360 Q270,360 200,360"
                stroke="#21A366"
                strokeWidth="40"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
            XploreByte Solutions
          </div>
          <div className="mb-4 text-sm">
            SaaS & Digital Solutions | Est. 2024
          </div>
          <div className="flex gap-3 mt-3">
            {socials.map(({ name, href, color }) => (
              <a
                key={name}
                href={href}
                className="hover:underline transition"
                style={{ color }}
                aria-label={name}
              >
                {name}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <div className="font-semibold mb-2 text-white">Explore</div>
          <ul className="text-sm space-y-1">
            {quickLinks.map(({ label, href }) => (
              <li key={label}>
                <a href={href} className="hover:underline">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <div className="font-semibold mb-2 text-white">Contact</div>
          <div className="text-sm">hello@xplorebyte.com</div>
          <div className="text-sm">+91-XXXXXXXXXX</div>
          <div className="mt-4">
            <span className="text-xs">
              &copy; 2024 XploreByte Solutions. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
