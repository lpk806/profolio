'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Apple,
  AppWindow,
  Box,
  Code,
  Coffee,
  Github,
  Layers,
  Linkedin,
  Menu,
  Server,
  Smartphone,
  X,
} from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a[href^="#"]')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleLinkClick);
    return () => document.removeEventListener('click', handleLinkClick);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#services', label: 'Services' },
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeInOut' },
    },
  };

  return (
    <>
      {/* Header */}
      <header className="bg-gray-900/70 backdrop-blur-lg shadow-lg sticky top-0 z-50">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold font-mono">
            <a href="#" className="gradient-text">
              Vincent Lau
            </a>
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-400 hover:text-teal-400 transition duration-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition duration-300"
            >
              Contact Me
            </a>
          </div>
          <div className="md:hidden">
            <button
              id="menu-btn"
              className="text-gray-400 hover:text-teal-400 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div id="mobile-menu" className="md:hidden px-6 pb-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-gray-400 hover:text-teal-400 transition duration-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="block bg-teal-500 text-white text-center px-4 py-2 rounded-lg hover:bg-teal-600 transition duration-300"
            >
              Contact Me
            </a>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <motion.section
          className="container mx-auto px-6 py-24 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-3xl mx-auto">
            <img
              src="https://placehold.co/128x128/1f2937/d1d5db?text=VL"
              alt="Vincent Lau's Avatar"
              className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-gray-700 shadow-lg"
            />
            <h1 className="text-4xl md:text-6xl font-bold mb-4 font-mono">
              Vincent Lau
            </h1>
            <p className="text-xl md:text-2xl font-medium gradient-text mb-6">
              Software Developer Focusing on Flutter
            </p>
            <p className="text-gray-400 max-w-xl mx-auto leading-relaxed">
              I am passionate about building smooth, efficient, and beautiful
              cross-platform applications. With extensive hands-on experience, I
              am dedicated to turning complex ideas into reality.
            </p>
          </div>
        </motion.section>

        {/* About Me Section */}
        <motion.section
          id="about"
          className="bg-gray-900 py-20"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4 font-mono uppercase tracking-wider">
              About Me
            </h2>
            <div className="w-20 h-1 bg-teal-500 mx-auto mb-8"></div>
            <p className="max-w-3xl mx-auto text-gray-400 leading-relaxed">
              As a developer with a passion for technology, I specialize in
              mobile app development using Flutter, while also possessing
              full-stack capabilities. I enjoy learning new technologies and
              applying them to solve real-world problems. I strive for
              excellence in both front-end user experience and back-end
              stability and performance.
            </p>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          id="skills"
          className="py-20"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-4 font-mono uppercase tracking-wider">
              Professional Skills
            </h2>
            <div className="w-20 h-1 bg-teal-500 mx-auto mb-12"></div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-4xl mx-auto">
              <div className="skill-card bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <Box className="w-12 h-12 text-teal-500 mb-4" />
                <h3 className="text-lg font-semibold font-mono">Dart</h3>
              </div>
              <div className="skill-card bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <Smartphone className="w-12 h-12 text-blue-500 mb-4" />
                <h3 className="text-lg font-semibold font-mono">Flutter</h3>
              </div>
              <div className="skill-card bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <Server className="w-12 h-12 text-green-500 mb-4" />
                <h3 className="text-lg font-semibold font-mono">Node.js</h3>
              </div>
              <div className="skill-card bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <Code className="w-12 h-12 text-yellow-500 mb-4" />
                <h3 className="text-lg font-semibold font-mono">Python</h3>
              </div>
              <div className="skill-card bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <Coffee className="w-12 h-12 text-orange-500 mb-4" />
                <h3 className="text-lg font-semibold font-mono">Java</h3>
              </div>
              <div className="skill-card bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <Apple className="w-12 h-12 text-gray-500 mb-4" />
                <h3 className="text-lg font-semibold font-mono">Swift</h3>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          id="projects"
          className="bg-gray-900 py-20"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-4 font-mono uppercase tracking-wider">
              My Projects
            </h2>
            <div className="w-20 h-1 bg-teal-500 mx-auto mb-12"></div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="project-card bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <img
                  src="https://placehold.co/600x400/1f2937/d1d5db?text=Project+1"
                  alt="Project 1"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 font-mono">
                    Project Title 1
                  </h3>
                  <p className="text-gray-400 mb-4">
                    A brief description of the project, its purpose, and the
                    technologies used.
                  </p>
                  <div className="flex space-x-2 mb-4">
                    <span className="bg-gray-700 text-teal-400 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                      Flutter
                    </span>
                    <span className="bg-gray-700 text-teal-400 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                      Firebase
                    </span>
                  </div>
                  <a href="#" className="text-teal-500 hover:underline">
                    View on GitHub &rarr;
                  </a>
                </div>
              </div>
              <div className="project-card bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <img
                  src="https://placehold.co/600x400/1f2937/d1d5db?text=Project+2"
                  alt="Project 2"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 font-mono">
                    Project Title 2
                  </h3>
                  <p className="text-gray-400 mb-4">
                    Another project showcasing different skills and
                    technologies.
                  </p>
                  <div className="flex space-x-2 mb-4">
                    <span className="bg-gray-700 text-teal-400 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                      Node.js
                    </span>
                    <span className="bg-gray-700 text-teal-400 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                      React
                    </span>
                    <span className="bg-gray-700 text-teal-400 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                      MongoDB
                    </span>
                  </div>
                  <a href="#" className="text-teal-500 hover:underline">
                    View Demo &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Services Section */}
        <motion.section
          id="services"
          className="py-20"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-4 font-mono uppercase tracking-wider">
              Services
            </h2>
            <div className="w-20 h-1 bg-teal-500 mx-auto mb-12"></div>
            <div className="flex flex-col md:flex-row gap-8 max-w-4xl mx-auto">
              <div className="bg-gray-800 border border-gray-700 rounded-lg p-8 flex-1 flex flex-col items-center text-center">
                <Layers className="w-16 h-16 text-blue-500 mb-4" />
                <h3 className="text-2xl font-semibold mb-2 font-mono">
                  Fullstack Development
                </h3>
                <p className="text-gray-400">
                  Delivering complete solutions from the front-end interface to
                  back-end servers and databases, ensuring product stability and
                  scalability.
                </p>
              </div>
              <div className="bg-gray-800 border border-gray-700 rounded-lg p-8 flex-1 flex flex-col items-center text-center">
                <AppWindow className="w-16 h-16 text-teal-500 mb-4" />
                <h3 className="text-2xl font-semibold mb-2 font-mono">
                  Web/Mobile App Development
                </h3>
                <p className="text-gray-400">
                  Focused on creating responsive websites and cross-platform
                  (iOS/Android) mobile applications that provide an excellent
                  user experience.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          id="contact"
          className="py-20"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              I am currently seeking new opportunities and welcome you to
              contact me at any time. Let's build something amazing together!
            </p>
            <a
              href="mailto:vincent.lau.dev@example.com"
              className="bg-teal-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-teal-600 transition duration-300 inline-block"
            >
              Send Email
            </a>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-6">
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <a
              href="#"
              aria-label="GitHub"
              className="text-gray-400 hover:text-white"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-white"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
          <p className="text-gray-500">
            &copy; 2024 Vincent Lau. All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
