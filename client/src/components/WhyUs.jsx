import React from "react";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconTableColumn,
} from "@tabler/icons-react";
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";

const WhyUs = () => {
  const items = [
    {
      title: "Our Vision",
      description: `At Hackite InfoTech, our vision is to become a global leader in digital transformation by empowering businesses to innovate, grow, and stay secure in a constantly evolving technological landscape. We aim to create a world where creativity seamlessly meets technology — where every idea is transformed into a meaningful, impactful, and secure digital experience that drives progress and inspires change. We envision building a future where digital excellence becomes accessible to every business, regardless of size or industry. Through our vision, we aspire to redefine how technology connects people, enhances productivity, and fuels sustainable growth.`,
      icon: <IconTableColumn className="h-4 w-4 text-gray-300" />,
    },
    {
      title: "Our Mission",
      description: `Our mission is to deliver intelligent, reliable, and scalable digital solutions that enable businesses to achieve sustainable success. We are committed to providing cutting-edge web, mobile, and marketing solutions that drive measurable results, while building long-term partnerships based on transparency, trust, and continuous innovation. Every product and service we deliver is crafted to meet the highest standards of quality, performance, and security. Through our expertise and passion for technology, we empower clients to embrace the digital era with confidence and unlock their full potential.`,
      icon: <IconArrowWaveRightUp className="h-4 w-4 text-gray-300" />,
    },
    // {
    //     title: "Insight",
    //     description: `Hackite InfoTech is a full-service technology company specializing
    //       Web & App Development, Digital Marketing, and Cyber Security
    //       solutions. We empower businesses to evolve digitally by combining
    //       innovation, strategy, and cutting edge technology. Our approach is not
    //       just to create but to craft impactful digital experiences that help
    //       our clients lead in the modern marketplace.`,
    //     icon: <IconBoxAlignTopLeft className="h-4 w-4 text-gray-300" />,
    // },
  ];

  return (
    <main className=" flex flex-col md:flex-row !px-2 md:!px-10 gap-5">
      {/* Why Part */}
      <div className=" md:w-[50%] !space-y-7 bg-black border border-gray-800 !p-6 rounded-xl">
        <p className="md:text-3xl text-2xl font-semibold">Why Hackite InfoTech?</p>
        <p className="text-sm !text-neutral-400">
          Hackite InfoTech is a full-service technology company specializing in
          Web & App Development, Digital Marketing, and Cyber Security
          solutions. We empower businesses to evolve digitally by combining
          innovation, strategy, and cutting-edge technology. Our approach is not
          just to create — but to craft impactful digital experiences that help
          our clients lead in the modern marketplace.
          <br />
          <br />
          We believe in three core principles that drive everything we do —
          Quality, Innovation, and Commitment. Our dedicated teams work
          tirelessly to ensure that every project we deliver meets the highest
          standards of performance, design, and security.
          <br />
          <br />
          At Hackite InfoTech, we provide end-to-end consulting and technology
          solutions that help organizations streamline operations, enhance
          customer engagement, and achieve measurable growth. We understand that
          technology is the backbone of every modern business — and we make it
          stronger, smarter, and more secure.
          <br />
          <br />
          We are a client-focused and results-driven company. Every project
          begins with understanding your vision and ends with delivering
          excellence that exceeds expectations. Whether it’s developing sleek,
          high-performing applications, executing data-driven marketing
          campaigns, or implementing enterprise-grade cybersecurity solutions —
          Hackite InfoTech ensures your business stays ahead in a fast-evolving
          digital world.
          <br />
          <br />
          Our philosophy is simple — to build trust through technology, and to
          stand by our clients as long-term digital partners. With Hackite
          InfoTech, you don’t just get a service provider — you get a dedicated
          ally in your journey to Dream It. Build It. Secure It
        </p>
      </div>
      {/* Vision part */}
      <div className="md:w-[50%] !space-y-2 flex flex-col justify-between">
        {items.map((item, i) => (
          <div key={i} className="">
            <BentoGridItem
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              className="bg-black border border-gray-800 p-6 rounded-xl transition"
            />
          </div>
        ))}
      </div>
    </main>
  );
};

export default WhyUs;
