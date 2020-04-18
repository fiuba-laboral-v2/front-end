import React, { FunctionComponent, Fragment } from "react";
import { useHistory } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { useTranslations } from "$hooks/translations";
import { ME } from "$queries";
import { Session } from "$models/Session";
import { IUser } from "$interfaces/User";

import { NavBar } from "./component";

export const NavBarContainer: FunctionComponent = () => {
  const history = useHistory();
  const { translations, loading: loadingTranslations } = useTranslations("navBar");

  const { data: { me } = { me: {} as IUser }, error, loading } = useQuery(ME);

  if (loading || loadingTranslations) return <Fragment/>;

  const onLogOut = () => {
    Session.logout();
    history.push(RoutesBuilder.login);
  };

  return (
    <NavBar
      logOut={onLogOut}
      isLoggedIn={!error}
      translations={translations}
      username={me.email}
    />
  );
};
