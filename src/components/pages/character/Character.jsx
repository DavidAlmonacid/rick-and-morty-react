import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Character = () => {
  const { characterId } = useParams();
  const [characterInfo, setCharacterInfo] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const characterData = async () => {
      const character = await fetch(
        `https://rickandmortyapi.com/api/character/${characterId}`
      );
      const characterData = await character.json();
      console.log(characterData);
      setCharacterInfo(characterData);

      setTimeout(() => {
        setLoading(false);
      }, 1400);
    };

    characterData();
  }, []);

  if (loading) {
    return <p>loading...</p>;
  }

  return (
    <div>
      <h1>{characterInfo.name}</h1>

      <picture>
        <img src={characterInfo.image} alt={characterInfo.name} />
      </picture>

      <section>
        <span>Location: </span>
        <span>{characterInfo.location.name}</span>
      </section>

      <section>
        <span>Status: </span>
        <span>{characterInfo.status}</span>
      </section>
    </div>
  );
};

export default Character;
