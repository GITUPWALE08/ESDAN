// import React from 'react';
import { Handshake } from 'lucide-react';

export default function Partners() {
  const partnerList = [
    "Oyo State College of Agriculture and Technology",
    "Federal Institute of Industrial Research (FIIRO), Oshodi",
    "International Institute of Tropical Agriculture (IITA)",
    "Miyetti Allah Kauta Hore Fulani Socio-Cultural Association",
    "Isolfad International Company Limited",
    "Demy Tee Ventures",
    "Artee Group (SPAR)",
    "Farming in Africa",
    "Globacom Limited"
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-12 pb-20">
      <header className="text-center space-y-6">
        <div className="inline-block p-4 bg-brand-green/10 rounded-full mb-2">
          <Handshake className="text-brand-green w-12 h-12" />
        </div>
        <h1 className="text-4xl font-bold text-brand-green">Liaison Partners</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We work closely with national and international partners to ensure project success. 
          These collaborations bring together research, technology, finance, and community engagement.
        </p>
      </header>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {partnerList.map((partner, idx) => (
          <div 
            key={idx} 
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md border-l-4 border-brand-gold transition-all hover:-translate-y-1"
          >
            <h3 className="font-semibold text-gray-800 text-lg leading-snug">{partner}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}