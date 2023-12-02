
import {React} from 'react'
import { Navbar } from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Work } from './components/Work';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="App">
     
          <Navbar />
          <Hero/>
          <About/>
          <Skills/>
          <Work/>
          <Contact/>
       
      
    </div>
  );
}

export default App;