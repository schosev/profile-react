import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Row } from "reactstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import './App.css';

const App = () => (
  <Router>
    <div id="container">
      <Header />
      <div className="main-div">
      <Switch>
        <Route exact path="/" component={About} />
        {/* <Route path={process.env.PUBLIC_URL + '/'} component={About} /> */}
        <Route exact path="/portfolio" component={Portfolio} />
        {/* <Route path={process.env.PUBLIC_URL + '/portfolio'} component={Portfolio} /> */}
      </Switch>
      </div>

      <Row>
        <div className="space"></div>
      </Row>

      <Footer />
    </div>
  </Router>

);

export default App;
