import React from "react";
import "../css/Story.css";
import SpotlightCard from "../components/SpotlightCard";
import ProfileCard from "../components/ProfileCard";
import anoop from "../assets/avatar.jpg";
import liviya from "../assets/avatar2.jpg";
import sanin from '../assets/avatar3.jpg'
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { BackgroundLines } from "@/components/ui/background-lines";
import { motion } from "framer-motion";

const Story = () => {
  const testimonials = [
    {
      quote: "Visionary leader driving innovation",
      name: "Liviya Thankachan",
      email:"hackiteceo@gmail.com",
      designation: "Founder & CEO",
      src: liviya,
    },
    {
      quote: "Specialist in digital marketing & brand growth",
      name: "Anoop KJ",
      designation: "Digital Marketing Head",
      src: anoop,
    },
    {
      quote: "Expert in technology strategy & product development",
      name: "Sanin",
      designation: "Company Technical Officer ( CTO )",
      src: sanin,
    },
  ];

  return (
    <>
      <div className="story-container sm:!mb-20 !mb-90">
        <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
          <div className="story-box">
            <div className="story-heading !px-4 text-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                viewport={{ once: true }}>
                <h1>The Journey So Far.</h1>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                viewport={{ once: true }}>
                <p>
                  Hackite Infotech was founded with a simple belief: technology
                  should empower, not endanger. In today's rapidly evolving
                  digital landscape, businesses face unprecedented challenges in
                  securing their data, optimizing their operations, and staying
                  competitive.
                </p>
              </motion.div>
            </div>

            <div className="story-card">
              <motion.div
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.2 }}>
                <SpotlightCard
                  className="custom-spotlight-card"
                  spotlightColor="rgba(0, 229, 255, 0.2)"
                >
                  <h2>🎯 Our Mission</h2>
                  <p>
                    To provide innovative and secure technology solutions that
                    enable businesses to thrive in a digital-first world.
                  </p>
                </SpotlightCard>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: true, amount: 0.2 }}>
                <SpotlightCard
                  className="custom-spotlight-card"
                  spotlightColor="rgba(0, 229, 255, 0.2)"
                >
                  <h2>🌟 Our Vision</h2>
                  <p>
                    To be recognized globally as a trusted leader in
                    cybersecurity, software, and AI-driven digital transformation.
                  </p>
                </SpotlightCard>
              </motion.div>
            </div>

            {/* ========================= who we serve starts here ========================== */}
            <div className="who-we-serve">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                viewport={{ once: true }}>
                <h1>Who We Serve</h1>
              </motion.div>

              <div className="who-we-serve-box">
                <motion.div
                  className="wws-card"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <SpotlightCard
                    className="custom-spotlight-card"
                    spotlightColor="rgba(0, 229, 255, 0.2)"
                  >
                    <h2>Businesses & Enterprises</h2>
                  </SpotlightCard>
                </motion.div>

                <motion.div
                  className="wws-card"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <SpotlightCard
                    className="custom-spotlight-card"
                    spotlightColor="rgba(0, 229, 255, 0.2)"
                  >
                    <h2>Tech-Savvy Entrepreneurs</h2>
                  </SpotlightCard>
                </motion.div>

                <motion.div
                  className="wws-card"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <SpotlightCard
                    className="custom-spotlight-card"
                    spotlightColor="rgba(0, 229, 255, 0.2)"
                  >
                    <h2>Educational & Training Seekers</h2>
                  </SpotlightCard>
                </motion.div>

                <motion.div
                  className="wws-card"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.9, ease: "easeOut",delay:0.8 }}
                  viewport={{ once: true }}
                >
                  <SpotlightCard
                    className="custom-spotlight-card"
                    spotlightColor="rgba(0, 229, 255, 0.2)"
                  >
                    <h2>Global Clients</h2>
                  </SpotlightCard>
                </motion.div>
              </div>
            </div>
          </div>
        </BackgroundLines>
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="sm:!mb-18 !mb-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}>
            <h1 className="text-4xl md:text-6xl">Our Team</h1>
          </motion.div>
        </div>

        <div className="">
          <AnimatedTestimonials testimonials={testimonials} />
        </div>
      </div>
    </>
  );
};

export default Story;
