import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import MovieSearch from './Pages/MovieSearch';
import Home from './Pages/Home';

import { Route, Routes } from 'react-router-dom';
import PageNotFound from './Pages/PageNotFound';
import Favourites from './Pages/Favourites';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<MovieSearch />} />
        <Route path='/favourites' element={<Favourites />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;