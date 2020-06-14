import React, { Fragment, FunctionComponent } from "react";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { Redirect } from "$components/Redirect";
import { useCurrentUser } from "$hooks/queries/useCurrentUser";

const { offerList } = RoutesBuilder.applicant;
const { home: adminHome } = RoutesBuilder.admin;
const { internalServerError, login } = RoutesBuilder.public;

const Home: FunctionComponent = () => {
  const currentUser = useCurrentUser();
  if (currentUser.loading) return <Fragment/>;
  if (currentUser.error) return <Redirect to={internalServerError()}/>;

  if (currentUser.isAdmin()) return <Redirect to={adminHome()}/>;
  if (currentUser.isApplicant()) return <Redirect to={offerList()}/>;
  if (currentUser.isCompany()) return <Redirect to={currentUser.company().getHomeRoute()}/>;
  return <Redirect to={login()}/>;
};

export default Home;
