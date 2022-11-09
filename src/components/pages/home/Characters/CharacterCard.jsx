import './styles/CharacterCard.css';

const CharacterCard = ({ name, status, gender, image }) => {
  return (
    <article
      className='relative border-[12px] border-neutral-300 rounded-xl w-[272px] h-[425px] overflow-hidden'
      id='character-card'
    >
      <img
        src={image}
        alt={name}
        className='right-1/2 translate-x-2/4 h-full max-w-fit'
      />
      <p className='top-3 left-3 flex items-center gap-2'>
        <div className='w-3 h-3 rounded-xl bg-[green]'></div>
        <span className='capitalize'>{status}</span>
      </p>
      <p className='right-3 bottom-3'>{gender}</p>
      <p className='bottom-0 w-full h-12 bg-slate-500 hidden'>{name}</p>
    </article>
  );
};

export default CharacterCard;
