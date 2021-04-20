import React from 'react'
import './Header.css';
import logo from './logo.svg'


const Header = () => {
  return (
    <nav>
      <div className="logo">
        <img alt="logo" src={logo}/>
      </div>
      <button className="btn sign_btn">Sign Out</button>
    </nav>
  )
}

export default Header