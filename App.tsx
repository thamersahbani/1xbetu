
import React from 'react';
import AppInfo from './components/AppInfo';
import Gallery from './components/Gallery';
import Description from './components/Description';
import Reviews from './components/Reviews';
import PlayStoreHeader from './components/PlayStoreHeader';
import { COLORS, APP_DATA } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white max-w-md mx-auto relative shadow-xl overflow-x-hidden">
      {/* Search Header */}
      <PlayStoreHeader />

      <main className="pb-24">
        {/* App Meta Section */}
        <section className="px-6 pt-6">
          <AppInfo />
        </section>

        {/* Horizontal Gallery */}
        <section className="mt-8">
          <Gallery />
        </section>

        {/* About this app */}
        <section className="mt-8 px-6">
          <Description />
        </section>

        {/* Reviews Section */}
        <section className="mt-8 px-6">
          <Reviews />
        </section>

        {/* Similar Games Mockup Footer */}
        <section className="mt-10 px-6 pb-10">
          <h2 className="text-[18px] font-medium text-[#202124] mb-4">Jeux similaires</h2>
          <div className="flex gap-4 overflow-x-auto no-scrollbar pb-4">
             {[1, 2, 3, 4].map(i => (
               <div key={i} className="flex-shrink-0 w-24">
                 <img 
                   src={`https://picsum.photos/seed/similar${i}/96/96`} 
                   className="w-24 h-24 rounded-2xl border border-gray-100 shadow-sm"
                   alt="Similar game"
                 />
                 <p className="text-[12px] text-[#5f6368] mt-2 truncate">Casino Royale {i}</p>
                 <div className="flex items-center text-[10px] text-[#5f6368]">
                   <span>4.{i}</span>
                   <span className="ml-0.5">★</span>
                 </div>
               </div>
             ))}
          </div>
        </section>
      </main>

      {/* Persistent Bottom Install Area (Simulated) */}
      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t border-gray-100 px-6 py-3 flex items-center justify-between z-50">
        <div className="flex items-center">
          <img src={APP_DATA.iconUrl} className="w-10 h-10 rounded-lg mr-3" alt="icon" />
          <div className="overflow-hidden">
            <p className="text-[14px] font-medium text-[#202124] truncate">{APP_DATA.name.split('™')[0]}™</p>
            <p className="text-[12px] text-[#01875f] font-medium">Contient des annonces</p>
          </div>
        </div>
        <button 
          onClick={() => window.location.href = APP_DATA.installUrl}
          className="bg-[#01875f] text-white px-8 py-2 rounded-lg text-sm font-medium hover:bg-[#016d4d] active:scale-95 transition-all"
        >
          Installer
        </button>
      </div>
    </div>
  );
};

export default App;
