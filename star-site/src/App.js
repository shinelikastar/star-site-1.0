import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { createBrowserHistory } from "history";

import Navbar from "./Navbar/Navbar";
import config from "./Navbar/navbar_config";
import girl from "./assets/diva.png";
import "./App.css";

function App() {
  const innerApp = (
    <div className="App">
      <header className="App-header">
        <div className="Girl-container">
          <img src={girl} className="Girl-diva" />
          <div className="Welcome-container">
            <p className="DisplayText">hi, it's star!</p>
            <p>welcome 2 an online representation of me</p>
          </div>
        </div>
        <Navbar config={config}></Navbar>
      </header>
    </div>
  );

  const history = createBrowserHistory();

  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={App}>
          {innerApp}
        </Route>
        <Route path="/about" component={App}>
          {innerApp}
        </Route>
        <Route path="/work">{innerApp}</Route>
        <Route path="/writing">{innerApp}</Route>
      </Switch>
    </Router>
  );
}

export default App;
