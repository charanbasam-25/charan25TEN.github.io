import './App.css';
import Header from './components/Header';
import About from './components/About';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
