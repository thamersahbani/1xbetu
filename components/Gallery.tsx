
import React from 'react';

const Gallery: React.FC = () => {
  const screenshots = [
    { id: '1', seed: 'slot1', multiplier: 'x100', color: 'bg-purple-600' },
    { id: '2', seed: 'slot2', multiplier: 'x50', color: 'bg-pink-600' },
    { id: '3', seed: 'slot3', multiplier: 'x25', color: 'bg-indigo-600' },
    { id: '4', seed: 'slot4', multiplier: 'x200', color: 'bg-yellow-600' },
  ];

  return (
    <div className="flex gap-3 overflow-x-auto no-scrollbar pl-6 pr-6">
      {screenshots.map((s) => (
        <div key={s.id} className="relative flex-shrink-0 w-[200px] h-[355px] rounded-xl overflow-hidden shadow-md border border-gray-200">
          <img 
            src={`https://picsum.photos/seed/${s.seed}/400/710`} 
            className="w-full h-full object-cover brightness-[0.8]"
            alt="Screenshot"
          />
          {/* Overlay elements to make it look like a casino UI */}
          <div className="absolute inset-0 flex flex-col items-center justify-between p-4 pointer-events-none">
            <div className="w-full flex justify-between items-start">
              <div className="bg-black/40 backdrop-blur-sm rounded-full px-3 py-1 text-[10px] text-white border border-white/20 font-bold uppercase tracking-wider">
                Bonus Actif
              </div>
              <div className="bg-yellow-400 text-black text-[12px] font-black px-2 py-1 rounded shadow-lg transform rotate-12 border-2 border-white">
                JACKPOT
              </div>
            </div>

            <div className="flex-1 flex items-center justify-center w-full">
              <div className="bg-gradient-to-b from-white/20 to-transparent p-4 rounded-3xl backdrop-blur-md border border-white/30 flex flex-col items-center">
                 <div className="grid grid-cols-3 gap-2 opacity-90 mb-4 scale-75">
                    {['🍎', '🍇', '🍭', '🍒', '🍋', '🔔', '💎', '🍉', '🍓'].map((emoji, i) => (
                       <div key={i} className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center text-xl shadow-inner">
                         {emoji}
                       </div>
                    ))}
                 </div>
                 <div className="text-[42px] font-black text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)] animate-pulse">
                   {s.multiplier}
                 </div>
              </div>
            </div>

            <div className="w-full bg-black/60 backdrop-blur-md rounded-xl p-2 flex flex-col items-center border border-white/10">
               <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden mb-1">
                 <div className="bg-green-400 h-full w-2/3 shadow-[0_0_10px_#4ade80]"></div>
               </div>
               <span className="text-[10px] text-white font-bold tracking-widest uppercase">Gains : 1 450,00 €</span>
            </div>
          </div>
          
          {/* Sparkles effect layer */}
          <div className="absolute inset-0 pointer-events-none opacity-50 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.2)_100%)]"></div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
