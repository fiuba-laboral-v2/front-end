import React, { Fragment, FunctionComponent } from "react";
import { useHistory } from "react-router-dom";
import { useApolloClient } from "@apollo/react-hooks";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { useTranslations } from "$hooks";
import { NavBar } from "./component";
import { INavBarTranslations } from "./interface";
import { Redirect } from "../Redirect";
import { useCurrentUser, useLogout } from "$hooks";
import { NavBarBuilder } from "$models/NavBarBuilder";
import { INavBarLink } from "$models/NavBarBuilder/Interfaces";

export const NavBarContainer: FunctionComponent = () => {
  const history = useHistory();
  const client = useApolloClient();
  const translations = useTranslations<INavBarTranslations>("navBar");
  const currentUserResponse = useCurrentUser();
  const logout = useLogout();

  if (translations.loading || currentUserResponse.loading) return <Fragment/>;
  if (translations.error || currentUserResponse.error) {
    return <Redirect to={RoutesBuilder.public.internalServerError()}/>;
  }

  const currentUser = currentUserResponse.data.getCurrentUser;
  let links: INavBarLink[] = [];
  if (currentUser) links = NavBarBuilder.getLinks(currentUser!, translations.data);

  const onLogOut = async () => {
    await client.clearStore();
    await logout();
    history.push(RoutesBuilder.public.login());
  };

  return (
    <NavBar
      logOut={onLogOut}
      links={links}
      isLoggedIn={!!currentUser}
      translations={translations.data}
      username={currentUser?.name}
    />
  );
};
