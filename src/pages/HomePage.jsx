import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Mail, Linkedin, Github, Download } from "lucide-react";
import resumeFile from "../assets/Pawan_Prajapat_Resume.pdf";

// 🧠 Mathematical Dynamic Background
const FuturisticMathBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles = Array.from({ length: 100 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: 1.5 + Math.random() * 2,
      a: Math.random() * Math.PI * 2,
      s: 0.4 + Math.random() * 0.6,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const t = Date.now() * 0.001;

      for (let p of particles) {
        p.x += Math.cos(p.a + Math.sin(t)) * p.s;
        p.y += Math.sin(p.a + Math.cos(t)) * p.s;
        p.a += 0.008;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        const hue = (t * 60 + p.x / 4) % 360;
        ctx.fillStyle = `hsla(${hue}, 90%, 60%, 0.9)`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();

        // Connect lines between nearby points
        for (let q of particles) {
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.strokeStyle = `hsla(${hue}, 90%, 70%, ${1 - dist / 120})`;
            ctx.lineWidth = 0.3;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
      style={{
        background:
          "radial-gradient(circle at center, #05070d 0%, #010203 100%)",
      }}
    />
  );
};

// 🪄 Styles
const FuturisticStyles = () => (
  <style>
    {`
      @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700&family=Inter:wght@300;400;600&display=swap');

      * {
        box-sizing: border-box;
      }

      html, body {
        margin: 0;
        padding: 0;
        height: 100%;
        background: transparent;
        font-family: 'Inter', sans-serif;
        color: #e4e7eb;
        overflow-x: hidden;
      }

      .main-container {
        position: relative;
        z-index: 1;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 2rem;
        text-align: center;
        backdrop-filter: blur(4px);
      }

      .profile-img {
        width: 170px;
        height: 170px;
        border-radius: 50%;
        border: 2px solid rgba(0, 255, 255, 0.5);
        box-shadow: 0 0 25px rgba(0, 220, 255, 0.3);
        object-fit: cover;
        transition: all 0.4s ease;
      }

      .profile-img:hover {
        transform: scale(1.08);
        box-shadow: 0 0 40px rgba(0, 255, 255, 0.5);
      }

      .name-title {
        font-family: 'Orbitron', sans-serif;
        font-size: 3rem;
        margin-top: 1.2rem;
        letter-spacing: 2px;
        color: #eaf6ff;
        text-shadow: 0 0 10px rgba(0, 220, 255, 0.3);
      }

      .subtitle {
        font-size: 1.2rem;
        color: #00e0ff;
        letter-spacing: 3px;
        margin-bottom: 1rem;
        font-family: 'Orbitron', sans-serif;
      }

      .about-text {
        color: #c9d1d9;
        font-size: 1rem;
        max-width: 700px;
        margin: 1rem auto 2.5rem;
        line-height: 1.8;
        opacity: 0.9;
      }

      .button-group a {
        display: inline-block;
        margin: 0.5rem 0.8rem;
        padding: 0.9rem 2rem;
        border-radius: 50px;
        text-decoration: none;
        font-weight: 600;
        border: 1px solid rgba(0, 220, 255, 0.3);
        background: rgba(0, 220, 255, 0.06);
        color: #eaf6ff;
        transition: all 0.4s ease;
      }

      .button-group a:hover {
        background: linear-gradient(90deg, #00c6ff, #0072ff);
        color: white;
        transform: translateY(-2px);
        box-shadow: 0 0 25px rgba(0, 220, 255, 0.4);
      }

      .social-links {
        margin-top: 2.5rem;
        display: flex;
        justify-content: center;
        gap: 2rem;
      }

      .social-links a {
        color: #94a3b8;
        transition: transform 0.4s ease, color 0.4s ease;
      }

      .social-links a:hover {
        color: #00e0ff;
        transform: scale(1.2);
        filter: drop-shadow(0 0 10px rgba(0, 220, 255, 0.5));
      }

      footer {
        margin-top: 3rem;
        font-size: 0.85rem;
        color: #888;
        opacity: 0.7;
      }
    `}
  </style>
);

export const HomePage = () => (
  <>
    <FuturisticStyles />
    <FuturisticMathBackground />
    <div className="main-container">
      <img
        src="https://media.licdn.com/dms/image/v2/D5603AQGF8IDnY6YgjA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1704905954115?e=1767225600&v=beta&t=9nGTA2RGDx50DA5znwkmUY_m94KmyPgd6ZZfeJcbQGc"
        onError={(e) => {
          e.target.onerror = null; 
          e.target.src = "/pawan.jpg";
        }}
        alt="Pawan Prajapt"
        className="profile-img"
      />

      <h1 className="name-title">Pawan Prajapt</h1>
      <h2 className="subtitle">Full Stack Developer</h2>

      <p className="about-text">
        Creating high-performance web systems that merge elegance, AI, and automation —
        designed to stand strong in the digital universe.
      </p>

      <div className="button-group">
        <Link to="/projects">Projects</Link>
        <a href={resumeFile} download="Pawan_Prajapt_Resume.pdf">
          <Download className="inline-block w-5 h-5 mr-2" />Resume
        </a>
        <Link to="/contact">Contact</Link>
      </div>

      <div className="social-links">
        <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer"><Github className="w-7 h-7" /></a>
        <a href="https://www.linkedin.com/in/pawan-prajapat-/" target="_blank" rel="noopener noreferrer"><Linkedin className="w-7 h-7" /></a>
        <a href="mailto:pawan.prajapat9904@gmail.com"><Mail className="w-7 h-7" /></a>
      </div>

      <footer>© 2025 - Pawan Prajapt</footer>
    </div>
  </>
);
