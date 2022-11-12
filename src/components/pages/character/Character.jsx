import { useParams } from 'react-router-dom';

const Character = () => {
  const { characterId } = useParams();

  return <div>Character {characterId}</div>;
};

export default Character;
