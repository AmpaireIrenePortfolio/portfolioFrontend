import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import About from './pages/About';
import Resume from './pages/Resume';

export default function App() {
  const [isResumeDropdownOpen, setIsResumeDropdownOpen] = useState(false);

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
            <div className="relative">
              <button 
                className="hover:text-brand-main transition flex items-center gap-1"
                onClick={() => setIsResumeDropdownOpen(!isResumeDropdownOpen)}
              >
                Resume
                <svg className={`w-4 h-4 transition-transform ${isResumeDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isResumeDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 bg-white text-brand-dark rounded shadow-lg overflow-hidden z-10">
                  <Link to="/resume#work-experience" className="block px-4 py-2 hover:bg-gray-100">Work Experience</Link>
                  <Link to="/resume#internship-volunteering" className="block px-4 py-2 hover:bg-gray-100">Internship & Volunteering</Link>
                  <Link to="/resume#education" className="block px-4 py-2 hover:bg-gray-100">Education</Link>
                  <Link to="/resume#accomplishments" className="block px-4 py-2 hover:bg-gray-100">Accomplishments</Link>
                </div>
              )}
            </div>
            <a href="/Ampaire_Irene_CV.pdf" className="bg-brand-main px-3 py-1 rounded hover:opacity-90 transition ml-2">
              Download CV
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