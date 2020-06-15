import React, { Fragment, FunctionComponent } from "react";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { CurrentUser } from "$models/CurrentUser";
import { Router } from "$models/Router";
import { Redirect } from "$components/Redirect";
import { useCurrentUser } from "$hooks/queries/useCurrentUser";

const { internalServerError, login } = RoutesBuilder.public;

const Home: FunctionComponent = () => {
  const currentUserResponse = useCurrentUser();
  if (currentUserResponse.loading) return <Fragment/>;
  if (currentUserResponse.error) return <Redirect to={internalServerError()}/>;

  const currentUser = CurrentUser(currentUserResponse.data.getCurrentUser);
  if (currentUser) return <Redirect to={Router.getHomeRoute(currentUser)}/>;
  return <Redirect to={login()}/>;
};

export default Home;
