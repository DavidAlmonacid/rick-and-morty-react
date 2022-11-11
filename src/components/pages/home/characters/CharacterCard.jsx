import MaleSymbol from '/assets/icons/male-symbol.svg';
import FemaleSymbol from '/assets/icons/female-symbol.svg';
import UnknownSymbol from '/assets/icons/unknown-symbol.svg';
import './CharacterCard.css';

const CharacterCard = ({ name, status, gender, image }) => {
  let genderSymbol;

  if (gender.toLowerCase() == 'male') {
    genderSymbol = MaleSymbol;
  } else if (gender.toLowerCase() == 'female') {
    genderSymbol = FemaleSymbol;
  } else {
    genderSymbol = UnknownSymbol;
  }

  return (
    <article className='character-card relative border-[12px] border-neutral-300 rounded-xl w-[272px] h-[425px] text-white overflow-hidden'>
      <img
        src={image}
        alt={name}
        className='right-1/2 translate-x-2/4 h-full max-w-fit'
      />
      <div className='top-4 left-4 flex items-center gap-2 py-0.5 px-2.5 rounded-lg bg-slate-700/95'>
        <div
          className={`w-3 h-3 border rounded-xl bg-neutral-400 status-${status.toLowerCase()}`}
        ></div>
        <span className='capitalize font-light'>{status}</span>
      </div>
      <p className='right-4 bottom-4 z-[1]'>
        <img
          src={genderSymbol}
          alt={`${gender.toLowerCase()} symbol`}
          className='drop-shadow-light'
        />
      </p>
      <p className='bottom-0 w-full h-12 bg-slate-500 hidden'>{name}</p>
    </article>
  );
};

export default CharacterCard;
