import React from 'react'
import logo from '../assets/godine_logo.png'
import './header.css'

function Header() {
  return (
    <div className="header">
        <img className="godine-logo" src={logo} alt="GoDine'"/>
        <h1 className="heading">GoDine</h1>
        <div className="alignment-fixer" />
    </div>
  );
}

export default Header;