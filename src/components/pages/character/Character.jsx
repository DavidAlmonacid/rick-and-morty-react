import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// Page example
// https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto:good,w_900/Challenges/txrtsxgbdjxjwamhysxx.jpg

const Character = () => {
  const { characterId } = useParams();
  const [character, setCharacter] = useState({});
  const [loading, setLoading] = useState(true);
  const API_CHARACTER = `https://rickandmortyapi.com/api/character/${characterId}`;

  useEffect(() => {
    const characterData = async () => {
      const response = await fetch(API_CHARACTER);
      const data = await response.json();
      console.log(data);
      setCharacter(data);

      setTimeout(() => {
        setLoading(false);
      }, 1200);
    };

    characterData();
  }, []);

  return loading ? (
    <p>loading...</p>
  ) : (
    <div>
      <h1>{character.name}</h1>

      <picture>
        <img src={character.image} alt={character.name} />
      </picture>

      <section>
        <span>Location: </span>
        <span>{character.location.name}</span>
      </section>

      <section>
        <span>Status: </span>
        <span>{character.status}</span>
      </section>
    </div>
  );
};

export default Character;
