import React from 'react'
import "./Header.css";

const Header = () => {
  return (
    <div>
      {/* <!--nav bar--> */}
      <header>
        <div className="nav-link">
          <a href="#HOME">HOME</a>
        </div>
        <div className="nav-link">
          <a href="#ABOUT">ABOUT</a>
        </div>
        <div className="nav-link">
          <a href="#CONTACT">CONTACT</a>
        </div>
        <div className="nav-link">
          <a href="#SERVICE">SERVICE</a>
        </div>
      </header>
    </div>
  )
}

export default Header
