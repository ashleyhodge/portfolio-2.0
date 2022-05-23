import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap"


function Projects() {
  const projects = [
    {
      name: 'Access Tennessee',
      link: 'https://access-tennesee.herokuapp.com/',
      description: 'This applications lets users interact with their favorite local businesses. They are able to communicate with business owners about what kind of accommodations might be needed for certain disabilities or impairments. In turn, the business is also able to provide information about accommodations they already provide and how to access those accommodations.'
    },
    {
      name: 'Sour Screens',
      link: 'https://d1sl.github.io/symmetrical-robot/',
      description: "Sour Screens is a fun application that allows users to search for an actor and receive a list of movies they've starred in starting with the lowest rated. Although this application has no practical use, it can lead to some interesting discoveries.",
    }
  ];
  const RenderCard = (card, i) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
    <div className="col-lg-4 col-sm-6 mb-4 box" style={{width: '20rem'}} border="secondary" id={i} key={i} >
        <img variant="top" className="img-fluid project-img" onClick={handleShow} src={require(`../Portfolio/project-images/${i}.jpg`)} />
        <div className="container">
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title className="text-center" style={{color: '#000000'}} >{card.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <img variant="top" className="img-fluid" src={require(`../Portfolio/project-gifs/${i}.gif`)} />
          <div style={{color: '#000000'}}>
                {card.description}
                <a className="plus" href={card.link} target="_blank"><i className="fas fa-plus fa-2x"></i></a>
          </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
        </div>
      </div>
    )
  }
  return(
    <div className="grid">{projects.map(RenderCard)}</div>
  )
}

export default Projects;