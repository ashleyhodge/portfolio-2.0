import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


function Nav() {
  return (
    <nav className="navbar navbar-expand-sm fixed-top">
      <div className="container">
        <a className="navbar-brand link-light" href="/"><h1>Ashley Hodge</h1></a>
        <div>
          <ul className="navbar-nav py-4">
            <li className="nav-item"><a className="nav-link link-light"  href="#portfolio"><p>Portfolio</p></a></li>
            <li className="nav-item"><a className="nav-link link-light" href="#about-me"><p>About Me</p></a></li>
            <li className="nav-item"><a className="nav-link link-light" href="#contact-me"><p>Contact Me</p></a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav