import React, { Fragment, FunctionComponent } from "react";
import { useHistory } from "react-router-dom";
import { useApolloClient, useQuery } from "@apollo/react-hooks";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { useTranslations } from "$hooks/useTranslations";
import { ME } from "$queries";
import { Session } from "$models/Session";
import { IUser } from "$interfaces/User";

import { NavBar } from "./component";
import { INavBarTranslations } from "./interface";

export const NavBarContainer: FunctionComponent = () => {
  const history = useHistory();
  const client = useApolloClient();
  const translations = useTranslations<INavBarTranslations>("navBar");
  const { data: { me } = { me: {} as IUser }, error, loading } = useQuery(ME);

  if (translations.loading || loading) return <Fragment/>;
  if (translations.error) return <Fragment/>;

  const onLogOut = async () => {
    Session.logout();
    await client.clearStore();
    history.push(RoutesBuilder.login);
  };

  return (
    <NavBar
      logOut={onLogOut}
      isLoggedIn={!error}
      translations={translations.data}
      username={me.email}
    />
  );
};
