import React from 'react'
import './Header.scss';
import logo from './logo.svg'


const Header = () => {
  return (
    <nav className="header">      
      <div className="logo">
        <img alt="logo" src={logo}/>
      </div>
      <div className="app_name">
        <h2>Face Detector</h2>
      </div>
      <div className="btn_group">
        <button className="btn sign_btn">Sign Out</button>
      </div>
    </nav>
  )
}

export default Header