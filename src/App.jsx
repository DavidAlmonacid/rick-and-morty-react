import AppHome from './components/pages/home/AppHome';
import Character from './components/pages/character/Character';
import { Route, Routes } from 'react-router-dom';

// Follow documentation
// https://blog.webdevsimplified.com/2022-07/react-router/

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<AppHome />} />
      <Route path='/character/:characterId' element={<Character />} />
    </Routes>
  );
};

export default App;
