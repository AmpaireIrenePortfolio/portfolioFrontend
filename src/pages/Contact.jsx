import React from 'react';

export default function Contact() {
  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-8">Contact</h1>
        
        <div className="bg-white shadow-lg rounded-lg p-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-blue-100">
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
            <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-green-100">
              <span className="text-xl text-green-600">📱</span>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-brand-dark mb-1">Phone</h3>
              <p className="text-brand-main">+256 770 819418</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-purple-100">
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
            <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-blue-100">
              <span className="text-xl text-blue-600">in</span>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-brand-dark mb-1">LinkedIn</h3>
              <a href="https://linkedin.com/in/ampaire-irene" target="_blank" rel="noopener noreferrer" className="text-brand-main hover:underline">
                linkedin.com/in/ampaire-irene
              </a>
            </div>
          </div>
          
          <div className="pt-4 border-t">
            <a href="/Ampaire_Irene_CV.pdf" className="inline-block bg-brand-main text-white px-6 py-3 rounded hover:opacity-90 transition">
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}