import React, { useState } from "react";
import {Card} from "react-bootstrap"

function Projects() {
  const projects = [
    {
      name: 'Access Tennessee',
      description: 'This applications lets users interact with their favorite local businesses. They are able to communicate with business owners about what kind of accommodations might be needed for certain disabilities or impairments. In turn, the business is also able to provide information about accommodations they already provide and how to access those accommodations.'
    },
    {
      name: 'Sour Screens',
      description: "Sour Screens is a fun application that allows users to search for an actor and receive a list of movies they've starred in starting with the lowest rated. Although this application has no practical use, it can lead to some interesting discoveries."
    }
  ];
  const renderCard = (card, i) => {
    return(
      <Card style={{ width: 'auto'}} key={i} className="box">
      <Card.Img variant="top" className="img-fluid" src={require(`../Portfolio/project-images/${i}.jpg`)}  />
        <Card.Body>
          <Card.Title>{card.name}</Card.Title>
          <Card.Text>
            {card.description}
          </Card.Text>
        </Card.Body>
    </Card>
    )
  }
  return(
    <div className="grid">{projects.map(renderCard)}</div>
  )
}

export default Projects;