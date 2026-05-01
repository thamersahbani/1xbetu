
import React from 'react';

const Description: React.FC = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-[18px] font-medium text-[#202124]">À propos de cette application</h2>
        <svg className="w-6 h-6 text-[#5f6368]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
      
      <p className="text-[14px] leading-6 text-[#5f6368] mt-4 line-clamp-3">
        Bienvenue dans 1XBET™ Live Casino & Slots, l'expérience de casino ultime sur mobile ! Pariez sur vos sports préférés, profitez des machines à sous de classe mondiale et rejoignez les tables de casino en direct avec des graphismes époustouflants.
      </p>

      <div className="flex flex-wrap gap-2 mt-4">
        <span className="px-3 py-1 bg-white border border-[#e8eaed] rounded-full text-[12px] font-medium text-[#5f6368]">
          Casino
        </span>
        <span className="px-3 py-1 bg-white border border-[#e8eaed] rounded-full text-[12px] font-medium text-[#5f6368]">
          Machines à sous
        </span>
        <span className="px-3 py-1 bg-white border border-[#e8eaed] rounded-full text-[12px] font-medium text-[#5f6368]">
          Jeux d'argent
        </span>
      </div>

      <div className="mt-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-[18px] font-medium text-[#202124]">Sécurité des données</h2>
          <svg className="w-6 h-6 text-[#5f6368]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
        <div className="p-4 border border-[#e8eaed] rounded-xl flex gap-4">
          <svg className="w-6 h-6 text-[#01875f] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-[12px] text-[#5f6368]">
            La sécurité commence par la compréhension de la manière dont les développeurs collectent et partagent vos données.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Description;
