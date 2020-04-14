import React, { FunctionComponent } from "react";
import { useHistory } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { GET_TRANSLATIONS, ME } from "$queries";
import { Session } from "$models/Session";
import { IUser } from "$interfaces/User";

import { NavBar } from "./component";

export const NavBarContainer: FunctionComponent = () => {
  const history = useHistory();
  const { data: { getTranslations } = { getTranslations: [] } } = useQuery(
    GET_TRANSLATIONS,
    {
      variables:
        {
          paths:
            [
              "companies",
              "applicants",
              "jobOffers",
              "applicant.signUp.title",
              "logIn",
              "logOut"
            ]
        }
    }
  );
  const { data: { me } = { me: {} as IUser }, error, loading } = useQuery(ME);

  if (loading) return <div/>;

  const onLogOut = () => {
    Session.logout();
    history.push(RoutesBuilder.login);
  };

  const [ companies, applicants, jobOffers, signUp, logIn, logOut ] = getTranslations;

  return (
    <NavBar
      logOut={onLogOut}
      isLoggedIn={!error}
      translations={{
        companies,
        applicants,
        jobOffers,
        signUp,
        logIn,
        logOut
      }}
      username={me.email}
    />
  );
};
