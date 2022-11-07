import CharacterCard from './CharacterCard';

const Characters = ({ characters }) => {
  return (
    <section>
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