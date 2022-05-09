import React from "react";
import accessTN from "../Portfolio/access-tennessee.jpg"
import sourScreens from "../Portfolio/sourscreens.png"
import Modal1 from "../Modal1";

function Portfolio() {
  return (
    <section className="page-section" id="portfolio">
      <div className="box">
        <div className="container">
          <div className="text-center">
            <h1 className="title">Portfolio</h1>
            <h4 className="description">This consists of projects that I have completed, as well as projects that I will continue to work on!</h4>
          </div>
        </div>
        <div className="row text-center card-group">
          <div className="col-lg-3 col-sm-6 mx-4 card">
            <div className="portfolio-item">
                <img className="img-fluid" src={(accessTN)} alt="..."></img>
            </div>
            <div className="caption">
              <div className="caption-heading">Access Tennessee</div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 mx-4 card">
            <div className="portfolio-item">
                <img className="img-fluid" src={(sourScreens)} alt="..."></img>
              </div>
              <div className="caption">
                <div className="caption-heading">Sour Screens</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio;