// import React from 'react';
import { CheckCircle } from 'lucide-react';

export default function Membership() {
  const criteria = [
    "Must be a Nigerian committed to the vision of global development.",
    "Must be literate, with the ability to read and write.",
    "Must possess a genuine interest in economic empowerment and social transformation.",
    "Professionals, entrepreneurs, investors, and researchers are encouraged to join.",
    "Willingness to contribute ideas, resources, and skills toward a prosperous Nigeria."
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-12 pb-20">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-brand-green">Membership</h1>
        <p className="text-xl text-gray-600">Join the movement for change.</p>
      </div>

      <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Eligibility Requirements</h2>
        <p className="text-gray-600 mb-8">
          ESDAN welcomes individuals and organizations who share our belief in progress, innovation, 
          and inclusive development. To become a member, you must meet the following criteria:
        </p>
        
        <ul className="space-y-4">
          {criteria.map((item, idx) => (
            <li key={idx} className="flex items-start gap-4">
              <CheckCircle className="text-brand-gold shrink-0 mt-1" size={24} />
              <span className="text-gray-700 text-lg">{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-12 p-6 bg-brand-cream rounded-xl text-center">
          <p className="text-brand-green font-medium">
            Ready to apply? Contact our Help Desk or visit our Liaison offices.
          </p>
        </div>
      </div>
    </div>
  );
}