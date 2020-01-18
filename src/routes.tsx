import React, { FunctionComponent } from "react";
import {
  Switch,
  Route,
  BrowserRouter
} from "react-router-dom";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import deployJSON from "$config/environment.json";

const env = (process.env.NODE_ENV || "development") as ( "production" | "staging" | "development" );
const config = deployJSON[env];
const baseName: string = config.sub_domain;

const Routes: FunctionComponent = () => (
  <BrowserRouter basename={baseName}>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
