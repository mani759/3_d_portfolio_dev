import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

const projectData = [
  {
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=800",
    title: "Employee Management System",
    tags: ["Python", "Firestore", "Firebase Auth", "React.js"],
    link: "#",
    github: "#",
  },
  {
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
    title: "AI Portfolio",
    tags: ["React.js", "Tailwind CSS", "Framer Motion", "Three.js"],
    link: "#",
    github: "#",
  },
  {
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
    title: "Requirement Traceability System",
    tags: ["Node.js", "Express.js", "Firestore", "Python"],
    link: "#",
    github: "#",
  },
  {
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=800",
    title: "Heart Disease Expert System",
    tags: ["Python", "React.js", "Tailwind CSS", "AIML"],
    link: "#",
    github: "#",
  },
  {
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800",
    title: "StudySync",
    tags: ["HTML5", "CSS3", "JavaScript", "React"],
    link: "#",
    github: "#",
  },
  {
    image: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&q=80&w=800",
    title: "3D Portfolio",
    tags: ["Three.js", "React Three Fiber", "GSAP", "Tailwind CSS"],
    link: "#",
    github: "#",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="bg-[#05030B] py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto text-center mb-20">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-blue-500 font-mono tracking-[0.4em] uppercase text-[10px] mb-4"
        >
          Project Showcase
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-black text-white mb-8 uppercase tracking-tighter"
        >
          Selected Works<span className="text-blue-500">.</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projectData.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="group relative overflow-hidden rounded-[2rem] bg-[#111118] border border-white/10"
          >
            <div className="relative overflow-hidden aspect-[4/3] rounded-[1.5rem] m-2">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            <div className="p-8">
              <h3 className="text-2xl font-black text-white mb-4 tracking-tight uppercase">{project.title}</h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-[9px] uppercase tracking-widest font-mono px-3 py-1 bg-white/10 text-blue-300 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="Github Repository" className="p-3 bg-white/5 text-white rounded-xl hover:bg-blue-600 transition-all border border-white/10">
                  <FiGithub size={20} />
                </a>
                <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label="Live Demo" className="p-3 bg-white/5 text-white rounded-xl hover:bg-blue-600 transition-all border border-white/10">
                  <FiExternalLink size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
