import Nav from 'react-bootstrap/Nav';
import {NavLink} from 'react-router-dom';
import '../App.css';
// import dblogo from '../img/dblogo.svg'
import dblogoblue from '../img/dblogoblue.svg'

const Navigation = () => {
  return (
  <Nav>
      <div class="logo">
        <img src={dblogoblue} alt=""/>
      </div>
      <div class="navigation">
        {/* <NavLink to ='/Home'><div class="navlink">Home</div></NavLink> */}
        <NavLink to ='/About'><div class="navlink">About</div></NavLink>
        <NavLink to ='/Web'><div class="navlink">Web</div></NavLink>
        <NavLink to ='/Product'><div class="navlink">Product</div></NavLink>
        <NavLink to ='/Brand'><div class="navlink">Brand</div></NavLink>
      </div>
  </Nav>
  );
}

export default Navigation;