import { Route, Routes } from 'react-router';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/packages' element={<Home />} />
        <Route path='/menu' element={<Home />} />
        <Route path='/faq' element={<Home />} />
        <Route path='/contact' element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
