import React, { useState } from 'react';
import BottomNav from './components/BottomNav';
import Player from './components/Player';
import Home from './components/Home';

function App() {
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="bg-wynk-dark min-h-screen flex flex-col">
      <main className="flex-1 pb-32">
        <Home onSongSelect={setCurrentSong} />
      </main>
      {currentSong && <Player song={currentSong} isPlaying={isPlaying} onPlayPause={setIsPlaying} />}
      <BottomNav />
    </div>
  );
}

export default App;
