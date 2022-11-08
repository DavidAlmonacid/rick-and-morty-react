import './styles/CharacterCard.css';

const CharacterCard = ({ name, status, gender, image }) => {
  return (
    <article
      className='relative border-[12px] border-black rounded-xl w-[272px] h-[425px] overflow-hidden'
      id='character-card'
    >
      <img
        src={image}
        alt={name}
        className='right-1/2 translate-x-2/4 h-full max-w-fit'
      />
      <p>{status}</p>
      <p>{gender}</p>
      <p className='bottom-0 w-full h-12 bg-slate-500 hidden'>{name}</p>
    </article>
  );
};

export default CharacterCard;
