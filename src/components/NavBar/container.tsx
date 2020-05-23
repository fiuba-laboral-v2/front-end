import React, { Fragment, FunctionComponent } from "react";
import { useHistory } from "react-router-dom";
import { useApolloClient } from "@apollo/react-hooks";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { useTranslations } from "$hooks";
import { Session } from "$models/Session";
import { NavBar } from "./component";
import { INavBarTranslations } from "./interface";
import { Redirect } from "../Redirect";
import { useCurrentUser } from "$hooks/queries/useCurrentUser";

export const NavBarContainer: FunctionComponent = () => {
  const history = useHistory();
  const client = useApolloClient();
  const translations = useTranslations<INavBarTranslations>("navBar");
  const currentUser = useCurrentUser();

  if (translations.loading || currentUser.loading) return <Fragment/>;
  if (translations.error || currentUser.error) {
    return <Redirect to={RoutesBuilder.internalServerError}/>;
  }

  const onLogOut = async () => {
    Session.logout();
    await client.clearStore();
    history.push(RoutesBuilder.login);
  };

  return (
    <NavBar
      logOut={onLogOut}
      isLoggedIn={!!currentUser.data}
      translations={translations.data}
      username={currentUser.data.getCurrentUser?.name || ""}
    />
  );
};
