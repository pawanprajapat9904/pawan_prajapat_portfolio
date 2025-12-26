import React from 'react';
import { User, Briefcase, Brain, Code, Heart, Layers, Database, MapPin, Coffee, Zap } from 'lucide-react';

// Custom styles for this page, consistent with the theme
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

      /* Keyframe Animations */
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }

      @keyframes slideInUp {
        from { 
          opacity: 0; 
          transform: translateY(20px); 
        }
        to { 
          opacity: 1; 
          transform: translateY(0); 
        }
      }
      
      .animate-fade-in {
        animation: fadeIn 1s ease-out forwards;
      }
      
      .animate-slide-in-up {
        opacity: 0;
        animation: slideInUp 0.8s ease-out forwards;
      }
    `}
  </style>
);

// Re-usable component for a single skill
const SkillPill = ({ name }) => (
  <div className="bg-gray-800 text-gray-300 py-1.5 px-4 rounded-full text-sm font-medium border border-gray-700">
    {name}
  </div>
);

// Re-usable component for a section title
const SectionTitle = ({ icon, title }) => (
  <div className="flex items-center mb-6">
    {icon}
    <h2 className="text-3xl font-bold text-white font-lora ml-3">{title}</h2>
  </div>
);

// Re-usable component for info with an icon
const InfoItem = ({ icon, text }) => (
  <div className="flex items-center text-gray-400">
    {icon}
    <span className="ml-3">{text}</span>
  </div>
);


const AboutMe = () => (
  <>
    <CustomStyles />
    <div className="bg-black text-gray-300 font-inter animate-fade-in p-8  shadow-xl ">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">

        <div className="lg:col-span-1 animate-slide-in-up" style={{ animationDelay: '100ms' }}>
          <div className="bg-gray-900 mt-15 border border-gray-800 rounded-lg shadow-lg p-8 sticky top-28">
            <img
              src="https://media.licdn.com/dms/image/v2/D5603AQGF8IDnY6YgjA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1704905954115?e=1767225600&v=beta&t=9nGTA2RGDx50DA5znwkmUY_m94KmyPgd6ZZfeJcbQGc"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/pawan.jpg";
              }}
              alt="Pawan Prajapt"
              className="w-40 h-40 rounded-full border-4 border-gray-700 shadow-lg mx-auto -mt-24"
            />
            <div className="text-center mt-6">
              <h1 className="text-3xl font-bold text-white font-lora">
                Pawan Prajapt
              </h1>
              <p className="text-xl text-gray-400 mt-2 mb-6">
                Full Stack Developer
              </p>
            </div>
            <hr className="border-gray-700 my-6" />
            <div className="space-y-4">
              <InfoItem
                icon={<MapPin className="w-5 h-5 text-gray-500" />}
                text="Jaipur, Rajasthan"
              />
              <InfoItem
                icon={<Zap className="w-5 h-5 text-gray-500" />}
                text="Open to new opportunities"
              />
              <InfoItem
                icon={<Coffee className="w-5 h-5 text-gray-500" />}
                text="Fueled by coffee & curiosity"
              />
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">

          <section className="mb-12 animate-slide-in-up" style={{ animationDelay: '300ms' }}>
            <SectionTitle
              icon={<User className="w-7 h-7 text-gray-500" />}
              title="About Me"
            />
            <p className="text-lg leading-relaxed mb-4">
              Hello! I'm a passionate developer focused on building modern, full-stack web applications. My journey into tech was driven by a deep curiosity for how things work and a desire to create tangible solutions that make a difference.
            </p>
          </section>

          <section className="mb-12 animate-slide-in-up" style={{ animationDelay: '500ms' }}>
            <SectionTitle
              icon={<Heart className="w-7 h-7 text-gray-500" />}
              title="My Philosophy"
            />
            <p className="text-lg leading-relaxed">
              I believe in the power of clean code and intuitive design. My goal is to write software that is not only functional and efficient but also scalable and a pleasure to use. I'm committed to continuous learning and staying ahead of the curve in this ever-evolving industry.
            </p>
          </section>

          <section className="mb-12 animate-slide-in-up" style={{ animationDelay: '700ms' }}>
            <SectionTitle
              icon={<Layers className="w-7 h-7 text-gray-500" />}
              title="Core Competencies"
            />
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-3">
                  <SkillPill name="React" />
                  <SkillPill name="JavaScript (ES6+)" />
                  <SkillPill name="Tailwind CSS" />
                  <SkillPill name="HTML5" />
                  <SkillPill name="CSS3" />
                  <SkillPill name="Redux / Context API" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Backend</h3>
                <div className="flex flex-wrap gap-3">
                  <SkillPill name="Node.js" />
                  <SkillPill name="Express.js" />
                  <SkillPill name="REST APIs" />
                  <SkillPill name="JWT Authentication" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Database & Tools</h3>
                <div className="flex flex-wrap gap-3">
                  <SkillPill name="MongoDB" />
                  <SkillPill name="Mongoose" />
                  <SkillPill name="Git & GitHub" />
                  <SkillPill name="Postman" />
                  <SkillPill name="Agile Methodology" />
                </div>
              </div>
            </div>
          </section>

          <section className="animate-slide-in-up" style={{ animationDelay: '900ms' }}>
            <SectionTitle
              icon={<Brain className="w-7 h-7 text-gray-500" />}
              title="Always Learning"
            />
            <p className="text-lg leading-relaxed">
              I'm a firm believer that learning never stops.
            </p>
          </section>

        </div>
      </div>
    </div>
  </>
);

export default AboutMe;

