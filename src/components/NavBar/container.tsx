import React, { FunctionComponent } from "react";
import { useHistory } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { NavBar } from "./component";
import { GET_TRANSLATIONS, ME } from "$queries";
import { IUser } from "$interfaces/User";
import { LoadingSpinner } from "../LoadingSpinner";

export const NavBarContainer: FunctionComponent = () => {
  const history = useHistory();
  const { data: { getTranslations } = { getTranslations: [] } } = useQuery(
    GET_TRANSLATIONS,
    { variables: { paths: [ "companies", "applicants", "applicant.signUp.title" ] }
  });
  const { data: { me } = { me: {} as IUser }, error, loading } = useQuery(ME);

  if (loading) return <LoadingSpinner/>;

  const logOut = () => {
    localStorage.removeItem("token");
    history.push(RoutesBuilder.login);
  };

  const [ companies, applicants, signUp ] = getTranslations;

  return (
    <NavBar
      logOut={logOut}
      logged={!error}
      companies={companies}
      applicants={applicants}
      signUp={signUp}
      username={me.email}
    />
  );
};
