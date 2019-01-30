import React, {Component} from "react";
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import Home from "./components/RouteComponents/Home";
import About from "./components/RouteComponents/About";
import Gallery from "./components/RouteComponents/Gallery";
import Menu from "./components/RouteComponents/Menu";
import {browserHistory} from 'react-router';

class App extends Component {
  render() {
      return (
        <Router>
          <div className="App">
            <Route exact path="/" component={Home} />
            <Route path="/menu" component={Menu} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/about" component={About} />
          </div>
        </Router>
      );
  }
}

export default App;
