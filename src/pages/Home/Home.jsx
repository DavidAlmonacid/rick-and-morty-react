import { useEffect, useState } from 'react';
import CharacterList from '../../components/CharacterList/CharacterList';
import Layout from '../../components/Layout/Layout';
import PageButtons from '../../components/PageButtons/PageButtons';

const Home = () => {
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
  }, [page]);

  return (
    <Layout>
      <PageButtons page={page} setPage={setPage} />
      <CharacterList characters={characters} />
      <PageButtons page={page} setPage={setPage} />
    </Layout>
  );
};

export default Home;
