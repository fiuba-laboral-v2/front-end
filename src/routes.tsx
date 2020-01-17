import React, { FunctionComponent } from "react";
import {
  Switch,
  Route,
  BrowserRouter
} from "react-router-dom";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const baseName: string = process.env.REACT_APP_SUB_DOMAIN || "/laboral";

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
