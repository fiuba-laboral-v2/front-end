import React, { Fragment, FunctionComponent, useState } from "react";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { useQuery } from "$hooks";
import { ME } from "$queries";
import { Redirect } from "$components/Redirect";

const Home: FunctionComponent = () => {
  const [loggedIn, setLoggedIn] = useState(true);

  const { loading } = useQuery(ME, {
    errorHandlers: {
      AuthenticationError: () => setLoggedIn(false)
    }
  });

  if (loading) return <Fragment/>;

  return <Redirect to={loggedIn ? RoutesBuilder.applicant.home : RoutesBuilder.login}/>;
};

export default Home;
