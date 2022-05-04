import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Nav() {
  return (
    <header>
      <div className="name">
        <h1>Ashley Hodge</h1>
      </div> 
      <nav>
        <ul>
          <li>
            <a>About Me</a>
          </li>
          <li>
            <a>Projects</a>
          </li>
          <li>
            <a>Contact Me</a>
          </li>
        </ul>
      </nav>
      <a>Resume</a>
    </header>
  )
}

export default Nav