import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import Web from './pages/web';
import Product from './pages/product';
import Brand from './pages/brand';
import Contact from './pages/contact';
import Navigation from './components/navigation';

function App() {
  return (
    <div class="App">
      <Navigation />
      <Routes class="routes">
          <Route exact path ="/"  index element={<Home />}/>
          <Route path="/home" index element={<Home />}/>
          <Route path="/web" index element={<Web />} />
          <Route path="/product" index element={<Product />} />
          <Route path="/brand" index element={<Brand />}/>
          <Route path="/contact" index element={<Contact />} />
      </Routes>
         
    </div>
  );
}

export default App;
