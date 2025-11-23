import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SkillsShowcase from '../components/SkillsShowcase';

import { fetchProjects, submitContactForm } from '../services/api';

// ... other components

function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(rgba(15, 23, 36, 0.85), rgba(15, 23, 36, 0.85)), url(https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className={`max-w-6xl mx-auto px-6 text-center text-white ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Ampaire Irene
        </h1>
        <p className="text-xl md:text-2xl mb-4 text-brand-accent">
          Mechanical Engineer · Full-stack Developer · UX Designer · Entrepreneur
        </p>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed text-gray-200">
          I design systems and products that create meaningful community change — scalable backend systems, UX-first web apps, and hands-on engineering solutions that keep people moving.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a 
            href="https://github.com/Irene-Ampaire" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-brand-dark px-8 py-4 rounded-lg text-lg font-semibold hover:scale-105 transition-transform shadow-lg flex items-center gap-2"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/irene-ampaire-863198176/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-brand-dark px-8 py-4 rounded-lg text-lg font-semibold hover:scale-105 transition-transform shadow-lg flex items-center gap-2"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-8 text-center">About Me</h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-slate-700 mb-8 leading-relaxed">
            I am a results-driven Mechanical Engineer with a strong background in technical operations, equipment management, and field engineering. Having graduated with Second Class Honours (Upper Division) in Mechanical and Manufacturing Engineering from Kyambogo University, I combine practical experience with ongoing training in software development, agile methodologies, and systems design to enhance my problem-solving skills.
          </p>
          <p className="text-lg text-slate-700 mb-8 leading-relaxed">
            My career highlights include significantly improving operational efficiency and safety at Uganda Railways Corporation as a Carriage and Wagon Examiner, where I implemented process improvements that increased inspection throughput and minimized unscheduled repairs. I possess extensive experience in inventory optimization, parts management, and warehouse process improvements across various engineering environments.
          </p>
          <p className="text-lg text-slate-700 mb-8 leading-relaxed">
            Passionate about innovation, I have developed full-stack web applications and led projects that create scalable solutions for organizational management and automation, blending mechanical expertise with digital technology to deliver impactful results.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-blue-100 flex-shrink-0">
                <span className="text-xl text-blue-600">✉</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-brand-dark mb-1">Email</h3>
                <a href="mailto:ampaireirene7@gmail.com" className="text-brand-main hover:underline">
                  ampaireirene7@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-green-100 flex-shrink-0">
                <span className="text-xl text-green-600">📱</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-brand-dark mb-1">Phone</h3>
                <p className="text-brand-main">+256 770 819418</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-purple-100 flex-shrink-0">
                <span className="text-xl text-purple-600">⚡</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-brand-dark mb-1">GitHub</h3>
                <a href="https://github.com/ampaireirene" target="_blank" rel="noopener noreferrer" className="text-brand-main hover:underline">
                  github.com/ampaireirene
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-blue-100 flex-shrink-0">
                <span className="text-xl text-blue-600">in</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-brand-dark mb-1">LinkedIn</h3>
                <a href="https://linkedin.com/in/ampaire-irene" target="_blank" rel="noopener noreferrer" className="text-brand-main hover:underline">
                  linkedin.com/in/ampaire-irene
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function JourneySection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-8 text-center">Explore My Professional Journey</h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-slate-700 mb-8 leading-relaxed">
            Discover a dedicated and results-driven Mechanical Engineer with a robust foundation in railway mechanical systems and advanced digital engineering. My career is distinguished by hands-on operational excellence at Uganda Railways Corporation, where process optimization and innovative inspection methods enhanced safety and efficiency. Complementing this practical expertise is a growing proficiency in full-stack software development and agile project management, enabling a unique fusion of mechanical engineering and modern digital solutions. Each role I've embraced—from technical operations and teaching to software apprenticeships underscores a commitment to technological advancement and impactful system design, shaping a future-forward engineering career grounded in both tradition and innovation.
          </p>
          <div className="text-center">
            <Link to="/resume" className="inline-block bg-brand-main text-white px-8 py-3 rounded-lg text-lg font-semibold hover:opacity-90 transition">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}


function ProjectsPreview() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProjects = async () => {
      try {
        // We only need the first 2 for the preview
        const data = await fetchProjects(); 
        setProjects(data.slice(0, 2));
      } catch (err) {
        console.error("Failed to fetch projects for preview:", err);
      } finally {
        setLoading(false);
      }
    };

    getProjects();
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-8 text-center">CHECK OUT SOME OF MY PROJECTS</h2>
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={project._id || index} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <Link 
                    to={`/projects#${project.id || `project-${index}`}`}
                    className="text-white font-bold text-xl hover:text-brand-accent transition"
                  >
                    {project.title}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="text-center mt-8">
          <Link to="/projects" className="inline-block bg-brand-main text-white px-8 py-3 rounded-lg text-lg font-semibold hover:opacity-90 transition">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}


function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
   const [status, setStatus] = useState(''); // 'success', 'error', or ''


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  
  const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus(''); // Reset status message

  try {
    // Use the same service function as the Contact page
    await submitContactForm(formData);
      
    // If successful, show success message and clear form
    setStatus('success');
    setFormData({ name: '', email: '', message: '' }); // Clear form
  } catch (error) {
    // If an error is thrown, show it
    console.error('Form submission error:', error);
    setStatus('error');
    alert(`Oops! Something went wrong. ${error.message}`);
  }
};

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-8 text-center">GET IN TOUCH</h2>
        <p className="text-lg text-slate-600 text-center mb-12 max-w-3xl mx-auto">
          Want to reach out? Feel free to use this form, or email me directly and I'll be happy to get back in touch soon as I can. Be sure to include how I may be of help or why you would like to connect.
        </p>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold text-brand-dark mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-brand-main">📱</span>
                <p>Phone: +256 770819 418</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-brand-main">✉</span>
                <p>Email: ampaireirene7@gmail.com</p>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-brand-dark mb-4">Connect on Social Media</h3>
              <div className="flex gap-4">
                <a 
                  href="https://www.linkedin.com/in/irene-ampaire-863198176/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center hover:bg-blue-200 transition"
                >
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a 
                  href="https://twitter.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center hover:bg-blue-200 transition"
                >
                  <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a 
                  href="http://www.youtube.com/@ampaireirene8277" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center hover:bg-red-200 transition"
                >
                  <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {status === 'success' && <p className="text-green-600 mb-4">Thank you! Your message has been sent.</p>}
              {status === 'error' && <p className="text-red-600 mb-4">Oops! Something went wrong. Please try again.</p>}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-brand-dark mb-1">Name*</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-main focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-brand-dark mb-1">Email*</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email Address"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-main focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-brand-dark mb-1">Message*</label>
                <textarea 
                  id="message" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Your message here..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-main focus:border-transparent"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="bg-brand-main text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <JourneySection />
      <ProjectsPreview />
      <SkillsShowcase />
      <ContactSection />
    </>
  );
}