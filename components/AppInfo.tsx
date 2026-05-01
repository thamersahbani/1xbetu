
import React from 'react';
import { APP_DATA } from '../constants';

const AppInfo: React.FC = () => {
  return (
    <div className="flex flex-col">
      <div className="flex items-start gap-5">
        <div className="flex-shrink-0 relative">
          <img 
            src={APP_DATA.iconUrl} 
            alt="App Icon" 
            className="w-[72px] h-[72px] rounded-[18px] shadow-sm border border-gray-100"
          />
        </div>
        <div className="flex flex-col flex-1 min-w-0">
          <h1 className="text-[22px] leading-7 font-medium text-[#202124] truncate">
            {APP_DATA.name}
          </h1>
          <div className="flex items-center mt-0.5">
            <span className="text-[14px] text-[#01875f] font-medium mr-1">{APP_DATA.company}</span>
            <div className="bg-[#e8f0fe] rounded-full p-0.5">
              <svg className="w-3 h-3 text-[#1a73e8]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
              </svg>
            </div>
          </div>
          <p className="text-[12px] text-[#5f6368] mt-1 font-normal">Contient des achats intégrés</p>
        </div>
      </div>

      <div className="flex justify-between items-center mt-6 py-1">
        <div className="flex flex-col items-center flex-1 border-r border-[#e8eaed]">
          <div className="flex items-center text-[14px] font-medium text-[#202124]">
            <span>{APP_DATA.rating}</span>
            <svg className="w-3 h-3 ml-0.5 text-[#202124]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          </div>
          <span className="text-[11px] text-[#5f6368] mt-1 uppercase font-medium">Évaluations</span>
        </div>
        <div className="flex flex-col items-center flex-1 border-r border-[#e8eaed]">
          <div className="text-[14px] font-medium text-[#202124]">
            56 Mo
          </div>
          <span className="text-[11px] text-[#5f6368] mt-1 uppercase font-medium">Espace</span>
        </div>
        <div className="flex flex-col items-center flex-1">
          <div className="text-[14px] font-medium text-[#202124]">
            {APP_DATA.downloads}
          </div>
          <span className="text-[11px] text-[#5f6368] mt-1 uppercase font-medium">Téléchargements</span>
        </div>
      </div>

      <button 
        onClick={() => window.location.href = APP_DATA.installUrl}
        className="w-full bg-[#01875f] text-white py-2.5 rounded-lg mt-8 text-sm font-medium hover:bg-[#016d4d] active:bg-[#01543b] transition-colors"
      >
        Installer
      </button>

      <div className="flex items-center gap-2 mt-4 text-[#5f6368]">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
        </svg>
        <span className="text-[14px] font-medium">Partager</span>
        <div className="w-1 h-1 bg-gray-300 rounded-full mx-1"></div>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
        </svg>
        <span className="text-[14px] font-medium">Liste de souhaits</span>
      </div>
    </div>
  );
};

export default AppInfo;
