import React, { FunctionComponent } from "react";
import { Redirect } from "react-router-dom";
import { RoutesBuilder } from "$src/routesBuilder";

const Home: FunctionComponent = () => (
  <Redirect to={RoutesBuilder.applicant.list()}/>
);

export default Home;
