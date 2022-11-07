const CharacterCard = ({ name, status, gender, image }) => {
  return (
    <article className='relative border-[12px] border-black rounded-xl w-[272px] h-[425px] overflow-hidden'>
      <p className='absolute z-[1]'>{status}</p>
      <img
        src={image}
        alt={name}
        className='absolute right-1/2 translate-x-2/4 h-full max-w-fit'
      />
      <p className='absolute'>{gender}</p>
    </article>
  );
};

export default CharacterCard;
