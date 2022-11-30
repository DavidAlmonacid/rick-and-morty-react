import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Character from './pages/Character/Character';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/character/:characterId' element={<Character />} />
    </Routes>
  );
};

export default App;
