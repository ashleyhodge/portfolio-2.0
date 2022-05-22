import React from "react";
import { Link } from "react-router-dom"


function Nav() {
  return (
    <nav className="navbar navbar-expand-sm fixed-top">
      <div className="container">
        <Link to="/">
          <h1 className="name">Ashley Hodge</h1>
        </Link>
        <div>
          <ul className="navbar-nav py-4">
            <li className="nav-item">
              <Link to="/portfolio" className="nav-link link-light">
                <p className="nav">Portfolio</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link link-light" href="#about-me">
                <p className="nav">About</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact-me" className="nav-link link-light" href="#contact-me">
                <p className="nav">Contact</p>
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link link-light" href="#contact-me">
                <p className="nav4">Resume</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav