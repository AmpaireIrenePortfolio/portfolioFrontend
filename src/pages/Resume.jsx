import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Resume() {
  useEffect(() => {
    // Handle hash navigation to scroll to the correct section
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-12 text-center">My Resume</h1>
        
        <div className="space-y-16">
          <section id="work-experience" className="scroll-mt-20">
            <h2 className="text-3xl font-bold text-brand-dark mb-8">Work Experience</h2>
            <div className="space-y-8">
              <div className="bg-white shadow-lg rounded-xl p-8">
                <h3 className="text-xl font-semibold text-brand-dark mb-2">Carriage and Wagon Examiner</h3>
                <p className="text-brand-main mb-4">Uganda Railways Corporation</p>
                <p className="text-slate-600 mb-4">
                  Implemented process improvements that increased inspection throughput and minimized unscheduled repairs. 
                  Enhanced operational efficiency and safety through innovative inspection methods and documentation improvements.
                </p>
                <p className="text-sm text-slate-500">2020 - Present</p>
              </div>
              
              <div className="bg-white shadow-lg rounded-xl p-8">
                <h3 className="text-xl font-semibold text-brand-dark mb-2">Mechanical Engineer</h3>
                <p className="text-brand-main mb-4">Motor Centre</p>
                <p className="text-slate-600 mb-4">
                  Cleared vendor payment backlog, restored supply chain operations, and improved inventory management systems.
                </p>
                <p className="text-sm text-slate-500">2018 - 2020</p>
              </div>
              
              <div className="bg-white shadow-lg rounded-xl p-8">
                <h3 className="text-xl font-semibold text-brand-dark mb-2">Sales Engineer</h3>
                <p className="text-brand-main mb-4">Tata Motors</p>
                <p className="text-slate-600 mb-4">
                  Led survey-based strategy that resulted in +20% sales increase. Developed client relationships and technical solutions.
                </p>
                <p className="text-sm text-slate-500">2016 - 2018</p>
              </div>
            </div>
          </section>
          
          <section id="internship-volunteering" className="scroll-mt-20">
            <h2 className="text-3xl font-bold text-brand-dark mb-8">Internship & Volunteering</h2>
            <div className="space-y-8">
              <div className="bg-white shadow-lg rounded-xl p-8">
                <h3 className="text-xl font-semibold text-brand-dark mb-2">Software Development Apprentice</h3>
                <p className="text-brand-main mb-4">Tech Innovation Hub</p>
                <p className="text-slate-600 mb-4">
                  Developed full-stack applications and participated in agile development processes. 
                  Gained experience in modern web technologies and collaborative coding practices.
                </p>
                <p className="text-sm text-slate-500">2019</p>
              </div>
              
              <div className="bg-white shadow-lg rounded-xl p-8">
                <h3 className="text-xl font-semibold text-brand-dark mb-2">STEM Education Volunteer</h3>
                <p className="text-brand-main mb-4">Community Outreach Program</p>
                <p className="text-slate-600 mb-4">
                  Taught mechanical engineering concepts to high school students and organized workshops on innovation and design thinking.
                </p>
                <p className="text-sm text-slate-500">2017 - 2018</p>
              </div>
            </div>
          </section>
          
          <section id="education" className="scroll-mt-20">
            <h2 className="text-3xl font-bold text-brand-dark mb-8">Education</h2>
            <div className="space-y-8">
              <div className="bg-white shadow-lg rounded-xl p-8">
                <h3 className="text-xl font-semibold text-brand-dark mb-2">Bachelor of Mechanical and Manufacturing Engineering</h3>
                <p className="text-brand-main mb-4">Kyambogo University</p>
                <p className="text-slate-600 mb-4">
                  Graduated with Second Class Honours (Upper Division). Coursework included thermodynamics, 
                  fluid mechanics, materials science, and manufacturing processes.
                </p>
                <p className="text-sm text-slate-500">2012 - 2016</p>
              </div>
              
              <div className="bg-white shadow-lg rounded-xl p-8">
                <h3 className="text-xl font-semibold text-brand-dark mb-2">Full-Stack Web Development Certificate</h3>
                <p className="text-brand-main mb-4">Tech Academy</p>
                <p className="text-slate-600 mb-4">
                  Completed intensive program covering React, Node.js, database design, and modern web development practices.
                </p>
                <p className="text-sm text-slate-500">2020</p>
              </div>
            </div>
          </section>
          
          <section id="accomplishments" className="scroll-mt-20">
            <h2 className="text-3xl font-bold text-brand-dark mb-8">Accomplishments</h2>
            <div className="space-y-8">
              <div className="bg-white shadow-lg rounded-xl p-8">
                <h3 className="text-xl font-semibold text-brand-dark mb-2">ONIMS System Development</h3>
                <p className="text-slate-600 mb-4">
                  Led development of One Network Information Management System that digitized HR, Procurement, 
                  and Finance workflows with dashboards and automation.
                </p>
                <ul className="list-disc ml-6 mt-2 text-slate-700">
                  <li>Leave processing reduced from 5–7 days → 24–48 hours</li>
                  <li>Procurement cycles shortened by 40%</li>
                  <li>Staff onboarding streamlined from 2 weeks → 3–5 days</li>
                </ul>
              </div>
              
              <div className="bg-white shadow-lg rounded-xl p-8">
                <h3 className="text-xl font-semibold text-brand-dark mb-2">Quizzy Web Application</h3>
                <p className="text-slate-600 mb-4">
                  Developed quiz management web app with secure authentication and real-time scoring system.
                </p>
              </div>
              
              <div className="bg-white shadow-lg rounded-xl p-8">
                <h3 className="text-xl font-semibold text-brand-dark mb-2">Railway Safety Innovations</h3>
                <p className="text-slate-600 mb-4">
                  Implemented new inspection protocols at Uganda Railways that reduced safety incidents by 35% 
                  and improved operational efficiency.
                </p>
              </div>
            </div>
          </section>
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="/portfolioFrontend/ampaire_irene_resume.pdf" 
            download="Ampaire_Irene_Resume.pdf"
            className="inline-block bg-brand-main text-white px-8 py-3 rounded-lg text-lg font-semibold hover:opacity-90 transition"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}