import React, { Component } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Main from "../../views/Main";
import Header from '../Header/Header.jsx'
import Details from '../../views/Details'
import "./App.scss";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <Header title={"SWStarter"} />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/details/:name" component={Details} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
