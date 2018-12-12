import React from "react";
import {Nav, NavItem, NavLink } from "reactstrap";
import GitHub from "../.././images/github.png";
import LinkedIn from "../.././images/linkedin.png";
import "./Footer.css";

const Footer = () => (
  <div>
  <footer className="footer">
    <div className="container">
      <div className="text-center footer-text">&copy; Copyright 2018 Joseph Hobbs
        <Nav className="social-icons">
          <NavItem>
            <NavLink href="https://github.com/schosev" target="_blank">
              <img src={GitHub} alt="GitHub icon" className="social" />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://www.linkedin.com/in/joseph-hobbs-912861156/" target="_blank">
              <img src={LinkedIn} className="social" alt="LinkedIn icon" />
            </NavLink>
          </NavItem>
        </Nav>
      </div>
    </div>
  </footer>
  </div>
);

export default Footer;