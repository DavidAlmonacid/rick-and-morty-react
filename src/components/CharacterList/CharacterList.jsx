import CharacterCard from '../CharacterCard/CharacterCard';

const Characters = ({ characters }) => {
  return (
    <section className='flex flex-wrap justify-center gap-x-9 gap-y-10 mx-auto py-9 max-w-7xl'>
      {characters.map((character) => (
        <CharacterCard
          key={character.id}
          gender={character.gender}
          id={character.id}
          image={character.image}
          name={character.name}
          specie={character.species}
          status={character.status}
        />
      ))}
    </section>
  );
};

export default Characters;
