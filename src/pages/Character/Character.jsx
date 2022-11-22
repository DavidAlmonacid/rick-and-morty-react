import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import Loading from '/assets/icons/loading-icon.svg';
import HumanSymbolDark from '/assets/icons/human-symbol-dark.svg';
import AlienSymbol from '/assets/icons/alien-symbol.svg';

const Character = () => {
  const { characterId } = useParams();
  const [character, setCharacter] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const API_CHARACTER = `https://rickandmortyapi.com/api/character/${characterId}`;

  useEffect(() => {
    const characterData = async () => {
      const response = await fetch(API_CHARACTER);
      const data = await response.json();
      console.log(data);
      setCharacter(data);

      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    };

    characterData();
  }, []);

  return (
    <div
      className={`grid justify-items-center ${
        isLoading ? 'items-center h-screen' : ''
      }`.trim()}
    >
      {isLoading ? (
        <picture>
          <img src={Loading} alt='loading icon' className='animate-spin' />
        </picture>
      ) : (
        <div className='w-full max-w-5xl'>
          <div className='flex mx-12 py-2 justify-between'>
            <Link to={'/'}>Back</Link>
          </div>

          <section className='grid grid-cols-2 place-items-center gap-x-3 gap-y-14 py-9 px-5 text-center sm:grid-cols-3'>
            <h1 className='text-3xl  font-medium sm:col-span-2'>
              {character.name}
            </h1>
            <picture className='lg:row-span-2'>
              <img
                src={character.image}
                alt={character.name}
                className='rounded-2xl shadow-lg'
              />
            </picture>

            <section>
              <h2 className='text-lg font-medium'>Location</h2>
              <span className='text-[15px] capitalize'>
                {character.location.name}
              </span>
            </section>

            <section>
              <h2 className='text-lg font-medium'>Origin</h2>
              <span className='text-[15px] capitalize'>
                {character.origin.name}
              </span>
            </section>

            <section>
              <h2 className='text-lg font-medium'>Status</h2>
              <span className='text-[15px] capitalize'>{character.status}</span>
            </section>

            <section>
              <h2 className='text-lg font-medium'>Specie</h2>
              <span className='text-[15px]'>{character.species}</span>
              <picture className='ml-2'>
                <img
                  src={HumanSymbolDark}
                  alt={`${character.species.toLowerCase()} symbol`}
                />
              </picture>
            </section>

            <section>
              <h2 className='text-lg font-medium'>Sex</h2>
              <span className='text-[15px] capitalize'>{character.gender}</span>
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
