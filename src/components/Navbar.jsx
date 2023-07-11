import React from 'react';
import  logo from'../images/logo.jpg';
import menu from '../images/menu-outline.svg';
import './Navbar.css';

export default function Navbar() {
  function toggleMenu() {
    document.querySelector('.sidebar').classList.toggle('show');
  }
  return (
    <div className='navbar'>
      <div className="logo">
        {/*==== Logo Here ====*/}
        <img src={logo} alt="logo-img" />
      </div>
      <div className="title">
        {/* ==== Titile Here ==== */}
        Sorting Visualizer
      </div>
      <div className="menu">
        {/* ==== Menu Here ==== */}
        <div onClick={toggleMenu} className="button">
            <button className="menu-button"><img src={menu} alt="menu-button" /></button>
        </div>
      </div>
    </div>
  )
}
