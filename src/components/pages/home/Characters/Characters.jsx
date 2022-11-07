import CharacterCard from './CharacterCard';

const Characters = ({ characters }) => {
  return (
    <section className='grid gap-2'>
      {characters.map((character) => (
        <CharacterCard
          key={character.id}
          name={character.name}
          status={character.status}
          gender={character.gender}
          image={character.image}
        />
      ))}
    </section>
  );
};

export default Characters;
