import React, { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_kvk7bll",
      "template_3b9moyw",
      form.current,
      "M7-Ac5xoghwlWudW3"
    ).then(
      (result) => {
        console.log(result.text);
        alert("Message sent successfully!");
        e.target.reset(); // clear form after sending
      },
      (error) => {
        console.log(error.text);
        alert("Failed to send message. Please try again.");
      }
    );

  }

  return (
    <section className="!py-12 !px-6 flex flex-col !justify-center !items-center !mb-10 md:!mb-20">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="!mb-10 !px-10 text-center">
        <h1 className="text-4xl md:text-6xl !mb-2">Contact Us </h1>
        <p>Ready to secure your digital future? Let's talk.</p>
      </motion.div>
      <div className="!max-w-6xl !mx-auto !grid md:!grid-cols-2 !gap-10 !justify-center">
        <div className=" !p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold !mb-6">Send us a message</h2>
          <form className="!space-y-8" ref={form} onSubmit={sendEmail}>
            <div>
              <label className="block text-sm font-medium !mb-2">Name *</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full !px-4 !py-3 rounded-lg bg-neutral-800 border border-neutral-700 focus:ring-2 focus:ring-gray-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium !mb-2">Email *</label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full !px-4 !py-3 rounded-lg bg-neutral-800 border border-neutral-700 focus:ring-2 focus:ring-gray-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium !mb-2">
                Message *
              </label>
              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full !px-4 !py-3 rounded-lg bg-neutral-800 border border-neutral-700 focus:ring-2 focus:ring-gray-500 outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full !py-3 rounded-lg bg-gray-900 text-black font-semibold hover:bg-gray-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="!space-y-8">
          <div className=" !p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold !mb-6">Get in touch</h2>
            <div className="!space-y-4">
              <p>
                <span className="font-semibold">Email:</span> hackiteinfotech@gmail.com
              </p>
              <p>
                <span className="font-semibold">Phone/WhatsApp:</span> +91
                8129895005
              </p>

            </div>
          </div>

          <div className=" !p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold !mb-6">Why Choose Us?</h2>
            <ul className="!space-y-3">
              <li className="flex items-center gap-2">
                <span>✔</span> 24/7 Expert Support
              </li>
              <li className="flex items-center gap-2">
                <span>✔</span> Cutting-edge Solutions
              </li>
              <li className="flex items-center gap-2">
                <span>✔</span> Global Reach
              </li>
              <li className="flex items-center gap-2">
                <span>✔</span> Proven Track Record
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
