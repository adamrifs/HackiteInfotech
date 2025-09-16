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
        title: "Scalable IT & Cloud Solutions",
        description: "From network optimization to AWS, Azure, and GCP cloud migration, we build reliable IT infrastructures that grow with your business.",
        icon: <IconArrowWaveRightUp className="h-4 w-4 text-gray-300" />,
    },
    {
        title: "Smart Software & AI Innovation",
        description: "We develop custom apps, SaaS platforms, and AI-powered automation to drive efficiency, insights, and digital transformation.",
        icon: <IconBoxAlignTopLeft className="h-4 w-4 text-gray-300" />,
    },
    {
        title: "Training & Workforce Empowerment",
        description: "Through bootcamps, ethical hacking workshops, and internship programs, we equip individuals and teams with real-world tech skills",
        icon: <IconBoxAlignRightFilled className="h-4 w-4 text-gray-300" />,
    },
];

const Services = () => {
    return (
        <div className="services-container bg-black text-white items-center justify-center !mb-[500px] sm:!mb-38">
            <div className="services-heading text-center !mb-12 !px-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewport={{ once: true }}>
                    <h1 className="text-4xl !mb-2">Our Services</h1>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewport={{ once: true }}>
                    <p className="text-gray-400 mt-2">
                        Comprehensive technology solutions designed to secure, optimize, and
                        transform your business
                    </p>
                </motion.div>

            </div>

            {/* Force 2x2 grid */}
            <BentoGrid className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-1 gap-6">
                {items.map((item, i) => (
                    <BentoGridItem
                        key={i}
                        title={item.title}
                        description={item.description}
                        header={item.header}
                        icon={item.icon}
                        className="bg-black border border-gray-800 p-6 rounded-xl  transition"
                    />
                ))}
            </BentoGrid>
        </div>
    );
};

export default Services;
