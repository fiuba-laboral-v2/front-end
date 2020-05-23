import React, { Fragment, FunctionComponent } from "react";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { Redirect } from "$components/Redirect";
import { useCurrentUser } from "$hooks/queries/useCurrentUser";

const { offerList } = RoutesBuilder.applicant;
const { internalServerError, login } = RoutesBuilder.public;

const Home: FunctionComponent = () => {
  const currentUser = useCurrentUser();

  if (currentUser.loading) return <Fragment/>;
  if (currentUser.error) return <Redirect to={internalServerError}/>;

  const isLoggedIn = currentUser.data.getCurrentUser;

  return <Redirect to={isLoggedIn ? offerList : login}/>;
};

export default Home;
