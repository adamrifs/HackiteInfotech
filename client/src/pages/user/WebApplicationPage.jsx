import React from "react";
import Img from "../../assets/web-app-img.jpg";
import {
  Code,
  Layout,
  Database,
  Server,
  Cpu,
  Cloud,
  Monitor,
  ShieldCheck,
  RefreshCw,
  Settings,
} from "lucide-react";

const WebApplicationPage = () => {
  return (
    <main className="min-h-screen bg-black !text-gray-100 !px-6 !py-10 md:!px-12 lg:!px-24">
      <h1 className="text-xl md:text-4xl lg:text-5xl font-bold leading-snug !pb-3 md:!pb-2 lg:!px-5 tracking-tight">
        Web Application Development
      </h1>

      {/* HERO */}
      <section className="max-w-7xl !mx-auto grid gap-10 lg:gap-16 lg:grid-cols-2 items-center">
        {/* Image first on mobile */}
        <div className="order-1 lg:order-2">
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
            <img
              src={Img}
              alt="web application development"
              className="w-full h-64 object-cover sm:h-80 md:h-96 opacity-90"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="order-2 lg:order-1 space-y-6">
          <p className="!text-neutral-400 text-sm md:text-sm leading-relaxed">
            At Hackite InfoTech, we specialize in building and maintaining
            robust web applications and platforms tailored to meet the unique
            needs of your business. Our team delivers full-stack solutions,
            including frontend development using HTML, CSS, JavaScript, React,
            Angular, and Vue, creating responsive and visually appealing
            interfaces. On the backend, we work with Node.js, Django, PHP,
            Laravel, and .NET to build scalable, secure, and high-performance
            server-side applications. We design and integrate databases such as
            MySQL, MongoDB, and PostgreSQL, ensuring smooth data management,
            while developing and connecting APIs through REST and GraphQL for
            seamless communication between systems and third-party services.
          </p>
          <p className="!text-neutral-400 text-sm md:text-sm leading-relaxed">
            In addition, we provide cloud hosting and deployment services on
            AWS, Azure, and GCP, ensuring your applications are reliable,
            scalable, and always available. We implement intuitive UI/UX designs
            to deliver seamless user experiences across all devices, while
            integrating robust security measures such as SSL certificates, data
            encryption, and secure authentication to protect your users and
            data. Our team also focuses on website performance optimization,
            including speed, scalability, and resource management. To ensure
            long-term reliability, we offer continuous maintenance, regular
            updates, bug fixing, and performance monitoring, so your
            applications remain efficient, secure, and aligned with your
            evolving business goals.
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
            Icon: Code,
            title: "Frontend Development",
            text: "Building interactive and responsive user interfaces using modern frameworks and technologies.",
          },
          {
            Icon: Server,
            title: "Backend Development",
            text: "Developing scalable server-side logic and applications using Node.js, Django, PHP, .NET, and more.",
          },
          {
            Icon: Database,
            title: "Database Design & Integration",
            text: "Designing, implementing, and integrating databases such as MySQL, PostgreSQL, and MongoDB.",
          },
          {
            Icon: Cpu,
            title: "API Development & Integration",
            text: "Creating RESTful and GraphQL APIs to enable smooth communication between services and platforms.",
          },
          {
            Icon: Cloud,
            title: "Cloud Hosting & Deployment",
            text: "Deploying applications securely on AWS, Azure, GCP with reliable cloud infrastructure.",
          },
          {
            Icon: Layout,
            title: "UI/UX Implementation",
            text: "Implementing intuitive and visually appealing designs to enhance user experience.",
          },
          {
            Icon: ShieldCheck,
            title: "Security Implementation",
            text: "Ensuring secure applications with SSL, encryption, authentication, and best practices.",
          },
          {
            Icon: Monitor,
            title: "Performance Optimization",
            text: "Optimizing speed, scalability, and overall performance of web applications.",
          },
          {
            Icon: RefreshCw,
            title: "Maintenance & Updates",
            text: "Providing continuous support, bug fixes, and updates to keep applications running smoothly.",
          },
        ].map((s, idx) => (
          <article
            key={idx}
            className="bg-gray-900 border border-gray-800 rounded-2xl !p-6 hover:border-sky-600 transition-all"
          >
            <s.Icon className="w-7 h-7 text-sky-500 !mb-3" />
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
};

export default WebApplicationPage;
