import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { User, Briefcase, GraduationCap, Code, Rss, Send, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', page: '/', icon: <User className="w-4 h-4" /> },
    { name: 'About', page: '/about', icon: <User className="w-4 h-4" /> },
    { name: 'Experience', page: '/work', icon: <Briefcase className="w-4 h-4" /> },
    { name: 'Projects', page: '/projects', icon: <Code className="w-4 h-4" /> },
    { name: 'Education', page: '/education', icon: <GraduationCap className="w-4 h-4" /> },
    { name: 'Blog', page: '/blog', icon: <Rss className="w-4 h-4" /> },
    { name: 'Contact', page: '/contact', icon: <Send className="w-4 h-4" /> },
  ];

  const NavLinkItem = ({ page, name, icon, onClick }) => (
    <NavLink
      to={page}
      onClick={onClick}
      className={({ isActive }) =>
        `flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative
        ${isActive
          ? 'text-white after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-indigo-500 after:to-purple-600'
          : 'text-gray-300 hover:text-white hover:after:w-full after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-indigo-500 after:to-purple-600 after:transition-all after:duration-300'
        }`
      }
    >
      {icon}
      <span>{name}</span>
    </NavLink>
  );

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b border-gray-700/30
        ${scrolling
            ? 'bg-black/60 backdrop-blur-xl shadow-[0_0_30px_rgba(138,43,226,0.3)]'
            : 'bg-black backdrop-blur-sm'
          }`}
      >
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-0 w-[150%] h-[150%] bg-gradient-to-r from-indigo-600 via-purple-700 to-pink-500 opacity-10 animate-[spin_15s_linear_infinite] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg shadow-lg shadow-indigo-500/50 animate-pulse"></div>
              <span className="text-2xl font-bold text-white tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                Pawan
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <NavLinkItem key={item.page} {...item} onClick={() => setIsMenuOpen(false)} />
              ))}
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700/60 transition-all"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-black/80 backdrop-blur-xl border-t border-gray-700/50 animate-fadeIn">
            <div className="px-4 pt-3 pb-4 space-y-2">
              {navItems.map((item) => (
                <NavLinkItem key={item.page} {...item} onClick={() => setIsMenuOpen(false)} />
              ))}
            </div>
          </div>
        )}
      </nav>

      <div className="h-16"></div>
    </>
  );
};

export default Navbar;
