import React, { createContext, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Calendar, Zap, Moon } from "lucide-react";
import { motion } from "framer-motion";


const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dark"
  );

  useEffect(() => {
    document.documentElement.classList.remove("dark", "neon");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme(prev => (prev === "dark" ? "neon" : "dark"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);


const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&family=DM+Serif+Display&display=swap');

    body {
      background: #000 !important;
      color: var(--text);
      font-family: 'Inter', sans-serif;
      transition: color 0.6s ease;
    }

    .dark {
      --text: #e5e7eb;
      --card: rgba(255,255,255,0.05);
      --accent: #38bdf8;
      --glow: none;
    }

    .neon {
      --text: #e0f2fe;
      --card: rgba(0,255,255,0.12);
      --accent: #22d3ee;
      --glow: 0 0 35px rgba(34,211,238,0.6);
    }

    .glass {
      backdrop-filter: blur(18px);
      background: var(--card);
      box-shadow: var(--glow);
      border: 1px solid rgba(255,255,255,0.08);
    }
  `}</style>
);


const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.05 }}
      className={`fixed top-6 right-6 z-50 flex items-center gap-2
        px-5 py-3 rounded-full backdrop-blur-xl border transition-all
        ${
          theme === "neon"
            ? "text-cyan-300 border-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.6)]"
            : "text-gray-300 border-gray-700"
        }`}
    >
      {theme === "neon" ? <Zap size={18} /> : <Moon size={18} />}
      {theme === "neon" ? "Neon" : "Dark"}
    </motion.button>
  );
};

const BlogCard = ({ title, excerpt, date, image, tags }) => (
  <motion.div
    whileHover={{ y: -12, rotateY: 6 }}
    transition={{ type: "spring", stiffness: 200 }}
    className="glass rounded-3xl overflow-hidden transform-gpu"
  >
    <div className="relative h-56 overflow-hidden">
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover scale-105 hover:scale-125 transition-all duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
    </div>

    <div className="p-7">
      <time className="flex items-center text-xs text-cyan-400 mb-3">
        <Calendar className="w-4 h-4 mr-2" />
        {date}
      </time>

      <h3 className="font-['DM_Serif_Display'] text-3xl mb-3 text-white">
        {title}
      </h3>

      <p className="text-gray-400 text-sm mb-5 line-clamp-3">
        {excerpt}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map(tag => (
          <span
            key={tag}
            className="px-3 py-1 text-[11px] rounded-full
              bg-cyan-500/10 text-cyan-300 border border-cyan-400/20"
          >
            {tag}
          </span>
        ))}
      </div>

      <Link
        to="#"
        className="inline-flex items-center gap-2 text-sm font-semibold
        text-white bg-gradient-to-r from-cyan-500 to-purple-600
        px-5 py-3 rounded-full hover:scale-105 transition"
      >
        Read Article <ArrowUpRight size={16} />
      </Link>
    </div>
  </motion.div>
);


export const Blog = () => {
  const posts = [
    {
      title: "Why MERN is the Future of Web Development",
      excerpt:
        "Single language stack, blazing fast UI, scalable APIs — MERN dominates modern development.",
      date: "Oct 20, 2025",
      image: "https://placehold.co/600x400/020617/22d3ee?text=MERN",
      tags: ["MERN", "Full Stack", "JavaScript"],
    },
    {
      title: "Advanced React Hooks Architecture",
      excerpt:
        "Master custom hooks, composition patterns, and scalable state design.",
      date: "Sep 15, 2025",
      image: "https://placehold.co/600x400/020617/a855f7?text=React",
      tags: ["React", "Hooks", "Frontend"],
    },
    {
      title: "Node.js Performance Engineering",
      excerpt:
        "Caching, clustering & async strategies powering millions of requests.",
      date: "Aug 28, 2025",
      image: "https://placehold.co/600x400/020617/38bdf8?text=Node",
      tags: ["Node.js", "Backend", "Performance"],
    },
  ];

  return (
    <section className="relative min-h-screen bg-black py-28">
      <div className="text-center mb-24 px-6">
        <h2 className="font-['DM_Serif_Display'] text-7xl text-white mb-6">
          Developer’s Journal
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Clean code, deep thinking & future-ready engineering.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
        {posts.map((post, i) => (
          <BlogCard key={i} {...post} />
        ))}
      </div>
    </section>
  );
};


export default function App() {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <ThemeToggle />
      <Blog />
    </ThemeProvider>
  );
}
