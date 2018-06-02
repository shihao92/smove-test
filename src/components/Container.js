import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";

import Home from './Home';

import 'bootstrap/dist/css/bootstrap.css';
import '../stylesheets/index.css';

function Container({ location }) {
  return (
    <Switch>
      <Route exact path="/" component={ Home } />
    </Switch>
  )
}

export default withRouter( Container );