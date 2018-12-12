import React, { Component } from "react";
import {Container, Row, Col, Card, CardBody} from "reactstrap";
import AboutText from "../.././components/AboutText";
import TechSkills from "../.././components/TechSkills";
import SoftSkills from "../.././components/SoftSkills";
import Personal from "../.././components/Personal";
import ProfilePic from "../.././images/Joe-Profile2.jpg";
import "./About.css";

class About extends Component {

  render () {
    return (
      <div>
        <Container fluid>
        <Row>
          <Col md="2" />
          <Col md="8" sm="12">
            <h2 className="jumbo-text">About Me</h2>
            <Card>
              <CardBody>
                <img className="img-responsive" id="profile-image" src={ProfilePic} alt="profile" />
                <AboutText />
                <div className="clear-fix"></div>

                <hr id="top-hr" />
                <TechSkills />
                <hr />
                <SoftSkills />
                <hr />
                <Personal />
              </CardBody>
            </Card>
          </Col>
          <Col md="2" />
          </Row>
        </Container>
      </div>
    )
  }
}

export default About;