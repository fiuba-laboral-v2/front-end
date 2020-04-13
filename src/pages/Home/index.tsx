import React, { FunctionComponent } from "react";
import { Redirect } from "react-router-dom";
import { RoutesBuilder } from "$models/RoutesBuilder";

const Home: FunctionComponent = () => (
  <Redirect to={RoutesBuilder.applicant.home()}/>
);

export default Home;
