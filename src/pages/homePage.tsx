// import React from 'react';
import { Link } from 'react-router-dom';
import noBG from '../assets/images/ImprovedNoBg.png'; // Update paths based on your new folder structure

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center space-y-8 animate-fade-in">
      <img src={noBG} alt="ESDAN Logo" className="w-48 md:w-64 drop-shadow-xl" />
      
      <div className="space-y-4 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-extrabold text-brand-green">
          ESDAN
        </h1>
        <h2 className="text-xl md:text-2xl font-medium text-gray-700">
          Economic and Social Development Ambassadors of Nigeria
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Redefining development through innovation, enterprise, and collaboration.
          Join the movement to transform Nigeria and Africa.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 pt-4">
        <Link 
          to="/about" 
          className="px-8 py-3 bg-brand-green text-white rounded-full font-semibold shadow-lg hover:bg-green-800 transition transform hover:-translate-y-1"
        >
          Who We Are
        </Link>
        <Link 
          to="/projects" 
          className="px-8 py-3 bg-white text-brand-green border-2 border-brand-green rounded-full font-semibold shadow-sm hover:bg-gray-50 transition"
        >
          Our Projects
        </Link>
      </div>
    </div>
  );
}