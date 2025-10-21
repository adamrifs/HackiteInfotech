import React, { useState } from "react";
import { useRef } from "react";
import "../css/Home.css";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Story from "../components/Story";
import Aurora from "../components/Aurora";
import ShinyText from "../components/ShinyText";
import Feedback from "@/components/Feedback";
import avatar from "../assets/avatar.jpg";
import Contact from "@/components/Contact";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import InteractiveGridBackground from "@/components/ui/interactive-grid-background";
import SmokeyCursor from "@/components/ui/smokey-cursor"
import WhyUs from "@/components/WhyUs";

const Home = () => {
    return (
        <>
            <SmokeyCursor
                splatRadius={0.1}
                splatForce={3000}
                densityDissipation={8}
                velocityDissipation={5}
                colorUpdateSpeed={5}
            />
            {/* <InteractiveGridBackground
                gridSize={40}
                gridColor="#d1d5db"
                darkGridColor="#1f2937"
                effectColor="rgba(0,255,255,0.5)"
                darkEffectColor="rgba(255,0,255,0.5)"
                trailLength={5}
                glow
                glowRadius={30}
                showFade={false}
                fadeIntensity={25}
                className="!fixed z-[-10]" /> */}
            <div className="home-container">
                <Navbar />
                <Aurora
                    colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
                    blend={0.5}
                    amplitude={1.5}
                    speed={0.5}
                />

                <div className="heading">
                    <ShinyText
                        text="Innovating the Future,
                        Securing the Present"
                        disabled={false}
                        speed={3}
                        className="heading-h1"
                    />
                    {/* <p>
                        Hackite Infotech delivers cutting-edge cybersecurity, IT consulting,
                        software,
                        <br /> and AI solutions to help businesses thrive securely in the
                        digital-first era.
                    </p> */}
                    <p>We Craft Cybersecurity, IT, Software, and AI solutions that power growth and protect your digital future.</p>
                    {/* <button className="glow-btn">
                        <span>SEE IN ACTION →</span>
                    </button> */}
                </div>
            </div>
            <div>
                <WhyUs/>
            </div>
            <div className="flex items-center justify-center !mb-[150px] md:!mb-28">
                <Services />
            </div>
            <div>
                <Story />
            </div>

            <div className="!mt-32 !px-10 !pl-12">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center justify-center text-center">
                    <h1 className="text-4xl md:text-5xl !mb-4">
                        What Our Clients Say
                    </h1>
                    <p className="text-lg text-gray-600 mb-12">
                        Real feedback from satisfied clients worldwide
                    </p>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl !mx-auto !mt-14 items-center justify-center">
                    <Feedback
                        image={avatar}
                        name="Rohit Sharma"
                        role="CTO – FinEdge Solutions"
                        content="Hackite Infotech's penetration testing revealed critical vulnerabilities we never knew existed. Their team not only secured our systems but also trained our staff to prevent future risks."
                    />
                    <Feedback
                        image={avatar}
                        name="Ananya Verma"
                        role="Head of IT – TechNova"
                        content="The professionalism and expertise were evident from day one. We feel much more confident in the security of our systems after their thorough analysis."
                    />
                    <Feedback
                        image={avatar}
                        name="Karan Mehta"
                        role="Founder – CloudWorks"
                        content="The team provided clear reports and practical solutions. We saw immediate improvements in our infrastructure’s resilience."
                    />
                </div>
            </div>

            <div className="!mt-10">
                <Contact />
            </div>
            <div>
                <Footer />
            </div>

        </>
    );
};

export default Home;
