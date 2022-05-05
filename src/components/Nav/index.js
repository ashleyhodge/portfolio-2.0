import React from "react";



function Nav() {
  return (
    <nav className="navbar navbar-expand-sm fixed-top">
      <div className="container">
        <a className="navbar-brand link-light" href="/">
          <h1 className="name">Ashley Hodge</h1>
        </a>
        <div>
          <ul className="navbar-nav py-4">
            <li className="nav-item">
              <a className="nav-link link-light"  href="#portfolio">
                <p className="nav">Portfolio</p>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link link-light" href="#about-me">
                <p className="nav">About</p>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link link-light" href="#contact-me">
                <p className="nav">Contact</p>
              </a>
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