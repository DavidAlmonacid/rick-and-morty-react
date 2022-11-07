import Characters from './Characters';
import { useEffect, useState } from 'react';

const AppHome = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const API = `https://rickandmortyapi.com/api/character?page=${page}`;

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(API);
        const data = await response.json();
        console.log(data);
        setCharacters(data.results);
      } catch (error) {
        console.error(error);
      }
    };

    getData();
  }, []);

  return (
    <div>
      <Characters characters={characters} />
    </div>
  );
};

export default AppHome;