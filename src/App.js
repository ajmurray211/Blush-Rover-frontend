import { Route, Routes } from 'react-router';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Packages from './pages/Packages';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/packages' element={<Packages />} />
        <Route path='/menu' element={<Home />} />
        <Route path='/faq' element={<Home />} />
        <Route path='/contact' element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
