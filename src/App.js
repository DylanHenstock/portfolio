import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Navigation from './components/navigation';

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
          <Route exact path ="/"  index element={<Home />}/>
          <Route path="/home" index element={<Home />}/>
          <Route path="/about" index element={<About />} />
          <Route path="/contact" index element={<Contact />} />
      </Routes>
         
    </div>
  );
}

export default App;
