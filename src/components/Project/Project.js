import React from "react";
import { Col, Card, CardBody, CardImg, CardLink } from "reactstrap";

const Project = props => (
  <Col lg="4" md="6" sm="6" xs="12">
    <Card className="card-port">
      <CardImg className="card-img-top" src={props.image} alt={props.alt} />
      <CardBody className="port-card-body text-center">
        {props.name}
      </CardBody>
      <div className="animated pulse hover-text">
        <p className="skill-port">Skills: </p>
        <p>{props.skills}</p>
        <p>
          <CardLink href={props.website} target="_blank">Visit the website</CardLink>
        </p>
        <p>
          <CardLink href={props.code} target="_blank">See the code</CardLink>
        </p>
      </div>
    </Card>
  </Col>
)

export default Project;