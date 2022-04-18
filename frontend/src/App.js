import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import NotFound from './components/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
