import React from 'react';

export default function Timeline() {
  const highlights = [
    {
      company: 'Tata Motors',
      achievement: '+20% sales increase after survey-led strategy',
      icon: '📈'
    },
    {
      company: 'Motor Centre',
      achievement: 'Cleared vendor payment backlog, restored supply',
      icon: '📦'
    },
    {
      company: 'Uganda Railways',
      achievement: 'Revived coaches, improved documentation',
      icon: '🚂'
    }
  ];

  return (
    <div className="space-y-6">
      {highlights.map((item, index) => (
        <div key={index} className="flex gap-4 items-start hover:bg-gray-50 p-4 rounded-lg transition">
          <div className="w-12 h-12 rounded-full bg-brand-accent bg-opacity-20 flex items-center justify-center flex-shrink-0">
            <span className="text-xl text-brand-accent">{item.icon}</span>
          </div>
          <div>
            <h4 className="font-semibold text-lg text-brand-dark">{item.company}</h4>
            <p className="text-slate-600 mt-1">{item.achievement}</p>
          </div>
        </div>
      ))}
    </div>
  );
}