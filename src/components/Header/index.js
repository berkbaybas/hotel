import React, { useState } from 'react'

import HamburgerMenu from '../Icons/HamburgerMenu'
import CloseIcon from '../Icons/CloseIcon'
import logo from '../../assets/logo.png'

function Header() {
  const [menuIsActive, setMenuIsActive] = useState(false)

  return (
    <div className="container">
      <header className="Header">
        <div className="Header-logo">
          <img src={logo} alt="logo" />
        </div>
        <nav className={`Header-menu ${menuIsActive ? 'active' : ''}`}>
          <div className="Header-menu-close">
            <CloseIcon
              onClick={() => {
                setMenuIsActive(!menuIsActive)
              }}
            />
          </div>
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
            <li className="Header-book-hamburger">
              <button>Book Now</button>
            </li>
          </ul>
        </nav>
        <div className="Header-book">
          <button>Book Now</button>
        </div>
        <button
          className="Header-hamburger"
          onClick={() => {
            setMenuIsActive(!menuIsActive)
          }}
        >
          <HamburgerMenu className="icon" />
        </button>
      </header>
    </div>
  )
}

export default Header
