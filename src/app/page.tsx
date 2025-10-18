'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#services', label: 'Services' },
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold">
            <a href="#">Vincent Lau</a>
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-text hover:opacity-70 transition-opacity duration-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-accent text-text px-5 py-2 rounded-full hover:bg-accent-dark transition-colors duration-300"
            >
              Contact Me
            </a>
          </div>
          <div className="md:hidden">
            <button
              id="menu-btn"
              className="text-text focus:outline-none"
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
          <div
            id="mobile-menu"
            className="md:hidden bg-background px-6 pb-4 space-y-2 absolute top-full left-0 w-full"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-text py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="block bg-accent text-text text-center px-4 py-2 rounded-full mt-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Me
            </a>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="pt-20">
        {/* Hero Section */}
        <motion.section
          className="container mx-auto px-6 pt-24 pb-12 text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-8xl font-bold mb-4 leading-tight">
              Vincent Lau
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold text-black/50 mb-8">
              Software Developer
            </h2>
            <p className="text-lg max-w-2xl leading-relaxed">
              I am passionate about building smooth, efficient, and beautiful
              cross-platform applications with a focus on Flutter. I am
              dedicated to turning complex ideas into reality.
            </p>
          </div>
        </motion.section>

        {/* About Me Section */}
        <motion.section
          id="about"
          className="container mx-auto px-6 py-20"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <h2 className="text-3xl font-bold md:col-span-1">About Me</h2>
            <div className="md:col-span-2">
              <p className="text-lg leading-relaxed text-black/70">
                As a developer with a passion for technology, I specialize in
                mobile app development using Flutter, while also possessing
                full-stack capabilities. I enjoy learning new technologies and
                applying them to solve real-world problems. I strive for
                excellence in both front-end user experience and back-end
                stability and performance.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Skills Marquee Section */}
        <motion.section
          id="skills"
          className="py-20"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="marquee">
            <div className="track">
              {[
                'Dart',
                'Flutter',
                'Node.js',
                'Python',
                'Java',
                'Swift',
                'React',
                'Next.js',
                'TypeScript',
                'Firebase',
              ]
                .concat([
                  'Dart',
                  'Flutter',
                  'Node.js',
                  'Python',
                  'Java',
                  'Swift',
                  'React',
                  'Next.js',
                  'TypeScript',
                  'Firebase',
                ])
                .map((skill, index) => (
                  <div
                    key={index}
                    className="text-4xl font-bold mx-8 text-black/20"
                  >
                    {skill}
                  </div>
                ))}
            </div>
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          id="projects"
          className="container mx-auto px-6 py-20"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <h2 className="text-3xl font-bold mb-12">My Projects</h2>
          <div className="flex flex-col">
            {[
              {
                title: 'Project Title 1',
                description: 'A brief description of the project...',
                tags: ['Flutter', 'Firebase'],
                img: 'https://placehold.co/600x400/e0dace/111111?text=P1',
              },
              {
                title: 'Project Title 2',
                description: 'Another project showcasing different skills...',
                tags: ['Node.js', 'React', 'MongoDB'],
                img: 'https://placehold.co/600x400/e0dace/111111?text=P2',
              },
            ].map((project, index) => (
              <a
                href="#"
                key={index}
                className="group border-t border-black/10 py-8 flex justify-between items-center transition-colors duration-300 hover:bg-accent/30"
              >
                <div className="flex items-center">
                  <div className="w-16 text-sm text-black/50 mr-8">
                    0{index + 1}
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold mb-1">{project.title}</h3>
                    <p className="text-black/50">{project.description}</p>
                  </div>
                </div>
                <div className="hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowRight className="w-10 h-10" />
                </div>
              </a>
            ))}
            <div className="border-t border-black/10"></div>
          </div>
        </motion.section>

        {/* Services Section */}
        <motion.section
          id="services"
          className="container mx-auto px-6 py-20"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <h2 className="text-3xl font-bold md:col-span-1">Services</h2>
            <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-accent/30 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-2">Fullstack Development</h3>
                <p className="text-black/70">
                  Delivering complete solutions from front-end to back-end,
                  ensuring product stability and scalability.
                </p>
              </div>
              <div className="bg-accent/30 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-2">
                  Web/Mobile App Development
                </h3>
                <p className="text-black/70">
                  Focused on creating responsive websites and cross-platform
                  mobile applications.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          id="contact"
          className="container mx-auto px-6 py-32 text-center"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-10 text-black/70">
            I am currently seeking new opportunities and welcome you to contact
            me at any time. Let's build something amazing together!
          </p>
          <a
            href="mailto:vincent.lau.dev@example.com"
            className="bg-accent text-text px-8 py-4 rounded-full hover:bg-accent-dark transition-colors duration-300 inline-block text-lg font-bold"
          >
            Send Email
          </a>
        </motion.section>
      </main>

      <footer className="container mx-auto px-6 py-8 flex justify-between items-center text-sm">
        <p>&copy; 2024 Vincent Lau. All Rights Reserved.</p>
        <div className="flex space-x-6">
          <a
            href="#"
            aria-label="GitHub"
            className="text-black/50 hover:text-black"
          >
            GitHub
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="text-black/50 hover:text-black"
          >
            LinkedIn
          </a>
        </div>
      </footer>
    </>
  );
}
