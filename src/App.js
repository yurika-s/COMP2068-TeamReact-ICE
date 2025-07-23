import { useEffect, useState, Fragment } from 'react';
import './App.css';
import TitlebarImageList from './components/TitlebarImageList.js';
import DetailDialog from './components/DetailDialog.js';

const charactersListUrl = 'https://hp-api.onrender.com/api/characters';
const initialDetailInfo = {
  name: '',
  dateOfBirth: '',
  gender: '',
  house: '',
  actor: '',
};

function App() {
  const [characters, setCharacters] = useState([]);
  const [open, setOpen] = useState(false);
  const [detailedInfo, setDetailedInfo] = useState(initialDetailInfo);

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

  const handleClickDetail = (id) => {
    // search the character by id
    const characterInfo = characters.find((character) => character.id === id);
    // set character details and show the dialog
    setDetailedInfo(characterInfo);
    setOpen(true);
  };
  // close dialog
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      <div className='container'>
        <h1>
          <img src='/harry-potter-logo.png' className='App-logo' alt='logo' />
        </h1>
        <TitlebarImageList
          itemData={characters}
          handleClickDetail={handleClickDetail}
        />
      </div>
      {open && <DetailDialog info={detailedInfo} handleClose={handleClose} />}
    </Fragment>
  );
}

export default App;
