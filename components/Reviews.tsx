
import React from 'react';

const Reviews: React.FC = () => {
  const reviews = [
    {
      id: '1',
      author: 'Julien Durand',
      avatar: 'https://picsum.photos/seed/user1/48/48',
      rating: 5,
      date: '12 févr. 2024',
      content: 'Super jeu ! Les graphismes sont top et on gagne souvent des bonus. Je recommande vivement pour passer le temps.'
    },
    {
      id: '2',
      author: 'Marie Leroy',
      avatar: 'https://picsum.photos/seed/user2/48/48',
      rating: 4,
      date: '1 janv. 2024',
      content: 'Très addictif, les couleurs sont magnifiques. Petit bémol sur les temps de chargement parfois longs mais rien de grave.'
    }
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-[18px] font-medium text-[#202124]">Notes et avis</h2>
        <svg className="w-6 h-6 text-[#5f6368]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>

      <div className="flex gap-10 items-center mb-8">
        <div className="flex flex-col items-center">
          <div className="text-[54px] font-normal text-[#202124] leading-tight">4.3</div>
          <div className="flex text-[#01875f] mb-1">
            {[1, 2, 3, 4].map(i => <svg key={i} className="w-2.5 h-2.5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}
            <svg className="w-2.5 h-2.5 fill-current opacity-30" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
          </div>
          <div className="text-[12px] text-[#5f6368]">12 432</div>
        </div>
        
        <div className="flex-1 flex flex-col gap-1.5">
          {[5, 4, 3, 2, 1].map((n, i) => (
            <div key={n} className="flex items-center gap-4">
              <span className="text-[12px] text-[#5f6368] w-2">{n}</span>
              <div className="flex-1 bg-gray-100 h-2.5 rounded-full overflow-hidden">
                <div 
                  className="bg-[#01875f] h-full rounded-full" 
                  style={{ width: `${80 - (i * 15)}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-8">
        {reviews.map(review => (
          <div key={review.id} className="flex flex-col">
            <div className="flex items-center gap-4 mb-2">
              <img src={review.avatar} className="w-8 h-8 rounded-full" alt="User" />
              <span className="text-[14px] text-[#202124]">{review.author}</span>
              <div className="ml-auto flex items-center gap-1.5">
                <svg className="w-4 h-4 text-[#5f6368]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                </svg>
              </div>
            </div>
            <div className="flex items-center gap-2 mb-2">
               <div className="flex text-[#01875f]">
                 {Array.from({length: review.rating}).map((_, i) => (
                   <svg key={i} className="w-2.5 h-2.5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                 ))}
               </div>
               <span className="text-[11px] text-[#5f6368]">{review.date}</span>
            </div>
            <p className="text-[14px] text-[#5f6368] leading-6">{review.content}</p>
            <div className="flex items-center gap-6 mt-4">
              <span className="text-[12px] text-[#5f6368]">Avez-vous trouvé cet avis utile ?</span>
              <div className="flex gap-4">
                <button className="px-3 py-1 border border-[#e8eaed] rounded-full text-[12px] text-[#5f6368] hover:bg-gray-50 transition-colors">Oui</button>
                <button className="px-3 py-1 border border-[#e8eaed] rounded-full text-[12px] text-[#5f6368] hover:bg-gray-50 transition-colors">Non</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full text-[#01875f] text-[14px] font-medium py-4 mt-6">
        Voir tous les avis
      </button>
    </div>
  );
};

export default Reviews;
