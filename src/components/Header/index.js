import React from 'react'

import logo from '../../assets/logo.png'

function Header() {
  return (
    <div className="container">
      <header className="Header">
        <div className="Header-logo">
          <img src={logo} alt="logo" />
        </div>
        <nav className="Header-menu">
          <ul>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Rooms</a>
            </li>
            <li>
              <a>Gallery</a>
            </li>
            <li>
              <a>About</a>
            </li>
          </ul>
        </nav>
        <div className="Header-book">
          <button>Book Now</button>
        </div>
      </header>
    </div>
  )
}

export default Header
