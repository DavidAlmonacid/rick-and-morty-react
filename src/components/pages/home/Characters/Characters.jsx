import CharacterCard from './CharacterCard';

const Characters = ({ characters }) => {
  return (
    <section className='flex flex-wrap justify-center gap-x-9 gap-y-10 mx-auto py-9 max-w-7xl'>
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
