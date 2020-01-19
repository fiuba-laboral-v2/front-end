import React, { FunctionComponent } from "react";
import {
  Switch,
  Route,
  BrowserRouter
} from "react-router-dom";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import deployJSON from "$config/environment.json";

const env = (process.env.NODE_ENV || "development") as ("production" | "staging");
let baseName: string;
if (env === "production" || env === "staging") {
  const config = deployJSON[env];
  baseName = config.sub_domain;
} else {
  baseName = "/";
}

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
