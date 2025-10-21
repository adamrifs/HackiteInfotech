import React from 'react'
import Img from "../../assets/mobile-app-img.jpg"
import { Smartphone, Code, Layout, Server, Cpu, Cloud, Monitor, ShieldCheck, RefreshCw, Settings } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const MobileAppPage = () => {
  return (
    <>
    <Navbar/>
    <main className="min-h-screen bg-black !text-gray-100 !px-6 !py-10 md:!px-12 lg:!px-24">
      <h1 className="text-2xl !mt-12 md:text-4xl lg:text-5xl font-bold leading-snug !pb-3 md:!pb-2 lg:!px-5 tracking-tight">
        Mobile App Development
      </h1>

      {/* HERO */}
      <section className="max-w-7xl !mx-auto grid gap-10 lg:gap-16 lg:grid-cols-2 items-center">
        {/* Image first on mobile */}
        <div className="order-1 lg:order-2">
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
            <img
              src={Img}
              alt="mobile app development"
              className="w-full h-64 object-cover sm:h-80 md:h-96 opacity-90"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="order-2 lg:order-1 space-y-6">
          <p className="!text-neutral-400 text-sm md:text-sm leading-relaxed">
            At Hackite InfoTech, we deliver end-to-end mobile app solutions for both Android and iOS platforms. We develop native apps using Java and Kotlin for Android and Swift for iOS, as well as cross-platform apps with Flutter, React Native, and Ionic to provide consistent experiences across devices. Our team ensures that mobile interfaces are intuitive and visually appealing with high-quality UI/UX design.
          </p>

          <p className="!text-neutral-400 text-sm md:text-sm leading-relaxed">
            We integrate backend services and APIs to enable seamless data connectivity, push notifications, in-app purchases, and secure authentication. Every app undergoes thorough testing and debugging across devices and OS versions to guarantee performance, responsiveness, and optimal battery usage. Once ready, we assist in publishing and managing apps on Google Play Store and Apple App Store. We also provide ongoing maintenance, version upgrades, and bug fixes to ensure your mobile applications remain fast, secure, and up-to-date.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section
        id="services"
        className="max-w-7xl !mx-auto !mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {[
          { Icon: Smartphone, title: "Mobile Solutions", text: "Custom apps for Android and iOS tailored to your business needs." },
          { Icon: Code, title: "Native App Development", text: "Java/Kotlin for Android and Swift for iOS for high-performance native apps." },
          { Icon: RefreshCw, title: "Cross-Platform Development", text: "Build apps with Flutter, React Native, or Ionic for seamless experiences across devices." },
          { Icon: Layout, title: "UI/UX Design", text: "Designing intuitive and visually appealing mobile interfaces." },
          { Icon: Server, title: "API & Backend Integration", text: "Connecting apps to backend services and APIs for dynamic functionality." },
          { Icon: ShieldCheck, title: "Push Notifications & Security", text: "Implementing secure authentication, push notifications, and in-app purchases." },
          { Icon: Monitor, title: "Testing & Debugging", text: "Comprehensive testing across devices and OS versions to ensure stability." },
          { Icon: Cpu, title: "Performance Optimization", text: "Enhancing speed, responsiveness, and battery efficiency of your apps." },
          { Icon: Cloud, title: "Publishing & Maintenance", text: "Deploy apps on Play Store/App Store with ongoing updates, bug fixes, and version management." }
        ].map((s, idx) => (
          <article
            key={idx}
            className="bg-gray-900 border border-gray-800 rounded-2xl !p-6 hover:border-sky-600 transition-all"
          >
            <s.Icon className="w-7 h-7 text-sky-500 !mb-3" />
            <h3 className="font-semibold text-lg !mb-2 text-white">{s.title}</h3>
            <p className="text-sm !text-neutral-400 leading-relaxed">{s.text}</p>
          </article>
        ))}
      </section>
    </main>
    <Footer/>
    </>
  )
}

export default MobileAppPage
