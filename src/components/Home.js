import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import SongCard from './SongCard';

const Home = ({ onSongSelect }) => {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSongs();
  }, []);

  async function fetchSongs() {
    try {
      let { data, error } = await supabase.from('songs').select('*').limit(20);
      if (error) throw error;
      setSongs(data || []);
    } catch (error) {
      console.error('Error fetching songs:', error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="p-4 max-w-full">
      <h1 className="text-2xl font-bold mb-2 text-white">Good Evening</h1>
      <p className="text-gray-400 mb-6">Discover your favorite music</p>
      
      {loading ? (
        <div className="text-white text-center py-10">Loading...</div>
      ) : (
        <>
          <h2 className="text-xl font-bold mb-4 text-white">Trending Now</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-20">
            {songs.length > 0 ? (
              songs.map(song => (
                <SongCard key={song.id} song={song} onSelect={onSongSelect} />
              ))
            ) : (
              <div className="col-span-full text-center text-gray-400">No songs found</div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
