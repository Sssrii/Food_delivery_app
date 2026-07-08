import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("menu");
  const { getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate();

  const handleMenuClick = () => {
    setMenu("menu");
    if (window.location.pathname !== "/") {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById('explore-menu');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // wait a bit for Home to load
    } else {
      const element = document.getElementById('explore-menu');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link>

      <ul className="navbar-menu">
        <li>
          <Link to="/" onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>home</Link>
        </li>
        <li>
          <span onClick={handleMenuClick} className={menu === "menu" ? "active" : ""}>menu</span>
        </li>
        <li>
          <a href="#app-download" onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>mobile-app</a>
        </li>
        <li>
          <a href="#footer" onClick={() => setMenu("contact us")} className={menu === "contact us" ? "active" : ""}>contact us</a>
        </li>
      </ul>

      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
