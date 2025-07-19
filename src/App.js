import { useEffect, useState } from 'react';
import './App.css';
import TitlebarImageList from './components/TitlebarImageList.js';

function App() {
  const [characters, setCharacters] = useState([]);

  const charactersListUrl = 'https://hp-api.onrender.com/api/characters';

  // functions for when the page loaded
  useEffect(() => {
    // set characters list
    fetch(charactersListUrl)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // set only data that has image to the list
        setCharacters(data.filter((item) => item.image));
      })
      .catch((error) => {
        console.error('Fetch error CL:', error);
      });
  }, []);

  return (
    <div className='App'>
      <h1>
        <img
          src='/Harry-Potter-Logo-2001.jpg'
          className='App-logo'
          alt='logo'
        />
      </h1>
      <div class='container'>
        <TitlebarImageList itemData={characters} />
      </div>
    </div>
  );
}

export default App;
