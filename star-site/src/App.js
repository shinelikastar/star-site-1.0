import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { createBrowserHistory } from "history";

import Navbar from "./Navbar/Navbar";
import config from "./Navbar/navbar_config";
import "./App.css";

function App() {
  const innerApp = (
    <div className="App">
      <header className="App-header">
        <Navbar config={config}></Navbar>
      </header>
    </div>
  );

  const history = createBrowserHistory();

  return (
    <Router history={history}>
      <Switch>
        <Route path="/">{innerApp}</Route>
        <Route path="/about">{innerApp}</Route>
        <Route path="/work">{innerApp}</Route>
        <Route path="/writing">{innerApp}</Route>
      </Switch>
    </Router>
  );
}

export default App;
