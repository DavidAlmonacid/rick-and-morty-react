import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Loading from '/assets/icons/loading-icon.svg';

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

  return (
    <div
      className={`grid justify-items-center py-9 ${
        loading ? 'items-center h-screen' : ''
      }`.trim()}
    >
      {loading ? (
        <picture>
          <img src={Loading} alt='loading icon' className='animate-spin' />
        </picture>
      ) : (
        <div className='w-full max-w-5xl'>
          <section className='grid grid-cols-2 place-items-center gap-x-3 gap-y-5 px-5 text-center'>
            <h1 className='text-3xl  font-medium'>{character.name}</h1>

            <picture>
              <img
                src={character.image}
                alt={character.name}
                className='rounded-2xl shadow-lg'
              />
            </picture>

            <section>
              <h2>Location</h2>
              <span>{character.location.name}</span>
            </section>

            <section>
              <h2>Origin</h2>
              <span>{character.origin.name}</span>
            </section>

            <section>
              <h2>Status</h2>
              <span>{character.status}</span>
            </section>

            <section>
              <h2>Specie</h2>
              <span>{character.species}</span>
            </section>

            <section>
              <h2>Sex</h2>
              <span>{character.gender}</span>
            </section>

            <section>
              <h2>Episodes</h2>
              <span>{character.episode.length}</span>
            </section>
          </section>
        </div>
      )}
    </div>
  );
};

export default Character;
