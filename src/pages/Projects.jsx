import React from 'react';
import { Github, Code, Layers } from 'lucide-react';

const CustomStyles = () => (
  <style>
    {`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&family=Lora:wght@400;600;700&display=swap');
      
      .font-lora {
        font-family: 'Lora', serif;
      }
      .font-inter {
        font-family: 'Inter', sans-serif;
      }

      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      @keyframes slideInUp {
        from { opacity: 0; transform: translateY(30px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .animate-fade-in {
        animation: fadeIn 1.2s ease-out forwards;
      }
      .animate-slide-in-up {
        opacity: 0;
        animation: slideInUp 1s ease-out forwards;
      }
    `}
  </style>
);

const ProjectCard = ({ title, description, imgSrc, tags, liveUrl, githubUrl }) => (
  <div className="bg-gray-900 border border-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-indigo-600/40 animate-slide-in-up">
    <img src={imgSrc} alt={title} className="w-full h-48 object-cover opacity-90 hover:opacity-100 transition" />
    <div className="p-6">
      <h3 className="text-2xl font-semibold text-white mb-3 font-lora">{title}</h3>
      <p className="text-gray-400 mb-4 font-inter leading-relaxed h-20 overflow-y-auto">{description}</p>
      <div className="mb-4 flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-indigo-700/30 text-indigo-200 text-xs font-medium px-3 py-1 rounded-full border border-indigo-700/50"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex justify-between items-center">
        <a href={liveUrl} className="text-indigo-400 hover:text-indigo-200 font-medium transition-all duration-300">
          Live Demo
        </a>
        <a href={githubUrl} className="text-gray-400 hover:text-white transition-all duration-300">
          <Github className="w-6 h-6" />
        </a>
      </div>
    </div>
  </div>
);

const SectionTitle = ({ icon, title }) => (
  <div className="flex items-center mb-8">
    {icon}
    <h2 className="text-3xl font-bold text-white font-lora ml-3">{title}</h2>
  </div>
);

const Projects = () => {
  const basicProjects = [
    {
      title: "Youtube Video Wall",
      description: "A responsive video wall displaying YouTube same videos in multiple displays.",
      imgSrc: "data:image/jpeg;base64,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",
      tags: ["React", "Express.js", "Node.js"],
      liveUrl: " https://yt-video-wall.vercel.app/",
      githubUrl: "https://github.com/pawanprajapat9904/yt-video-wall",
    },
    {
      title: "To-Do List",
      description: "To-Do List application with user authentication, task management, and MongoDB storage.",
      imgSrc: "todolist.png",
      tags: ["MongoDB","React", "Express.js", "Node.js", "API"],
      liveUrl: "https://to-do-list-ten-liard-36.vercel.app/",
      githubUrl: "https://github.com/pawanprajapat9904/To-Do-List",
    },
  ];

  const mediumProjects = [
    {
      title: "Encryption-Decryption Text",
      description: "A web app that allows users to encrypt and decrypt text using various algorithms for secure communication.",
      imgSrc: "en_dc.png",
      tags: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://project-root-wine.vercel.app/",
      githubUrl: "https://github.com/pawanprajapat9904/project-root",
    },
    {
      title: "School/College Management System",
      description: "A role-based College Management System for streamlined administration, academic oversight, and student access.",
      imgSrc: "https://placehold.co/600x400/312E81/FFFFFF?text=Chat+App",
      tags: ["Java"],
      liveUrl: "https://github.com/pawanprajapat9904/College-Management-System-Java",
      githubUrl: "https://github.com/pawanprajapat9904/College-Management-System-Java",
    },
  ];

  const majorProjects = [
    {
      title: "Zynethra",
      description: `Zynethra is a global IT transformation partner delivering scalable, innovative digital solutions driven by a "user-first" T.R.U.S.T. framework.`,
      imgSrc: "zynethra.png",
      tags: ["React", "Node.js", "MongoDB"],
      liveUrl: "https://www.zynethra.site/",
      githubUrl: "https://zynethra.vercel.app/",
    },
    {
      title: "AI Internship Portal",
      description: "An AI-driven platform that automates internship allocation, project management, and certification.",
      imgSrc: "https://placehold.co/600x400/3730A3/FFFFFF?text=AI+Internship",
      tags: ["React", "Node.js", "AI", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <>
      <CustomStyles />
      <div className="bg-black text-gray-300 font-inter p-10  shadow-xl animate-fade-in ">
        <div className="max-w-7xl mx-auto">

          <div className="flex items-center justify-center mb-12">
            <Code className="w-8 h-8 text-indigo-500 mr-3" />
            <h1 className="text-4xl font-bold text-white font-lora">My Projects</h1>
          </div>

          <section className="mb-16 animate-slide-in-up" style={{ animationDelay: '300ms' }}>
            <SectionTitle
              icon={<Layers className="w-6 h-6 text-indigo-500" />}
              title="Basic Projects"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {basicProjects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </section>

          <section className="mb-16 animate-slide-in-up" style={{ animationDelay: '600ms' }}>
            <SectionTitle
              icon={<Layers className="w-6 h-6 text-indigo-500" />}
              title="Medium Projects"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  ">
              {mediumProjects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </section>


          <section className="animate-slide-in-up" style={{ animationDelay: '900ms' }}>
            <SectionTitle
              icon={<Layers className="w-6 h-6 text-indigo-500" />}
              title="Major Projects"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {majorProjects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </section>

        </div>
      </div>
    </>
  );
};

export default Projects;
