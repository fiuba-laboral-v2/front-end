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
  const iconEl = useRef<SVGSVGElement>(null);
  const [canScroll, setCanScroll] = useState(true);
  useEffect(() => {
    if (!bottomEl.current) return;
    const observer = new IntersectionObserver(
      entries => {
        if (!iconEl.current) return;
        setCanScroll(!some(entries, "isIntersecting"));
        iconEl.current.style.visibility = "visible";
      },
      { threshold: 0.8 }
    );
    observer.observe(bottomEl.current);
    return () => observer.disconnect();
  });

  if (!translations || currentUserResponse.loading) return <Fragment />;
  if (currentUserResponse.error) {
    return <Redirect to={RoutesBuilder.public.internalServerError()} />;
  }

  const currentUser = currentUserResponse.data.getCurrentUser;
  const links = currentUser ? NavBarLinks.create(currentUser, translations) : [];

  if (!currentUser) return <Fragment />;

  const onLogOut = async () => {
    await client.clearStore();
    await logout();
    history.push(RoutesBuilder.public.login());
  };

  return (
    <NavBar
      logOut={onLogOut}
      links={links}
      translations={translations}
      username={currentUser?.name}
      currentPath={location.pathname}
      bottomEl={bottomEl}
      navBarEl={navBarEl}
      iconEl={iconEl}
      canScroll={canScroll}
      {...props}
    />
  );
};
