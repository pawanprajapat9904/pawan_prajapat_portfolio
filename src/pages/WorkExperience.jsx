import React from "react";
import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const TimelineItemWork = ({ title, company, date, description }) => (
  <motion.div
    className="mb-10 ml-6 relative"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <span className="absolute -left-[38px] flex items-center justify-center w-6 h-6 bg-green-600 rounded-full ring-8 ring-gray-900">
      <Briefcase className="w-3 h-3 text-white" />
    </span>
    <h3 className="text-2xl font-semibold text-white mb-1">{title}</h3>
    <p className="text-lg font-medium text-green-400 mb-2">{company}</p>
    <time className="block mb-3 text-sm text-gray-400">{date}</time>
    <p className="text-gray-300 leading-relaxed">{description}</p>
  </motion.div>
);

export const WorkExperience = () => (
  <section className="bg-gray-900 text-gray-300   p-6 sm:p-10 md:p-16 ">
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center text-white mb-12 border-b border-gray-700 pb-3">
      Technical Experience
    </h2>

    <div className="relative border-l-4 border-green-700 pl-6 md:pl-10">
      <TimelineItemWork
        title="Full Stack Trainee"
        company=" LinuxWorld Informatics Pvt Ltd"
        date="Jan 2025 - May 2025"
        description="Built full-stack applications using Node.js, MongoDB, and frontend technologies. Designed RESTful APIs and utilized Git, Postman, and deployment tools for end-to-end project delivery."
      />
      <TimelineItemWork
        title="Cybersecurity Trainee "
        company="Redington"
        date="Feb 2025 - Mar 2025"
        description="Understood network security fundamentals, threat modeling, and malware defense. Conducted vulnerability assessments and basic ethical hacking simulations. "
      />
            <TimelineItemWork
        title="Java Development Intern "
        company=" OctaNet Services Pvt. Ltd"
        date="Jul 2024 - Aug 2024"
        description="Developed OOP-based Java applications with file handling, modular design, and core banking operations."
      />
            <TimelineItemWork
        title="C Programming Intern "
        company=" Simplilearn SkillUp "
        date="Jan 2024"
        description="Built C programs using loops, functions, memory handling, and basic algorithms with runtime optimizations."
      />
    </div>
  </section>
);
