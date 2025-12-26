import React from "react";
import { GraduationCap } from "lucide-react";

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

      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .animate-fade-in-up {
        animation: fadeInUp 0.8s ease-out forwards;
      }

      .timeline-line {
        position: absolute;
        left: 0.75rem;
        top: 0;
        bottom: 0;
        width: 2px;
        background: linear-gradient(to bottom, #6366f1, #312e81);
      }

      .timeline-dot {
        box-shadow: 0 0 12px rgba(99, 102, 241, 0.8);
      }
    `}
  </style>
);

const TimelineItem = ({ title, institution, date, description, delay }) => (
  <div
    className="relative pl-10 mb-12 animate-fade-in-up"
    style={{ animationDelay: `${delay}ms` }}
  >
    <span className="absolute -left-[25px] flex items-center justify-center w-8 h-8 bg-indigo-600 rounded-full ring-8 ring-gray-900 timeline-dot">
      <GraduationCap className="w-4 h-4 text-white" />
    </span>
    <h3 className="text-2xl font-semibold text-white mb-1 font-lora">{title}</h3>
    <p className="text-lg font-medium text-indigo-400 mb-2 font-inter">
      {institution}
    </p>
    <time className="block mb-3 text-sm text-gray-500 font-inter">{date}</time>
    <p className="text-gray-400 leading-relaxed font-inter">{description}</p>
  </div>
);

const Education = () => (
  <div className="min-h-screen bg-[#0b0b0b] py-10 px-5">
    <CustomStyles />
    <div className="bg-[#0b0b0b] text-gray-300 mt-5 mb-5 p-10 rounded-2xl shadow-2xl border border-gray-800 max-w-6xl mx-auto font-inter relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/10 via-black to-indigo-950/10 pointer-events-none" />

      <h2 className="text-4xl font-bold text-center text-white mb-14 font-lora relative z-10">
        Education
      </h2>

      <div className="relative border-l-4 border-transparent pl-6 z-10">
        <div className="timeline-line"></div>

        <TimelineItem
          title="B.Tech in Computer Science & Engineering"
          institution="Arya Institute of Engineering Technology & Management , Jaipur, Raj."
          date="2022 - 2026"
          description="Focused on advanced algorithms, distributed systems, and machine learning. Completed a thesis on scalable web architectures."
          delay={100}
        />
        <TimelineItem
          title="12th Standard"
          institution="Government Senior Secondary School, Jaipur"
          date="2020-2022"
          description="Specialized in Science stream with Physics, Chemistry, and Mathematics."
          delay={300}
        />
        <TimelineItem
          title="10th Standard"
          institution="Government Senior Secondary School, Morija, Jaipur"
          date="2015-2020"
          description="Completed with a strong foundation in core subjects and extracurricular activities."
          delay={500}
        />
      </div>
    </div>
  </div>
);

export default Education;
