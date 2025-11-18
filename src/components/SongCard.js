import React from 'react';

const SongCard = ({ song, onSelect }) => (
  <div onClick={() => onSelect(song)} className="bg-wynk-gray p-3 rounded-lg hover:bg-gray-700 transition-all cursor-pointer group">
    <div className="relative overflow-hidden rounded-md mb-3">
      <img 
        src={song.cover_url || 'https://via.placeholder.com/150'} 
        alt={song.title} 
        className="w-full aspect-square object-cover" 
      />
      <button className="absolute bottom-2 right-2 bg-wynk-purple p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg hover:bg-wynk-pink">
        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
        </svg>
      </button>
    </div>
    <div className="text-white font-semibold text-sm truncate">{song.title || 'Unknown Song'}</div>
    <div className="text-gray-400 text-xs truncate">{song.artist || 'Unknown Artist'}</div>
  </div>
);

export default SongCard;
