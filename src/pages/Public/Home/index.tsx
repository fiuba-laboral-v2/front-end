import React, { Fragment, FunctionComponent } from "react";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { CurrentUser } from "$models/CurrentUser";
import { Redirect } from "$components/Redirect";
import { useCurrentUser } from "$hooks/queries/useCurrentUser";

const { offerList } = RoutesBuilder.applicant;
const { home: adminHome } = RoutesBuilder.admin;
const { internalServerError, login } = RoutesBuilder.public;

const Home: FunctionComponent = () => {
  const currentUserResponse = useCurrentUser();
  if (currentUserResponse.loading) return <Fragment/>;
  if (currentUserResponse.error) return <Redirect to={internalServerError()}/>;

  const currentUser = CurrentUser(currentUserResponse.data.getCurrentUser);
  if (currentUser?.isAdmin()) return <Redirect to={adminHome()}/>;
  if (currentUser?.isApplicant()) return <Redirect to={offerList()}/>;
  if (currentUser?.isCompany()) return <Redirect to={currentUser.company().getHomeRoute()}/>;
  return <Redirect to={login()}/>;
};

export default Home;
