import React, { Component } from "react";
import { Container, Row, Col, Card } from "reactstrap";
import Project from "../.././components/Project";
import Hangman from "../.././images/hangman_game.jpg";
import StarWars from "../.././images/star-wars.jpg";
import Recycling from "../.././images/recycling.jpg";
import Waterfall from "../.././images/waterfall2.jpg";
import Nyt from "../.././images/nyt.jpg";
import Cat from "../.././images/cat.jpeg";
import "./Portfolio.css";

class Portfolio extends Component {

  render () {
    return (
      <div>
        <Container fluid>
        <Row>
          <Col md="2" />
          <Col md="8" sm="12">
          <h2 className="jumbo-text">Projects</h2>
          <Card id="port-main-card">
            <Row className="port-row">
            <Project
              image={Hangman} 
              alt="Hangman"
              name="Hangman"
              skills="HTML, CSS, Javascript, Bootstrap"
              website="https://schosev.github.io/hangman-game/"
              code="https://github.com/schosev/hangman-game" />
              
            <Project
              image={StarWars} 
              alt="Star Wars"
              name="Star Wars RPG"
              skills="HTML, CSS, Javascript, Jquery"
              website="https://schosev.github.io/week-4-game/"
              code="https://github.com/schosev/week-4-game"  />

            <Project
              image={Recycling} 
              alt="Recycling Icon"
              name="Disposal Finder"
              skills="API, AJAX, Firebase, google maps, HTML, CSS, Materialize, Javascript, Jquery"
              website="https://schosev.github.io/recycling_project/"
              code="https://github.com/schosev/recycling_project" />
            <Project
              image={Waterfall} 
              alt="waterfall"
              name="Waterfall Clicky Game"
              skills="React, HTML, CSS, Bootstrap, Javascript"
              website="https://schosev.github.io/click-game/"
              code="https://github.com/schosev/click-game" />

            <Project 
              image={Nyt}
              alt="New York Times"
              name="NYT Article Scrapper"
              skills="React, API, Node, Express, MongoDB, Mongoose, Heroku, HTML, CSS, Bootstrap, Javascript"
              website="https://frozen-lowlands-61002.herokuapp.com/"
              code="https://github.com/schosev/nyt-react" />

            <Project 
              image={Cat}
              alt="Cat"
              name="Pet Purfect"
              skills="React, API, Node, Express, MySQL, Sequelize, firebase, HTML, CSS, Javascript, Bootstrap, Heroku"
              website="https://petpurfect.herokuapp.com/"
              code="https://github.com/ggaeth/pet-care-project" />
            </Row>
          </Card>
        </Col>
      </Row>
      </Container>
      </div>
    )
  }
}

export default Portfolio;