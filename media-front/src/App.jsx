import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { Route,Routes } from 'react-router-dom';
import Landing from './Pages/Landing';
import Home from './Pages/Home';
import Notfound from './Pages/Notfound';
import WatchHistory from './Pages/WatchHistory';

function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
          {/* localhost : 3000 - Landing Page */}
          <Route path='/' element={<Landing/>}/>
          {/* localhost : 3000/home - Home Page */}
          <Route path='/home' element={<Home/>}/>
          <Route path='/watch-history' element={<WatchHistory/>}/>
          {/* localhost : 3000............ - Not found */}
          <Route path='*' element={<Notfound/>}/>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
