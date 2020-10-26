import React, { Fragment, FunctionComponent, useEffect, useRef, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useApolloClient } from "@apollo/client";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { useCurrentUser, useLogout, useTranslations } from "$hooks";
import { NavBar } from "./component";
import { INavBarContainerProps, INavBarTranslations } from "./interface";
import { Redirect } from "../Redirect";
import { NavBarLinks } from "$models/NavBarLinks";
import { some } from "lodash";

export const NavBarContainer: FunctionComponent<INavBarContainerProps> = props => {
  const history = useHistory();
  const location = useLocation();
  const client = useApolloClient();
  const translations = useTranslations<INavBarTranslations>("navBar");
  const currentUserResponse = useCurrentUser();
  const { logout } = useLogout();
  const bottomEl = useRef<HTMLDivElement>(null);
  const navBarEl = useRef<HTMLDivElement>(null);
  const [canScroll, setCanScroll] = useState(true);
  useEffect(() => {
    if (!bottomEl.current) return;
    const observer = new IntersectionObserver(
      entries => setCanScroll(!some(entries, "isIntersecting")),
      { threshold: 0.8 }
    );
    observer.observe(bottomEl.current);
  });

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
      currentPath={location.pathname}
      bottomEl={bottomEl}
      navBarEl={navBarEl}
      canScroll={canScroll}
      {...props}
    />
  );
};
