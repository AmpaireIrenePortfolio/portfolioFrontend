import React, { useState } from 'react';

export default function ProjectCard({ project, index }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 animate-scale-in"
      style={{ animationDelay: `${index * 0.1}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-56 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark to-transparent opacity-70"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="font-bold text-xl text-white mb-1">{project.title}</h3>
          <p className="text-sm text-brand-accent font-semibold">Role: {project.role}</p>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-slate-600 mb-4 leading-relaxed">{project.summary}</p>
        
        {project.impact.length > 0 && (
          <ul className="list-none space-y-2 mb-4">
            {project.impact.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                <span className="text-brand-main mt-1">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.split(', ').map((tech, idx) => (
            <span key={idx} className="px-3 py-1 bg-gray-100 text-slate-700 rounded-full text-xs font-medium">
              {tech}
            </span>
          ))}
        </div>
        
        {project.github && (
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-brand-main hover:text-brand-dark font-semibold transition"
          >
            <span>⚡</span>
            <span>View on GitHub</span>
          </a>
        )}
      </div>
    </div>
  );
}