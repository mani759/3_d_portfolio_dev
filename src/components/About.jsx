import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import { FiAward, FiBookOpen, FiCode, FiDownload } from "react-icons/fi";
import {
  SiReact,
  SiTailwindcss,
  SiFirebase,
  SiPython,
  SiNodedotjs,
  SiGit,
  SiVite,
  SiJavascript,
} from "react-icons/si";

export default function About() {
  const aboutRef = useRef(null);
  const Aboutdata = [
    {
      icon: <FiCode size={20} />,
      title: "Engineering Mindset",
      subtitle: "System Thinker",
      desc: "I enjoy understanding how systems work beneath the surface. Whether it's AI models, web architecture, or user interactions, I focus on building solutions with purpose rather than simply writing code.",
    },
    {
      icon: <FiBookOpen size={20} />,
      title: "Collaboration Module",
      subtitle: "Human First",
      desc: "I believe the best software is built through communication, empathy, and understanding user needs—not just writing code. I enjoy collaborating with teams and adapting to different perspectives.",
    },
    {
      icon: <FiAward size={20} />,
      title: "Learning Protocol",
      subtitle: "Adaptive",
      desc: "Technology evolves constantly, so I treat learning as a continuous process rather than a destination. Every project is an opportunity to improve and explore new ideas.",
    },
  ];

  const Tools = [
    { icon: <SiReact size={24} />, title: "React js" },
    { icon: <SiJavascript size={24} />, title: "JavaScript" },
    { icon: <SiTailwindcss size={24} />, title: "Tailwind CSS" },
    { icon: <SiPython size={24} />, title: "Python" },
    { icon: <SiFirebase size={24} />, title: "Firebase" },
    { icon: <SiNodedotjs size={24} />, title: "Node.js" },
    { icon: <SiGit size={24} />, title: "Git" },
  ];
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-reveal", {
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 75%",
          invalidateOnRefresh: true,
          once: false,
          onEnter: () => {
            gsap.fromTo(
              ".about-reveal",
              {
                opacity: 0,
                y: 40,
              },
              {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.15,
              },
            );
          },
        },
      });
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      id="about "
      ref={aboutRef}
      className="relative w-full min-h-screen bg-[#05030B] overflow-hidden flex items-center justify-center font-sans tracking-wide py-20 px-6 md:px-12"
    >
      {/* --- BG EFFECTS --- */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      ></div>
      <div
        className="absolute inset-0 z-[15] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 30% 50%, transparent 20%, rgba(0,0,0,0.9) 100%)",
        }}
      ></div>

      {/* --- STATIC FRAME IMAGE (LEFT 45%) --- */}
      <div
        className="absolute inset-y-0 left-0 w-[45%] z-10 pointer-events-none overflow-hidden hidden lg:block"
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)",
          maskImage:
            "linear-gradient(to right, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)",
        }}
      >
        <img
          src="/images/ezgif-frame-191.jpg"
          alt="About Profile"
          className="w-full h-full object-cover opacity-50 grayscale"
        />
      </div>

      {/* --- CONTENT (RIGHT 55%) --- */}
      <div className="relative z-[50] w-full lg:w-[80%] flex flex-col md:flex-row items-center justify-end">
        {/* Visual Gap for the face mask area */}
        <div className="hidden lg:block w-[35%] h-full"></div>

        {/* Main Content Pane */}
        <div className="w-full lg:w-[65%] flex flex-col space-y-10 pointer-events-auto bg-black/40 backdrop-blur-sm p-8 md:p-12 border border-white/5 rounded-2xl">
          {/* Header */}
          <div className=" about-reveal space-y-2">
            <p className="text-blue-500 font-mono text-[10px] uppercase tracking-[0.5em]">
              SYSTEM INFO
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tighter uppercase">
              About Me<span className="text-blue-500">.</span>
            </h2>
          </div>

          {/* Bio Paragraph */}
          <div className=" about-reveal robotic-section">
            <p className="text-gray-400 text-sm md:text-md lg:text-xl font-light leading-relaxed max-w-2xl">
              I'm an{" "}
              <span className="text-white font-medium">
                AI Full-Stack Developer
              </span>{" "}
              and <span className="text-white font-medium">AIML student</span>{" "}
              who enjoys building immersive web experiences. I learn by building
              real-world projects and continuously experimenting with modern
              technologies.
            </p>
          </div>

          {/* Cards Grid */}
          <div className=" about-reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Aboutdata.map((item) => (
              <div
                key={item.title}
                className="group p-6 min-h-[250px] bg-white/5 border border-white/10 hover:border-[#FFD43B]/40 transition-all duration-300 rounded-xl"
              >
                <div className="text-blue-500 mb-4 opacity-70 group-hover:opacity-100 transition-opacity">
                  {item.icon}
                </div>
                <h4 className="text-white text-xs font-bold uppercase tracking-widest">
                  {item.title}
                </h4>

                <p className="text-[#FFD43B] text-[10px] uppercase tracking-[0.25em] mt-2 mb-3 font-mono">
                  {item.subtitle}
                </p>

                <p className="text-gray-400 text-[11px] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Tech Dock */}
          <div className="space-y-4 about-reveal">
            <h4 className="text-[10px] font-mono text-gray-500 tracking-[0.3em] uppercase">
              Core Tech Stack
            </h4>
            <div className="flex flex-wrap gap-5">
              {Tools.map((tool) => (
                <div key={tool.title} className="group relative">
                  {/* Tooltip */}
                  <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 bg-blue-600 text-white text-[9px] font-mono py-1.5 px-3 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-[999]">
                    {tool.title}
                  </span>

                  {/* Card */}
                  <div className="relative overflow-hidden p-4 rounded-xl bg-black/50 border border-white/5 hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.25)] transition-all duration-300 flex items-center justify-center cursor-help">
                    {/* Scan Effect */}
                    <div className="absolute inset-0 -translate-x-[150%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-blue-400/20 to-transparent group-hover:translate-x-[180%] transition-transform duration-700 pointer-events-none" />

                    {/* Icon */}
                    <div className="relative text-gray-500 transition-all duration-300 group-hover:text-blue-400 group-hover:scale-110 group-hover:rotate-6">
                      {tool.icon}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="pt-6 about-reveal">
            <a
              href="/resume.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden inline-flex items-center gap-4 px-10 py-4 rounded-full bg-blue-600 border border-blue-500/30 text-white font-bold text-xs uppercase tracking-[0.25em] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.45)]"
            >
              <div className="absolute inset-0 -translate-x-[150%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-[180%] transition-transform duration-700 pointer-events-none" />
              <span className="relative z-10 transition-transform duration-300 group-hover:tracking-[0.35em]">
                Download Resume
              </span>
              <FiDownload
                size={16}
                className="relative z-10 transition-all duration-300 group-hover:translate-y-1 group-hover:scale-110"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
