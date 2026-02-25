import React from "react";
import { Bot, MessageCircle, Megaphone, BarChart2 } from "lucide-react";

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
  accent: string;
}

const features: Feature[] = [
  {
    title: "Automate Every Chat",
    description:
      "Set up WhatsApp auto-replies, lead capture, and support flows with zero coding.",
    icon: <Bot className="w-10 h-10 text-emerald-400 drop-shadow-md" />,
    accent: "from-emerald-400 to-green-600",
  },
  {
    title: "Unified Inbox",
    description:
      "Manage all customer conversations in one fast, modern dashboard—never miss a message.",
    icon: (
      <MessageCircle className="w-10 h-10 text-indigo-400 drop-shadow-md" />
    ),
    accent: "from-indigo-400 to-purple-600",
  },
  {
    title: "1-Click Bulk Campaigns",
    description:
      "Send promos, alerts, and updates to thousands instantly. Personalize at scale.",
    icon: <Megaphone className="w-10 h-10 text-fuchsia-400 drop-shadow-md" />,
    accent: "from-fuchsia-400 to-pink-600",
  },
  {
    title: "Live Analytics",
    description:
      "See open rates, click rates, and sales—beautifully visualized in real time.",
    icon: <BarChart2 className="w-10 h-10 text-cyan-400 drop-shadow-md" />,
    accent: "from-cyan-400 to-sky-600",
  },
];

const ProductFeatures: React.FC = () => (
  <section className="relative py-24 bg-gradient-to-br from-gray-950 via-slate-950 to-slate-900 overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <h2 className="text-4xl font-bold text-white text-center mb-16 drop-shadow-xl">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-indigo-500">
          Built for Scale.
        </span>
        <br />
        <span className="text-slate-200">Trusted by Fast-Growing Brands</span>
      </h2>
      <div className="flex flex-col gap-10 md:grid md:grid-cols-2">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className={`
              group relative flex items-center gap-6 p-7 rounded-3xl
              bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl
              transition-all duration-300 hover:scale-[1.03]
              before:absolute before:inset-0 before:-z-1
              before:rounded-3xl before:blur-lg
              before:bg-gradient-to-br before:opacity-0
              group-hover:before:opacity-70
              before:${feature.accent}
            `}
            style={{ minHeight: 160 }}
          >
            <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-black/30 shadow-md border border-white/10">
              {feature.icon}
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-white mb-1">
                {feature.title}
              </h3>
              <p className="text-slate-300">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProductFeatures;
