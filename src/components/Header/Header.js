import React, { Component } from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Modal, ModalHeader, ModalBody } from "reactstrap";
import LinkedIn from "../.././images/linkedin.png";
import "./Header.css";

class Header extends Component {

  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.toggle = this.toggle.bind(this);

    this.state = {
      collapsed: true,
      modal: false
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div id="header">
        <Navbar dark expand="md">
          <NavbarBrand href="/" className="mr-auto" id="name">Joseph Hobbs</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className="nav-item nav-link active" href="/">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="active" href="/portfolio/">Portfolio</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="active" href="#" onClick={this.toggle}>Contact</NavLink>
              </NavItem>
              </Nav>
          </Collapse>
        </Navbar>

        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Contact Me</ModalHeader>
          <ModalBody>
            <p>
              <span className="contact-title">Email:</span>

              <NavLink className="contact-link" href="mailto:jhobbs1978@hotmail.com" target="_top">jhobbs1978@hotmail.com</NavLink>
            </p>
            <p>
              <span className="contact-title">Phone:</span> 816-716-6224
            </p>
            <p>
              <NavLink className="contact-link" href="https://www.linkedin.com/in/joseph-hobbs-912861156/" target="_blank">
                <span className="contact-title">LinkedIn </span>
                <img src={LinkedIn} alt="linkedin icon" />
              </NavLink>
            </p>
          </ModalBody>
        </Modal>

      </div>
  )};
};

export default Header;