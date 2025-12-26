import React from "react";
import { Mail, Send, Github, Linkedin } from "lucide-react";

export const Contact = () => (
  <div className="relative bg-gradient-to-b from-black via-gray-900 to-black text-gray-300 py-16 px-6 md:px-12 overflow-hidden">
    {/* Glowing Background Overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-yellow-900/10 via-transparent to-yellow-900/10 blur-2xl"></div>

    <div className="max-w-5xl mx-auto relative z-10">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-200 font-lora tracking-wide mb-4">
          Get In Touch
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto font-inter text-lg">
          Have a project in mind or just want to say hi? Let’s create something remarkable together.
        </p>
      </div>

      {/* Contact Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-10">
        {/* Left Info */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold text-yellow-400 font-lora mb-6">Contact Information</h3>
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-yellow-400" />
                <span className="text-gray-300 text-lg">pawan.prajapat9904@gmail.com</span>
              </div>
              <div className="flex items-center gap-4">
                <Send className="w-6 h-6 text-yellow-400" />
                <span className="text-gray-300 text-lg">Jaipur, Rajasthan, India</span>
              </div>
            </div>
          </div>

          <div className="flex space-x-6 mt-8">
            <a
              href="https://github.com/pawanprajapat9904"
              className="text-gray-400 hover:text-yellow-400 transition-all duration-300 hover:scale-110"
            >
              <Github className="w-8 h-8" />
            </a>
            <a
              href="https://www.linkedin.com/in/pawan-prajapat-/"
              className="text-gray-400 hover:text-yellow-400 transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-8 h-8" />
            </a>
          </div>
        </div>

        {/* Right Form */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="bg-gray-900/40 border border-gray-800 rounded-2xl p-8 backdrop-blur-md shadow-lg hover:shadow-yellow-900/20 transition-all duration-300"
        >
          <div className="mb-6">
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-yellow-400">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-500"
              placeholder="Pawan Prajapat"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-yellow-400">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-500"
              placeholder="Pawan@Gmail.com"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-yellow-400">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-500"
              placeholder="Your message..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-yellow-500 to-amber-400 text-black font-semibold py-3 px-6 rounded-lg shadow-lg hover:from-yellow-400 hover:to-yellow-300 transition-all duration-300 transform hover:scale-105"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </div>
);
