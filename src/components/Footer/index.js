import React from "react";
import { ThreeDotsVertical } from "react-bootstrap-icons";

function Footer() {
  return(
    <footer className="footer py-4">
      <div className="container">
        <div className="row text-center">
          <div>Let's Connect!</div>
          <div>
            <a className="btn btn-social mx-2" href="https://github.com/ashleyhodge" aria-label="Twitter">
              <div>
                <i class="fab fa-github change"></i>
              </div>
            </a>
            <a className="btn btn-social mx-2" href="https://twitter.com/Ashley__Hodge" aria-label="Twitter">
              <div>
                <i class="fa-brands fa-twitter change"></i>
              </div>
            </a>
            <a className="btn btn-social mx-2" href="https://www.facebook.com/ashley.hodge.7165" aria-label="Facebook">
              <div>
                <i class="fab fa-facebook-f change"></i>
              </div>
            </a>
            <a className="btn btn-social mx-2" href="https://www.linkedin.com/in/ashley-hodge-227285138/" aria-label="LinkedIn">
              <div>
                <i class="fab fa-linkedin-in change"></i>
              </div>
              
            </a>
          </div>
          <div className="copy">Copyright &copy; Ashley Hodge 2022</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;