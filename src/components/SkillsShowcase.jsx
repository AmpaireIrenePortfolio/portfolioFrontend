import React from 'react';

export default function SkillsShowcase() {
  const skills = [
    { icon: '💻', title: 'Full-stack Development', desc: 'React, Node.js, MongoDB' },
    { icon: '🎨', title: 'UX Design', desc: 'User-centered design principles' },
    { icon: '⚙️', title: 'Engineering', desc: 'Mechanical systems & solutions' },
    { icon: '📈', title: 'Business Strategy', desc: 'Data-driven planning' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-brand-dark mb-12">What I Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="text-center p-6 rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gray-50"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-brand-main bg-opacity-10 flex items-center justify-center">
                <span className="text-3xl">{skill.icon}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-brand-dark">{skill.title}</h3>
              <p className="text-slate-600">{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}