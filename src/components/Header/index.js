import React from "react";
import { Link } from "react-router-dom"

function Header() {
  return (
    <header className="masthead">
      <div  className="container">
          <div>
            <p className="masthead-subheading">Welcome!</p>
            <Link to="/portfolio">
              <p className="masthead-body">Take a look!</p>
            </Link>
          </div>
      </div>
    </header>
  )
}

export default Header;