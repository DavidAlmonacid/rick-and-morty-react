import CharacterCard from './CharacterCard';

const Characters = ({ characters }) => {
  return (
    <div>
      {characters.map((character) => {
        <CharacterCard
          key={character.id}
          name={character.name}
          status={character.status}
          gender={character.gender}
        />;
      })}
    </div>
  );
};

export default Characters;
