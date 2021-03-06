import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap"
import { Route } from "react-router-dom";


function Projects() {
  const projects = [
    {
      name: 'Access Tennessee',
      link: 'https://access-tennesee.herokuapp.com/',
      description: 'This applications lets users interact with their favorite local businesses. They are able to communicate with business owners about what kind of accommodations might be needed for certain disabilities or impairments. In turn, the business is also able to provide information about accommodations they already provide and how to access those accommodations.',
      github: 'https://github.com/ashleyhodge/Access-Tennessee'
    },
    {
      name: 'Sour Screens',
      link: 'https://d1sl.github.io/symmetrical-robot/',
      description: "Sour Screens is a fun application that allows users to search for an actor and receive a list of movies they've starred in starting with the lowest rated. Although this application has no practical use, it can lead to some interesting discoveries.",
      github: 'https://github.com/ashleyhodge/symmetrical-robot'
    },
    {
      name: 'Hanzai Watchers',
      link: 'https://hanzai-watchers.herokuapp.com/',
      description: " Hanzai Watchers or Crime Watchers is an application made with React on the frontend and MongoDB on the backend that allows users to connect with other users around the world about crime information in their area. It also allows users to submit crime tips and search for crime in their zip code. The goal of this app is to make people feel like they have a voice. If you see a crime being committed or feel like you or someone else could be in trouble this is a perfect way to get in touch and figure out the best course of action whether it be turning to other users for guidance or submitting a tip.",
      github: 'https://github.com/ashleyhodge/anime_crime-watchers'
    }
  ];
  const RenderCard = (card, i, props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
    <div id={i} key={i}  >
      <div className="d-flex justify-content-center mb-5">
        <img className="item" onClick={handleShow} src={require(`../Portfolio/project-images/${i}.jpg`)} />
      </div>
        
        <div className="container">
        <Modal className="special_modal text-center" show={show} onHide={handleClose} {...props} centered styles={{overlay: { background: "FFFF00" }}}>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              {card.name}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <img className="img-fluid" src={require(`../Portfolio/project-gifs/${i}.gif`)} />
          <div className="pt-4">
            {card.description}
          </div>
          </Modal.Body>
          <Modal.Footer>
            <Button className="btn">
              <a href={card.link} style={{textDecoration: 'none', color: '#ffffff'}} target="_blank">Check it out!</a>
            </Button>
            <Button >
            <a href={card.github} style={{textDecoration: 'none', color: '#ffffff'}} target="_blank">Github</a>
            </Button>
          </Modal.Footer>
        </Modal>
        </div>
      </div>
    )
  }
  return(
    <div style={{marginBottom: '100px'}}>{projects.map(RenderCard)}</div>
  )
}

export default Projects;