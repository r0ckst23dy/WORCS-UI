import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import Current from "./components/pages/current";
import Create from "./components/pages/create";
import Archived from "./components/pages/archived";
import Completed from "./components/pages/completed";
import Assign from "./components/pages/assign";
import Edit from "./components/pages/edit";
import Header from "./components/headerNavbar/header";

// TODO 
// Use axios to call on work orders for the proper component
// Use preexisting template from DB to call each work order
// Add status key to db files for axios calls 
// Make sure logic follows CRUD requirements 
// Style each component
// Make mobile friendly with media queries 

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="header-navbar">
              <Link to="/" className="header-navbar__header"><Header/></Link>
              <div className="header-navbar__navbar-links">
                <div className="header-navbar__navbar-link1">
                  <Link to="/" className="nav-link">Current</Link>
                </div>
                <div className="header-navbar__navbar-link2">
                  <Link to="/create" className="nav-link">Create </Link>
                </div>
                <div className="header-navbar__navbar-link3">
                  <Link to="/archived" className="nav-link">Archived </Link>
                </div>                  
                <div className="header-navbar__navbar-link4">
                  <Link to="/completed" className="nav-link">Completed </Link>
                </div>
                <div className="header-navbar__navbar-link5">
                  <Link to="/assign" className="nav-link">Assign </Link>
                </div>                              
              </div>
          </nav>

          <Route path="/" exact component={Current} />
          <Route path="/edit/:id" component={Edit} />
          <Route path="/create" component={Create} />
          <Route path="/completed" component={Completed} />
          <Route path="/assign" component={Assign} />
          <Route path="/archived" component={Archived} />


        </div>
      </Router>
    );
  }
}

export default App;
