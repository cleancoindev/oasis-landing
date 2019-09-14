import React from "react"
import './header.css'
import Nav from './nav'

const Header = () => (
  <header>
    <span id="title">Oasis</span>
    <Nav>
      <a href="#">Trade</a>
      <a href="#">Borrow</a>
      <a href="#">Save</a>
    </Nav>
  </header>
)

export default Header
