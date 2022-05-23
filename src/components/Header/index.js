import React from "react";
import { Link } from "react-router-dom"

import profile from "../Header/profile.png"

function Header() {
  return (
    <header>
      <div  className="container">
            <p className="hero-heading flex">Welcome.<br></br> My name is Ashley. <br></br> I'm a Full Stack Developer</p>
            <p></p>
              <img className =" hero-img img-fluid" src={profile}></img>
      </div>
    </header>
  )
}

export default Header;