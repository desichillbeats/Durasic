import React from 'react';

const Player = ({ song, isPlaying, onPlayPause }) => {
  if (!song) return null;

  return (
    <div className="fixed bottom-16 left-0 right-0 bg-gradient-to-r from-wynk-purple to-wynk-pink text-white p-4 shadow-2xl z-40 mx-4 rounded-lg mb-2">
      <div className="flex items-center justify-between gap-4">
        <img src={song.cover_url || 'https://via.placeholder.com/48'} alt="cover" className="w-12 h-12 rounded-md flex-shrink-0" />
        <div className="flex-1 min-w-0">
          <div className="font-semibold text-sm truncate">{song.title || 'Unknown'}</div>
          <div className="text-xs text-gray-200 truncate">{song.artist || 'Unknown Artist'}</div>
        </div>
        <button onClick={() => onPlayPause(!isPlaying)} className="hover:scale-110 transition-transform flex-shrink-0">
          {isPlaying ? (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M5.75 1.172A.5.5 0 005 1.65v16.7a.5.5 0 00.75.478l10.67-8.35a.5.5 0 000-.796L5.75 1.172z" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.3A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default Player;
