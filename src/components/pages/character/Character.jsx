import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Loading from '/assets/icons/loading-icon.svg';

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
          <section className='grid grid-cols-2 place-items-center gap-x-3 gap-y-14 px-5 text-center sm:grid-cols-3'>
            <h1 className='text-3xl  font-medium sm:col-span-2'>{character.name}</h1>

            <picture className='lg:row-span-2'>
              <img
                src={character.image}
                alt={character.name}
                className='rounded-2xl shadow-lg'
              />
            </picture>

            <section>
              <h2 className='text-lg font-medium'>Location</h2>
              <span className='text-[15px]'>{character.location.name}</span>
            </section>

            <section>
              <h2 className='text-lg font-medium'>Origin</h2>
              <span className='text-[15px]'>{character.origin.name}</span>
            </section>

            <section>
              <h2 className='text-lg font-medium'>Status</h2>
              <span className='text-[15px]'>{character.status}</span>
            </section>

            <section>
              <h2 className='text-lg font-medium'>Specie</h2>
              <span className='text-[15px]'>{character.species}</span>
            </section>

            <section>
              <h2 className='text-lg font-medium'>Sex</h2>
              <span className='text-[15px]'>{character.gender}</span>
            </section>

            <section>
              <h2 className='text-lg font-medium'>Episodes</h2>
              <span className='text-[15px]'>{character.episode.length}</span>
            </section>
          </section>
        </div>
      )}
    </div>
  );
};

export default Character;
