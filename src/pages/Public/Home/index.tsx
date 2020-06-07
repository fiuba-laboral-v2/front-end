import React, { Fragment, FunctionComponent } from "react";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { Redirect } from "$components/Redirect";
import { useCurrentUser } from "$hooks/queries/useCurrentUser";

const { offerList } = RoutesBuilder.applicant;
const { jobApplications } = RoutesBuilder.company;
const { home: adminHome } = RoutesBuilder.admin;
const { internalServerError, login } = RoutesBuilder.public;

const Home: FunctionComponent = () => {
  const currentUser = useCurrentUser();

  if (currentUser.loading) return <Fragment/>;
  if (currentUser.error) return <Redirect to={internalServerError()}/>;

  if (currentUser.data.getCurrentUser?.isAdmin) return <Redirect to={adminHome()}/>;
  if (currentUser.data.getCurrentUser?.applicant) return <Redirect to={offerList()}/>;
  if (currentUser.data.getCurrentUser?.company) return <Redirect to={jobApplications()}/>;
  return <Redirect to={login()}/>;
};

export default Home;
