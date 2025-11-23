import React from 'react';
import Timeline from '../components/Timeline';
import myPhoto from '../assets/irene.jpg';

export default function About() {
  const values = [
    { icon: 'lightbulb', text: 'Innovative · Solution-oriented · Empathetic' },
    { icon: 'users', text: 'Community-focused · Data-driven planning' }
  ];

  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-4">About Me</h1>
          <p className="text-lg text-slate-600">Building solutions that make a difference</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white shadow-lg rounded-xl p-8">
            <div className="w-full h-96 mb-6 rounded-lg overflow-hidden">
              <img 
               
                  src={myPhoto}
                  alt="My Portrait"
                  className="w-full h-full object-cover object-top"


              />
            </div>
            <p className="text-lg text-slate-700 leading-relaxed">
              I'm a solutions-driven mechanical engineer and full-stack developer with a UX-first mindset and entrepreneurial drive. I build systems that deliver measurable results and make communities happier.
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white shadow-lg rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-brand-dark mb-4">Values</h3>
              <div className="space-y-4">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className={`w-6 h-6 rounded-full bg-brand-main bg-opacity-20 flex items-center justify-center flex-shrink-0`}>
                      <span className="text-brand-main text-xs">✓</span>
                    </div>
                    <p className="text-slate-700">{value.text}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white shadow-lg rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-brand-dark mb-4">Career Highlights</h3>
              <Timeline />
            </div>
            
            <div className="bg-white shadow-lg rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-brand-dark mb-4">Connect</h3>
              <div className="flex gap-4">
                <a href="https://github.com/ampaireirene" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-lg flex items-center justify-center bg-slate-100 hover:bg-slate-200 transition">
                  <span className="text-xl">⚡</span>
                </a>
                <a href="https://linkedin.com/in/ampaire-irene" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-lg flex items-center justify-center bg-blue-100 hover:bg-blue-200 transition">
                  <span className="text-xl">in</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}