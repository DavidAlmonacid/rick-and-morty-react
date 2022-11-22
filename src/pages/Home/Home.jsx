import { useEffect, useState } from 'react';
import CharacterList from '../../components/CharacterList/CharacterList';

const AppHome = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const API = `https://rickandmortyapi.com/api/character?page=${page}`;

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(API);
        const data = await response.json();
        setCharacters(data.results);
      } catch (error) {
        console.error(error);
      }
    };

    getData();
  }, []);

  return (
    <>
      <div className='flex mx-12 py-2 justify-between'>
        <button>Prev</button>
        <button>Next</button>
      </div>
      <CharacterList characters={characters} />;
    </>
  );
};

export default AppHome;
