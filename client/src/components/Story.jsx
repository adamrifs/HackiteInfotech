import React from "react";
import "../css/Story.css";
import SpotlightCard from "../components/SpotlightCard";
import ProfileCard from "../components/ProfileCard";
import anoop from "../assets/avatar.jpg";
import liviya from "../assets/avatar2.jpg";
import sanin from "../assets/avatar3.jpg";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { BackgroundLines } from "@/components/ui/background-lines";
import { motion } from "framer-motion";

const Story = () => {
  const testimonials = [
    {
      quote: "Liviya Thankachan is the Founder & CEO (and Director) of HACKITE INFOTECH Pvt Ltd, a premier IT company specializing in hands-on cybersecurity training, ethical hacking services, and secure mobile application development. An accomplished researcher and ethical hacker, Liviya is deeply committed to strengthening digital security. She brings deep expertise in cyber threat analysis, penetration testing, and secure coding, informed by her extensive background at leading technology firms. Under her leadership, HACKITE INFOTECH empowers both individuals and organizations to effectively tackle modern digital threats. The company bridges the skills gap with immersive learning and a focus on robust, real-world defensive and offensive techniques. Her vision is to cultivate the next generation of cybersecurity professionals and foster innovation and resilience across the entire digital landscape",
      name: "Liviya Thankachan",
      // email: "hackiteceo@gmail.com",
      designation: "Founder & CEO",
      src: liviya,
    },
    {
      quote: "Specialist in digital marketing & brand growth                                                                   ",
      name: "Anoop KJ",
      designation: "Digital Marketing Head",
      src: anoop,
    },
    {
      quote: "Expert in technology strategy & product development                                                              ",
      name: "Sanin",
      designation: "Company Technical Officer ( CTO )",
      src: sanin,
    },
  ];

  return (
    <>
      <div className="story-container sm:!mb-20 !mb-20">
          <div className="story-box">
            {/* ========================= who we serve starts here ========================== */}
            <div className="who-we-serve">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              >
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
                  transition={{ duration: 0.9, ease: "easeOut", delay: 0.8 }}
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
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="sm:!mb-18 !mb-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
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
