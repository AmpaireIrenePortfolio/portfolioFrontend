import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import About from './pages/About';
import Resume from './pages/Resume';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-slate-800">
      <header className="bg-brand-dark text-white p-4 shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link to="/" className="font-bold text-lg md:text-xl hover:text-brand-main transition">
            Ampaire Irene
          </Link>
          <nav className="flex items-center gap-4 md:gap-6 text-sm md:text-base">
            <Link to="/" className="hover:text-brand-main transition">Home</Link>
            <Link to="/projects" className="hover:text-brand-main transition">Projects</Link>
            <Link to="/about" className="hover:text-brand-main transition">About</Link>
            <Link to="/contact" className="hover:text-brand-main transition">Contact</Link>
            
            {/* Simple Resume link without dropdown or anchor links */}
            <Link to="/resume" className="hover:text-brand-main transition">Resume</Link>

            <a 
              href="/portfolioFrontend/ampaire_irene_resume.pdf" 
              download="Ampaire_Irene_Resume.pdf"
              className="bg-brand-main text-white px-3 py-1 rounded hover:opacity-90 transition ml-2"
            >
              Download Resume
            </a>
          </nav>
        </div>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="text-center text-sm text-slate-500 p-6 border-t mt-12">
      <p>© {currentYear} Ampaire Irene. All rights reserved.</p>
    </footer>
  );
}