import React, { Fragment, FunctionComponent } from "react";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { calculateCurrentRole } from "$models/calculateCurrentRole";
import { Router } from "$models/Router";
import { Redirect } from "$components/Redirect";
import { useCurrentUser } from "$hooks";

const { internalServerError, login } = RoutesBuilder.public;

const Home: FunctionComponent = () => {
  const currentUserResponse = useCurrentUser();
  if (currentUserResponse.loading) return <Fragment/>;
  if (currentUserResponse.error) return <Redirect to={internalServerError()}/>;

  const currentUser = currentUserResponse.data.getCurrentUser;
  if (currentUser) {
    calculateCurrentRole(currentUser);
    return <Redirect to={Router.home(currentUser)}/>;
  }
  return <Redirect to={login()}/>;
};

export default Home;
