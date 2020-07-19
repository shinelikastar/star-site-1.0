import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

import "./App.css";

import WorkPage from "./PageComponents/WorkPage/WorkPage";
import AboutPage from "./PageComponents/AboutPage/AboutPage";

function App() {
  const history = createBrowserHistory();

  return (
    <Router history={history}>
      <Switch>
        <Route path="/work" component={WorkPage}></Route>
        <Route path="/writing"></Route>
        <Route path="/" component={AboutPage}></Route>
      </Switch>
    </Router>
  );
}

export default App;
