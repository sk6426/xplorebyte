import React from "react";
import HeroSection from "@/components/whatsappBusiness/HeroSection";
import ProductFeatures from "@/components/whatsappBusiness/ProductFeatures";
import DemoCTA from "@/components/whatsappBusiness/DemoCTA";
import SocialProof from "@/components/whatsappBusiness/SocialProof";
import Testimonials from "@/components/whatsappBusiness/Testimonials";
import HubsSection from "@/components/whatsappBusiness/HubsSection";
import IndustriesGrid from "@/components/whatsappBusiness/IndustriesGrid";
import IndustriesCarousel from "@/components/whatsappBusiness/IndustryCarousel";
// import TrustedByBrands from "@/components/whatsappBusiness/TrustedByBrands";
export const metadata = {
  title: "xChatByte – #1 WhatsApp Business Automation Platform",
  description:
    "Automate WhatsApp, engage customers, and grow your business with xChatByte. Book a demo, try it live, and save hours every week!",
  openGraph: {
    title: "xChatByte – WhatsApp Business Automation",
    description:
      "Transform your customer engagement with the smartest WhatsApp automation platform. Book a free demo today.",
    images: [{ url: "/images/whatsapp-chat-illustration.png" }],
  },
};

const schemaData = {
  "@context": "https://schema.org/",
  "@type": "Product",
  name: "xChatByte",
  image: "https://yourdomain.com/images/whatsapp-chat-illustration.png",
  description:
    "Automate WhatsApp, engage customers, and grow your business with xChatByte.",
  brand: {
    "@type": "Brand",
    name: "XploreByte",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "182",
  },
};

const WhatsappBusinessPage: React.FC = () => {
  return (
    <>
      {/* SEO Schema for Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <HeroSection />
      <HubsSection />
      <SocialProof />
      <IndustriesGrid />
      <IndustriesCarousel />
      <ProductFeatures />
      <Testimonials />
      <DemoCTA />
    </>
  );
};

export default WhatsappBusinessPage;
