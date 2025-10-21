import React from "react";
import {
  ShieldCheck,
  Activity,
  Search,
  Lock,
  CloudLightning,
  Users,
  AlertCircle,
  Book,
  Cpu,
} from "lucide-react";
import Img from "../../assets/cybersecurity-img.png";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function CybersecurityPage() {
  return (
    <>
    <Navbar/>
      <main className="min-h-screen bg-black !text-gray-100 !px-6 !py-10 md:!px-12 lg:!px-24">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-snug !mt-12 !pb-3 md:!pb-2 md:!px-5 tracking-tight">
          Cybersecurity Solutions
        </h1>
        {/* HERO */}
        <section className="max-w-7xl !mx-auto grid gap-10 lg:gap-16 lg:grid-cols-2 items-center">
          {/* Image first on mobile */}
          <div className="order-1 lg:order-2">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
              <img
                src={Img}
                alt="cybersecurity-img"
                className="w-full h-64 object-cover sm:h-80 md:h-96 opacity-90"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="order-2 lg:order-1 space-y-6">
            {/* <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-snug text-white tracking-tight">
            Cybersecurity Solutions
          </h1> */}
            <p className="!text-neutral-400 text-sm md:text-sm leading-relaxed">
              At Hackite InfoTech, we provide comprehensive cybersecurity
              solutions designed to protect your business from the ever-evolving
              landscape of digital threats. Our services focus on securing your
              systems, networks, and data through a combination of advanced
              technologies and expert strategies. From conducting thorough
              security assessments, penetration testing, and vulnerability
              scanning to implementing firewalls, IDS/IPS systems, and endpoint
              protection, we ensure that every layer of your IT infrastructure is
              safeguarded. Our 24/7 Security Operations Center continuously
              monitors for potential threats, while our team performs threat
              analysis, incident detection, and rapid response to minimize risk
              and downtime. Beyond technology, we prepare your business for the
              unexpected with disaster recovery and backup planning, and we
              empower your employees through security awareness training to reduce
              human error vulnerabilities. In the event of a security incident,
              our forensic experts investigate and identify the root cause,
              providing actionable insights to prevent recurrence. By combining
              proactive defense, continuous monitoring, regulatory compliance, and
              employee empowerment, Hackite InfoTech ensures that your
              organization operates securely, efficiently, and with confidence.
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
              Icon: Search,
              title: "Security Assessments & VAPT",
              text: "Comprehensive vulnerability scanning and penetration testing to uncover weaknesses and prioritize fixes.",
            },
            {
              Icon: ShieldCheck,
              title: "Firewall, IDS/IPS & Endpoint",
              text: "Design, deployment and management of perimeter and endpoint defenses for continuous protection.",
            },
            {
              Icon: Activity,
              title: "SOC Monitoring",
              text: "24/7 monitoring, threat hunting and incident triage from our Security Operations Center.",
            },
            {
              Icon: AlertCircle,
              title: "Incident Response & Forensics",
              text: "Rapid containment, investigation and root cause analysis to reduce downtime and impact.",
            },
            {
              Icon: Lock,
              title: "Identity & Access Management",
              text: "MFA, role-based access and privileged account controls to secure identities.",
            },
            {
              Icon: Book,
              title: "Compliance & Data Privacy",
              text: "GDPR, ISO 27001, PCI DSS advisory and implementation support to meet regulatory needs.",
            },
            {
              Icon: CloudLightning,
              title: "Disaster Recovery & Backup",
              text: "Robust backup strategies and recovery playbooks to keep operations running.",
            },
            {
              Icon: Users,
              title: "Security Awareness Training",
              text: "Engaging training programs and phishing simulations to strengthen your human firewall.",
            },
            {
              Icon: Cpu,
              title: "Threat Analysis & Intelligence",
              text: "Actionable threat intelligence and proactive analysis to anticipate attacks.",
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
      <Footer/>
    </>
  );
}
