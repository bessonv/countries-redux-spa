import { Route, Routes } from 'react-router-dom';

import { Main } from './components/Main';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { Details } from './pages/Details';
import { NotFound } from './pages/NotFound';

function App() {
  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/country/:name" element={<Details />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Main>
    </>
  )
}

export default App;
