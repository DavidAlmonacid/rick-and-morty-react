const CharacterCard = ({ name, status, gender, image }) => {
  return (
    <article>
      <p>{status}</p>
      <img src={image} alt={name} />
      <p>{gender}</p>
    </article>
  );
};

export default CharacterCard;
