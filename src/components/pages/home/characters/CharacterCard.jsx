import { Link } from 'react-router-dom';

import MaleSymbol from '/assets/icons/male-symbol.svg';
import FemaleSymbol from '/assets/icons/female-symbol.svg';
import UnknownSymbol from '/assets/icons/unknown-symbol.svg';
import HumanSymbolLight from '/assets/icons/human-symbol-light.svg';
import AlienSymbol from '/assets/icons/alien-symbol.svg';

import './CharacterCard.css';

const CharacterCard = ({ gender, id, image, name, specie, status }) => {
  let genderSymbol;
  if (gender.toLowerCase() === 'male') {
    genderSymbol = MaleSymbol;
  } else if (gender.toLowerCase() === 'female') {
    genderSymbol = FemaleSymbol;
  } else {
    genderSymbol = UnknownSymbol;
  }

  let specieSymbol;
  if (specie.toLowerCase() === 'human') {
    specieSymbol = HumanSymbolLight;
  } else {
    specieSymbol = AlienSymbol;
  }

  return (
    <Link to={`/character/${id}`}>
      <article className='character-card relative border-[12px] border-neutral-300 rounded-xl w-[284px] h-[412px] bg-neutral-200 text-white shadow overflow-hidden'>
        <picture className='right-1/2 translate-x-2/4 h-full'>
          <img
            src={image}
            alt={name}
            className='h-full max-w-fit'
            loading='lazy'
          />
        </picture>

        <div className='top-4 left-4 flex items-center gap-2 py-0.5 px-2.5 rounded-lg bg-slate-700/95'>
          <div
            className={`w-3 h-3 border rounded-xl bg-neutral-400 status-${status.toLowerCase()}`}
          ></div>
          <span className='capitalize font-light'>{status}</span>
        </div>

        <picture className='right-4 bottom-4 z-[1]'>
          <img
            src={genderSymbol}
            alt={`${gender.toLowerCase()} symbol`}
            className='drop-shadow-light'
            loading='lazy'
          />
        </picture>

        <div className='bottom-0 w-full px-2 hidden items-center h-[60px] bg-slate-700/60 backdrop-blur-[1px] rounded'>
          <p className='drop-shadow-text'>{name}</p>

          <div className='flex items-center gap-[6px]'>
            <picture className='justify-center w-5'>
              <img
                src={specieSymbol}
                alt={`${specie.toLowerCase()} symbol`}
                className='drop-shadow-text'
              />
            </picture>

            <span className='drop-shadow-text text-sm'>{specie}</span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default CharacterCard;
