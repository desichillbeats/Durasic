# Durasic Music - Wynk-Style Music Streaming App

A modern music streaming frontend built with React, Tailwind CSS, and Supabase.

## 🚀 Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Supabase

Create a `.env` file in the root directory:
```
REACT_APP_SUPABASE_URL=your_supabase_url_here
REACT_APP_SUPABASE_ANON_KEY=your_supabase_anon_key_here
```

### 3. Run the App
```bash
npm start
```

## 📁 Required Files to Create

You need to create the following files in your `src` folder:

### **src/index.css**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
}
```

### **src/index.js**
```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

### **src/App.js**
```javascript
import React from 'react';
import BottomNav from './components/BottomNav';
import Player from './components/Player';
import Home from './components/Home';

function App() {
  return (
    <div className="bg-wynk-dark min-h-screen flex flex-col">
      <main className="flex-1 pb-32">
        <Home />
      </main>
      <Player />
      <BottomNav />
    </div>
  );
}

export default App;
```

### **src/components/BottomNav.js**
```javascript
import React from 'react';

const BottomNav = () => (
  <nav className="fixed bottom-0 left-0 right-0 flex bg-wynk-gray text-white justify-around p-4 z-50 border-t border-gray-700">
    <button className="flex flex-col items-center hover:text-wynk-purple transition-colors">
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
      <span className="text-xs mt-1">Home</span>
    </button>
    <button className="flex flex-col items-center hover:text-wynk-purple transition-colors">
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
      <span className="text-xs mt-1">Search</span>
    </button>
    <button className="flex flex-col items-center hover:text-wynk-purple transition-colors">
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
      <span className="text-xs mt-1">Library</span>
    </button>
    <button className="flex flex-col items-center hover:text-wynk-purple transition-colors">
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
      <span className="text-xs mt-1">Profile</span>
    </button>
  </nav>
);

export default BottomNav;
```

### **src/components/Player.js**
```javascript
import React from 'react';

const Player = () => (
  <div className="fixed bottom-16 left-0 right-0 bg-gradient-to-r from-wynk-purple to-wynk-pink text-white p-3 shadow-2xl z-40 mx-4 rounded-lg">
    <div className="flex items-center justify-between">
      <div className="flex items-center flex-1">
        <img src="https://via.placeholder.com/48" alt="cover" className="w-12 h-12 rounded-md" />
        <div className="ml-3 flex-1">
          <div className="font-semibold text-sm truncate">Song Name</div>
          <div className="text-xs text-gray-200 truncate">Artist Name</div>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button className="hover:scale-110 transition-transform">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" />
          </svg>
        </button>
      </div>
    </div>
  </div>
);

export default Player;
```

### **src/components/Home.js**
```javascript
import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import SongCard from './SongCard';

const Home = () => {
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
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-2 text-white">Good Evening</h1>
      <p className="text-gray-400 mb-6">Discover your favorite music</p>
      
      {loading ? (
        <div className="text-white text-center py-10">Loading...</div>
      ) : (
        <>
          <h2 className="text-xl font-bold mb-4 text-white">Trending Now</h2>
          <div className="grid grid-cols-2 gap-4 mb-20">
            {songs.map(song => (
              <SongCard key={song.id} song={song} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
```

### **src/components/SongCard.js**
```javascript
import React from 'react';

const SongCard = ({ song }) => (
  <div className="bg-wynk-gray p-3 rounded-lg hover:bg-gray-700 transition-all cursor-pointer group">
    <div className="relative">
      <img 
        src={song.cover_url || 'https://via.placeholder.com/150'} 
        alt={song.title} 
        className="w-full aspect-square object-cover rounded-md mb-3" 
      />
      <button className="absolute bottom-2 right-2 bg-wynk-purple p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
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
```

## 📦 Creating Component Folder

Make sure to create a `components` folder inside `src` and add all component files there.

## 🚀 Deploy to Netlify

1. Build your app:
```bash
npm run build
```

2. Deploy the `build` folder to Netlify

3. Add environment variables in Netlify settings:
   - `REACT_APP_SUPABASE_URL`
   - `REACT_APP_SUPABASE_ANON_KEY`

## 🎨 Features

- 🎵 **Music Library** - Browse and play songs from Supabase
- 🔎 **Search** - Find your favorite tracks
- 🎧 **Player** - Beautiful music player UI
- 📱 **Mobile First** - Responsive design like Wynk Music
- 🎨 **Dark Theme** - Wynk-inspired purple/pink gradients

## 📦 Supabase Schema

Create a `songs` table in Supabase with:
- `id` (uuid, primary key)
- `title` (text)
- `artist` (text)
- `cover_url` (text)
- `audio_url` (text)
- `created_at` (timestamp)

---
**Made with ❤️ for music lovers**
