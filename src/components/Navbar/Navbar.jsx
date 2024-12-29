import React,{useState} from 'react';
import "./Navbar.css";
import {Link} from "react-router-dom";

const Navbar = ({showLogin,setShowLogin}) => {

  const[menu,setMenu] = useState("");

  return (
    <nav className='navbar navbar-expand-lg navbar-light justify-content-between'>
      <div className="nav-logo">
        <Link className='nav-link' to='/'>
          <h1>Tomato.</h1>
        </Link>
        
      </div>
      <div className="nav-elements">
        <ul>
          <Link className='nav-link' to='/'><li onClick={() => setMenu("home")} className={menu==="home"?"active":""}><h3>home</h3></li></Link>
          <Link className='nav-link' to='/'><li onClick={() => setMenu("menu")} className={menu==="menu"?"active":""}><h3>menu</h3></li></Link>
          <li onClick={() => setMenu("mobile")} className={menu==="mobile"?"active":""}><h3>mobile-app</h3></li>
          <li onClick={() => setMenu("contact")} className={menu==="contact"?"active":""}><h3>contact us</h3></li>
        </ul>
      </div>
      <div className="nav-links">
        <ul>
          <li>
            <img src="./images/search.png" className='image' alt="not found..." />
          </li>
          <li className='basket'>
            <Link to='/cart'><img src="./images/bag.png" className='image' alt="not found..." /></Link>
            <div className="dot"></div>
          </li>
          <li>
            <button onClick={() => setShowLogin(true)}>Sign Up</button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
