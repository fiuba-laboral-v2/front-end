import React, { Fragment, FunctionComponent } from "react";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { Redirect } from "$components/Redirect";
import { useCurrentUser } from "$hooks/queries/useCurrentUser";

const Home: FunctionComponent = () => {
  const currentUser = useCurrentUser();

  if (currentUser.loading) return <Fragment/>;
  if (currentUser.error) return <Redirect to={RoutesBuilder.internalServerError}/>;

  const isLoggedIn = currentUser.data.getCurrentUser;

  return <Redirect to={isLoggedIn ? RoutesBuilder.applicant.home : RoutesBuilder.login}/>;
};

export default Home;
