import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FiLayout,
  FiServer,
  FiZap,
  FiCpu,
  FiBriefcase,
  FiArrowRight,
  FiLayers,
  FiActivity,
} from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const gridRef = useRef(null);

  const services = [
    {
      icon: <FiLayout />,
      title: "Frontend Development",
      desc: "Building responsive and modern React applications with premium UI, animations and performance focused architecture.",
      tech: ["React", "Tailwind", "GSAP"],
    },
    {
      icon: <FiCpu />,
      title: "AI Powered Apps",
      desc: "Integrating machine learning concepts and intelligent features into practical web applications.",
      tech: ["Python", "Machine Learning", "LLMs"],
    },
    {
      icon: <FiServer />,
      title: "Backend Systems",
      desc: "Authentication, Firebase, APIs and scalable backend architecture for modern applications.",
      tech: ["Firebase", "REST API", "Node.js"],
    },
    {
      icon: <FiLayers />,
      title: "Full Stack Projects",
      desc: "Developing complete applications from frontend interfaces to backend integration.",
      tech: ["React", "Firebase", "Python"],
    },
    {
      icon: <FiActivity />,
      title: "UI Animations",
      desc: "Creating smooth interactions using GSAP and Framer Motion for engaging user experiences.",
      tech: ["GSAP", "Motion", "UX"],
    },
    {
      icon: <FiZap />,
      title: "Performance",
      desc: "Optimizing loading speed, responsiveness and maintainability for production-ready websites.",
      tech: ["SEO", "Optimization", "Responsive"],
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.fromTo(
        headerRef.current.children,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
            invalidateOnRefresh: true,
          },
        },
      );

      // Cards Animation
      gsap.fromTo(
        ".service-card",
        {
          opacity: 0,
          y: 70,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
            invalidateOnRefresh: true,
          },
        },
      );

      ScrollTrigger.refresh();
    }, containerRef);

    return () => ctx.revert();
  }, []);
  return (
    <section
      id="services"
      ref={containerRef}
      className="relative py-24 px-6 md:px-12 lg:px-24 bg-[#05030B] text-white overflow-hidden scroll-mt-24"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Mesh */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
        linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)
      `,
            backgroundSize: "70px 70px",
          }}
        />

        {/* Glow */}
        <div className="absolute top-20 left-10 w-[420px] h-[420px] rounded-full bg-cyan-500/10 blur-[150px]" />

        <div className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full bg-blue-600/10 blur-[180px]" />

        {/* Radial Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent,rgba(2,6,23,.96))]" />
      </div>

      {/* Header */}
      <div
        ref={headerRef}
        className=" services-title max-w-7xl mx-auto text-center mb-24 relative z-10"
      >
        <div className="inline-block px-3 py-1 border border-blue-500/30 bg-blue-500/5 rounded-sm mb-4">
          <p className="text-blue-400 font-mono text-[10px] uppercase tracking-[0.5em]">
            SERVICES MODULE
          </p>
        </div>
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-6">
          My Services<span className="text-blue-500">.</span>
        </h2>
        <div className="w-24 h-[1px] bg-blue-500/40 mx-auto mb-8"></div>
        <p className="max-w-3xl mx-auto text-gray-500 font-light text-base leading-relaxed">
          Building responsive web applications, AI-powered solutions, and modern
          user experiences while continuously expanding my engineering skills.
        </p>
      </div>

      {/* Main Services Grid */}
      <div
        ref={gridRef}
        className="services-grid max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 relative z-10"
      >
        {services.map((service) => (
          <div
            key={service.title}
            className="service-card group relative overflow-hidden rounded-3xl border border-white/10 bg-[#111118] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/30 hover:shadow-[0_20px_60px_rgba(34,211,238,.08)]"
          >
            {/* Top Glow */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

            {/* Background Glow */}
            <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-cyan-500/5 blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

            {/* Icon */}
            <div className="relative z-10 mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-500/10 text-cyan-300 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
              {service.icon}
            </div>

            {/* Title */}
            <h3 className="relative z-10 text-2xl font-bold tracking-tight text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">
              {service.title}
            </h3>

            {/* Description */}
            <p className="relative z-10 text-gray-400 leading-7 mb-8">
              {service.desc}
            </p>

            {/* Divider */}
            <div className="relative z-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"></div>

            {/* Tech Stack */}
            <div className="relative z-10 flex flex-wrap gap-2">
              {service.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full border border-cyan-400/20 bg-cyan-500/10 text-cyan-300 text-[11px] uppercase tracking-wider font-mono transition-all duration-300 group-hover:border-cyan-400/40"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Bottom Accent */}
            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-cyan-400 group-hover:w-full transition-all duration-500"></div>
          </div>
        ))}
      </div>

      {/* Featured Experience Card (Sidebar) */}

      {/* Grid Lines Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/[0.03] z-100"></div>
      <div className="absolute top-0 right-1/2 w-[1px] h-full bg-white/[0.03] z-100"></div>
    </section>
  );
}
