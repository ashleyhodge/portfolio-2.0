import React, { useState } from "react";
import {Card, Button} from "react-bootstrap"


function Projects() {
  const projects = [
    {
      name: 'Access Tennessee',
      github: 'Access-Tennessee',
      description: 'This applications lets users interact with their favorite local businesses. They are able to communicate with business owners about what kind of accommodations might be needed for certain disabilities or impairments. In turn, the business is also able to provide information about accommodations they already provide and how to access those accommodations.'
    },
    {
      name: 'Sour Screens',
      github: 'symmetrical-robot',
      description: "Sour Screens is a fun application that allows users to search for an actor and receive a list of movies they've starred in starting with the lowest rated. Although this application has no practical use, it can lead to some interesting discoveries.",

    }
  ];
  const renderCard = (card, i) => {
    return(
      <Card className="col-lg-4 col-sm-6 mb-4 box " id={i} key={i} >
          
        <Card.Img variant="top" className="img-fluid img "  src={require(`../Portfolio/project-images/${i}.jpg`)} />
        <Card.Body>
          <Card.Title className="text-center">{card.name}</Card.Title>
          <Card.Text className="text-center">{card.description}</Card.Text>
              <a className="plus" href={`https://github.com/ashleyhodge/${card.github}`} target="_blank"><i className="fas fa-plus fa-2x"></i></a>
        </Card.Body>
      </Card>
    )
  }
  return(
    <div className="grid">{projects.map(renderCard)}</div>
  )
}

export default Projects;