import { Route, Routes } from 'react-router';
import './App.css';
import CutsomNav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Packages from './pages/Packages';
import Menu from './pages/Menu';
import Faq from './pages/Faq';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <CutsomNav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/packages' element={<Packages />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
