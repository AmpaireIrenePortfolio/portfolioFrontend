import React, { useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    id: 'onims',
    title: 'ONIMS — One Network Information Management System',
    role: 'Full-stack Developer',
    summary: 'Digitized HR, Procurement, and Finance workflows with dashboards and automation.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
    impact: [
      'Leave processing reduced from 5–7 days → 24–48 hours',
      'Procurement cycles shortened by 40%',
      'Staff onboarding streamlined from 2 weeks → 3–5 days'
    ],
    tech: 'React, Node.js, MongoDB, Tailwind, JWT',
    github: 'https://github.com/ampaireirene/onims'
  },
  {
    id: 'quizzy',
    title: 'Quizzy — Quiz Management Web App',
    role: 'Backend Developer',
    summary: 'Web app for creating and managing quizzes with secure authentication.',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800',
    tech: 'HTML, CSS, JS, Node.js, Express, MongoDB',
    impact: [],
    github: 'https://github.com/ampaireirene/quizzy'
  }
];

export default function Projects() {
  useEffect(() => {
    // Handle hash navigation to scroll to the correct project
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-4">Featured Projects</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Explore my portfolio of impactful solutions that drive real results
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} id={project.id} className="scroll-mt-20">
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}