import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Hero from './Hero';
import About from './About';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Hero />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
