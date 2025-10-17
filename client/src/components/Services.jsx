import React from "react";
import "../css/Services.css";
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";
import {
    IconArrowWaveRightUp,
    IconBoxAlignRightFilled,
    IconBoxAlignTopLeft,
    IconTableColumn,
} from "@tabler/icons-react";
import { motion } from "framer-motion";

const items = [
    {
        title: "End-to-End Cybersecurity",
        description:
            "We safeguard businesses from evolving digital threats with VAPT, red teaming, and threat analysis—ensuring your systems stay resilient.",
        icon: <IconTableColumn className="h-4 w-4 text-gray-300" />,
    },
    {
        title: "Digital Marketing",
        description: "We help brands grow and engage their audience through data-driven strategies, SEO, social media marketing, and performance campaigns that deliver measurable results.",
        icon: <IconArrowWaveRightUp className="h-4 w-4 text-gray-300" />,
    },
    {
        title: "Web Application development",
        description: "We build scalable, secure, and high-performance web applications tailored to your business needs, delivering seamless user experiences and robust functionality across devices.",
        icon: <IconBoxAlignTopLeft className="h-4 w-4 text-gray-300" />,
    },
    {
        title: "Mobile App Development",
        description: "We design and develop intuitive, high-performance mobile apps for iOS and Android that engage users, drive growth, and deliver seamless digital experiences.",
        icon: <IconBoxAlignRightFilled className="h-4 w-4 text-gray-300" />,
    },
];

// Animation variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3, // delay between each item
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -80 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Services = () => {
  return (
    <div className="services-container bg-black text-white items-center justify-center mb-[50px] sm:mb-38">
      <div className="services-heading text-center !mb-12 !px-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl !mt-5 !mb-2">Our Services</h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 mt-2">
            Comprehensive technology solutions designed to secure, optimize, and
            transform your business
          </p>
        </motion.div>
      </div>

      <motion.div
        className="max-w-7xl !mx-auto grid grid-cols-1 md:grid-cols-2 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {items.map((item, i) => (
          <motion.div key={i} variants={itemVariants} className="">
            <BentoGridItem
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              className="bg-black border border-gray-800 p-6 rounded-xl !mx-5 hover:cursor-pointer"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Services;
