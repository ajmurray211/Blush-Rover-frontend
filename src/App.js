import { Route, Routes } from 'react-router';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <h1>Hello World</h1>
      <Footer/>
    </div>
  );
}

export default App;
