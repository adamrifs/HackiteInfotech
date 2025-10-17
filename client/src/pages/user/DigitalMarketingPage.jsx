import React from "react";
import {
  Search,
  BarChart3,
  Globe,
  Megaphone,
  PenTool,
  Mail,
  Users,
  LineChart,
  TrendingUp,
  MessageSquare,
} from "lucide-react";
import Img from "../../assets/digital-marketing.webp";

export default function DigitalMarketingPage() {
  return (
    <main className="min-h-screen bg-black !text-gray-100 !px-6 !py-10 md:!px-12 lg:!px-24">
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-snug !pb-3 md:!pb-2 md:!px-5 tracking-tight">
        Digital Marketing Solutions
      </h1>

      {/* HERO SECTION */}
      <section className="max-w-7xl !mx-auto grid gap-10 lg:gap-16 lg:grid-cols-2 items-center">
        {/* IMAGE - Comes first on mobile */}
        <div className="order-1 lg:order-2">
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
            <img
              src={Img}
              alt="digital-marketing-img"
              className="w-full h-64 object-cover sm:h-80 md:h-96 opacity-90"
            />
          </div>
        </div>

        {/* TEXT CONTENT */}
        <div className="order-2 lg:order-1 space-y-6">
          <p className="!text-neutral-400 text-sm md:text-sm leading-relaxed">
            At Hackite InfoTech, we deliver powerful and data-driven digital
            marketing solutions to help brands grow their online presence,
            attract quality leads, and convert audiences into loyal customers.
            Our strategies cover every aspect of online promotion, from brand
            visibility and SEO optimization to social media campaigns and paid
            advertising. We specialize in Search Engine Optimization (SEO),
            implementing both on-page and off-page techniques to boost search
            rankings and long-term organic growth. Our paid advertising
            campaigns across Google Ads, Meta Ads, and other platforms are
            designed to maximize reach, engagement, and ROI with precision
            targeting.
          </p>

          <p className="!text-neutral-400 text-sm md:text-sm leading-relaxed">
            We also manage social media marketing through content planning, post
            scheduling, and engagement tracking—building a consistent and
            authentic brand presence across platforms. With our content
            marketing expertise, we craft impactful blogs, videos, and
            infographics that tell your brand story and connect emotionally with
            your audience. To sustain customer relationships, our email
            marketing automation campaigns deliver timely, personalized messages
            that nurture leads and boost retention.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section
        id="services"
        className="max-w-7xl !mx-auto !mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {[
          {
            Icon: Globe,
            title: "Online Promotions & Branding",
            text: "Enhance your brand’s online visibility and reach the right audience with strategic campaigns and storytelling.",
          },
          {
            Icon: Search,
            title: "Search Engine Optimization (SEO)",
            text: "Boost your organic rankings with effective on-page and off-page SEO techniques tailored to your goals.",
          },
          {
            Icon: BarChart3,
            title: "Paid Advertising (Google & Meta Ads)",
            text: "Run highly targeted ad campaigns that maximize ROI and drive measurable business growth.",
          },
          {
            Icon: Megaphone,
            title: "Social Media Marketing",
            text: "Strategic content creation, posting, and engagement across major social media platforms.",
          },
          {
            Icon: PenTool,
            title: "Content Marketing",
            text: "Blogs, videos, and infographics that tell your story, educate customers, and strengthen brand trust.",
          },
          {
            Icon: Mail,
            title: "Email Campaigns & Automation",
            text: "Personalized email marketing workflows that nurture leads and build customer loyalty.",
          },
          {
            Icon: Users,
            title: "Influencer & Affiliate Marketing",
            text: "Collaborate with trusted influencers and affiliates to expand your brand’s digital footprint.",
          },
          {
            Icon: LineChart,
            title: "Analytics & Reporting",
            text: "Measure performance using Google Analytics and SEMrush to make informed marketing decisions.",
          },
          {
            Icon: TrendingUp,
            title: "Conversion Rate Optimization (CRO)",
            text: "Optimize user experience and conversion funnels to turn traffic into paying customers.",
          },
          {
            Icon: MessageSquare,
            title: "Online Reputation Management (ORM)",
            text: "Maintain a positive brand image through proactive monitoring and customer engagement.",
          },
        ].map((s, idx) => (
          <article
            key={idx}
            className="bg-gray-900 border border-gray-800 rounded-2xl !p-6 hover:border-pink-500 transition-all"
          >
            <s.Icon className="w-7 h-7 text-pink-500 !mb-3" />
            <h3 className="font-semibold text-lg !mb-2 text-white">
              {s.title}
            </h3>
            <p className="text-sm !text-neutral-400 leading-relaxed">
              {s.text}
            </p>
          </article>
        ))}
      </section>
    </main>
  );
}
