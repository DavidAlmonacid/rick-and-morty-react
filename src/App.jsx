import { Route, Routes } from 'react-router-dom';
import AppHome from './pages/Home/Home';
import Character from './pages/Character/Character';
import Layout from './components/layout/Layout';

// Follow documentation
// https://blog.webdevsimplified.com/2022-07/react-router/

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<AppHome />} />
        <Route path='/character/:characterId' element={<Character />} />
      </Routes>
    </Layout>
  );
};

export default App;
