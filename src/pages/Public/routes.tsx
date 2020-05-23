import React, { FunctionComponent } from "react";
import { Route, Switch } from "react-router-dom";
import { InternalServerError } from "./InternalServerError";
import NotFound from "./NotFound";
import { LogIn } from "./LogIn";
import { Register } from "./Register";
import Home from "./Home";

export const PublicRoutes: FunctionComponent = () =>
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/register" component={Register}/>
    <Route exact path="/login" component={LogIn}/>
    <Route path="/error" component={InternalServerError}/>
    <Route component={NotFound}/>
  </Switch>;
