import React, { Fragment, FunctionComponent } from "react";
import { useHistory } from "react-router-dom";
import { useApolloClient } from "@apollo/client";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { useCurrentUser, useLogout, useTranslations } from "$hooks";
import { NavBar } from "./component";
import { INavBarContainerProps, INavBarTranslations } from "./interface";
import { Redirect } from "../Redirect";
import { NavBarLinks } from "$models/NavBarLinks";

export const NavBarContainer: FunctionComponent<INavBarContainerProps> = props => {
  const history = useHistory();
  const client = useApolloClient();
  const translations = useTranslations<INavBarTranslations>("navBar");
  const currentUserResponse = useCurrentUser();
  const { logout } = useLogout();

  if (!translations || currentUserResponse.loading) return <Fragment />;
  if (currentUserResponse.error) {
    return <Redirect to={RoutesBuilder.public.internalServerError()} />;
  }

  const currentUser = currentUserResponse.data.getCurrentUser;
  const links = currentUser ? NavBarLinks.create(currentUser, translations) : [];

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
      translations={translations}
      username={currentUser?.name}
      {...props}
    />
  );
};
