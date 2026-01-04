// import React from 'react';
import images from '../assets/images/gen_image'; // Ensure this file exports your images object

export default function About() {
  const executives = [
    { name: 'Dr. Prince Ademola Yisau Adegoke', role: 'Chairman / CEO', img: images.CEO5 },
    { name: 'Dr. Temitope Ademola Afolabi', role: 'Head, Agric Revolution', img: images.Head },
    { name: 'Engr. SO Lawal', role: 'Technical Advisor', img: images.technical },
    { name: 'KEHINDE-AFOLABI Samuel Olugbenga', role: 'Company Secretary', img: images.secretary },
    { name: 'Comr. Adegoke Adewale', role: 'Lead Developer (IT)', img: images.lead_dev3 },
  ];

  return (
    <div className="space-y-16 pb-20">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-brand-green">About Us</h1>
        <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
          ESDAN (Economic and Social Development Ambassadors of Nigeria) is a forward-thinking organization 
          bridging the gap between policy and practice. We are more than a company—we are a movement 
          dedicated to advancing the economic and social transformation of Nigeria and Africa.
        </p>
      </section>

      {/* Mission & Vision Cards */}
      <section className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-brand-green">
          <h2 className="text-2xl font-bold text-brand-green mb-4">Our Mission</h2>
          <p className="text-gray-600">
            To contribute effectively to economic and social development programmes and projects across Nigeria — 
            initiatives that enhance living standards, promote inclusive growth, and foster sustainable prosperity.
          </p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-brand-gold">
          <h2 className="text-2xl font-bold text-brand-gold mb-4">Our Vision</h2>
          <p className="text-gray-600">
            To design and implement socioeconomic development plans that strengthen social cohesion and 
            accelerate national development across agriculture, education, and industrialization.
          </p>
        </div>
      </section>

      {/* Executives Section */}
      <section>
        <h2 className="text-3xl font-bold text-center text-brand-green mb-10">Meet Our Executives</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {executives.map((exec, idx) => (
            <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group">
              <div className="h-64 overflow-hidden">
                <img 
                  src={exec.img} 
                  alt={exec.name} 
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="font-bold text-lg text-gray-800">{exec.name}</h3>
                <p className="text-brand-green font-medium mt-1">{exec.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}