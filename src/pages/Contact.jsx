// import React from 'react';

// export default function Contact() {
//   return (
//     <section className="py-16">
//       <div className="max-w-4xl mx-auto px-6">
//         <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-8">Contact</h1>
        
//         <div className="bg-white shadow-lg rounded-lg p-8 space-y-6">
//           <div className="flex items-start gap-4">
//             <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-blue-100">
//               <span className="text-xl text-blue-600">✉</span>
//             </div>
//             <div>
//               <h3 className="font-semibold text-lg text-brand-dark mb-1">Email</h3>
//               <a href="mailto:ampaireirene7@gmail.com" className="text-brand-main hover:underline">
//                 ampaireirene7@gmail.com
//               </a>
//             </div>
//           </div>
          
//           <div className="flex items-start gap-4">
//             <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-green-100">
//               <span className="text-xl text-green-600">📱</span>
//             </div>
//             <div>
//               <h3 className="font-semibold text-lg text-brand-dark mb-1">Phone</h3>
//               <p className="text-brand-main">+256 770 819418</p>
//             </div>
//           </div>
          
//           <div className="flex items-start gap-4">
//             <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-purple-100">
//               <span className="text-xl text-purple-600">⚡</span>
//             </div>
//             <div>
//               <h3 className="font-semibold text-lg text-brand-dark mb-1">GitHub</h3>
//               <a href="https://github.com/ampaireirene" target="_blank" rel="noopener noreferrer" className="text-brand-main hover:underline">
//                 github.com/ampaireirene
//               </a>
//             </div>
//           </div>
          
//           <div className="flex items-start gap-4">
//             <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-blue-100">
//               <span className="text-xl text-blue-600">in</span>
//             </div>
//             <div>
//               <h3 className="font-semibold text-lg text-brand-dark mb-1">LinkedIn</h3>
//               <a href="https://linkedin.com/in/ampaire-irene" target="_blank" rel="noopener noreferrer" className="text-brand-main hover:underline">
//                 linkedin.com/in/ampaire-irene
//               </a>
//             </div>
//           </div>
          
//           <div className="pt-4 border-t">
//             <a href="/Ampaire_Irene_CV.pdf" className="inline-block bg-brand-main text-white px-6 py-3 rounded hover:opacity-90 transition">
//               Download CV
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import React, { useState } from 'react';
import { submitContactForm } from '../services/api';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState(''); // 'success', 'error', or ''

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(''); // Reset status
    try {
      await submitContactForm(formData);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' }); // Clear form
    } catch (error) {
      setStatus('error');
      console.error('Form submission error:', error.message);
    }
  };

  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-2xl font-semibold mb-4">Contact</h1>
        
        {/* ... (the contact info divs from your previous code) ... */}

        <div className="mt-8">
          {status === 'success' && <p className="text-green-600 mb-4">Thank you! Your message has been sent.</p>}
          {status === 'error' && <p className="text-red-600 mb-4">Oops! Something went wrong. Please try again.</p>}
          
          <form onSubmit={handleSubmit} className="space-y-4">
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
    </section>
  );
}