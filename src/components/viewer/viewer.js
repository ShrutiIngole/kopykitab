import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import About from './about';
import Sample from './sample';

import './viewer.css';

const Viewer = () => {
    return (
      <div className="viewer">
        <Router>
          <nav className="nav-top">
              <NavLink to="/About" className="nav-link">
              About
              </NavLink>
              <NavLink to="/Sample" className="nav-link">
              Sample
              </NavLink>
          </nav>
          <Switch>
            <Route path="/About">
              <About />
            </Route>
            <Route path="/Sample">
              <Sample />
            </Route>
          </Switch>
        </Router>
        <div className="button-section">
                <button className="button orange white-back">Add to cart</button>
                <button className="button orange-grad">Buy this eBook</button>
            </div>
        </div>
    )
}

export default Viewer;