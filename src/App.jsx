import './Styles/App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Chisono from './pages/Home copy 3';
import Blog from './pages/Home copy 2';
import Contatti from './pages/Home copy';

const App = () =>{
  return(
    <Router> 
    <div className='app'>
      <NavBar />
      <Routes>
        <Route excat path="/" element={<Home/>} />
        <Route excat path="/chi-sono" element={<Chisono/>} />
        <Route excat path="/blog" element={<Blog/>} />
        <Route excat path="/contatti" element={<Contatti/>} />

        </Routes>
      <Footer />
    </div>
    </Router>

  );
}

export default App;
