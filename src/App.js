import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Hero from './Hero';
import About from './About';
import Contact from './Contact';
import ProductView from './ProductView';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Hero />} />
            <Route path='/about' element={<About />} />
            <Route path='/product' element={<ProductView/>}/>
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
