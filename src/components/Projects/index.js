import React from "react";
import {Card, Accordion} from "react-bootstrap"


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
    },
    {
      name: 'Crime Watchers',
      github: 'anime-crime-watchers',
      description: 'TBD'
    }
  ];
  const renderCard = (card, i) => {
    return(
    <Card className="col-lg-4 col-sm-6 mb-4 box" style={{width: '20rem'}} border="secondary" id={i} key={i} >
        <Card.Img variant="top" className="img-fluid img "  src={require(`../Portfolio/project-images/${i}.jpg`)} />
        <Card.Body>
          <Accordion className="accordion" flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header className="text-center card-title">{card.name}</Accordion.Header>
              <Accordion.Body>
                {card.description}
                <a className="plus" href={card.link} target="_blank"><i className="fas fa-plus fa-2x"></i></a>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Card.Body>
      </Card>
    )
  }
  return(
    <div className="grid">{projects.map(renderCard)}</div>
  )
}

export default Projects;