import React, { Fragment, FunctionComponent, useEffect, useRef, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useApolloClient } from "@apollo/client";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { useCurrentUser, useLogout, useTranslations } from "$hooks";
import { NavBar } from "./component";
import { INavBarContainerProps, INavBarTranslations } from "./interfaces";
import { NavBarLinks } from "$models/NavBarLinks";
import { some } from "lodash";
import { SessionStorageRepository } from "$repositories";
import { useSnackbar } from "notistack";

export const NavBarContainer: FunctionComponent<INavBarContainerProps> = props => {
  const history = useHistory();
  const location = useLocation();
  const client = useApolloClient();
  const translations = useTranslations<INavBarTranslations>("navBar");
  const currentUserResponse = useCurrentUser();
  const { logout } = useLogout();
  const { closeSnackbar } = useSnackbar();
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

  const currentUser = currentUserResponse.data.getCurrentUser;
  if (!translations || !currentUser) return <Fragment />;
  const links = currentUser ? NavBarLinks.create(currentUser, translations) : [];

  const onLogOut = async () => {
    closeSnackbar();
    await client.clearStore();
    await logout();
    SessionStorageRepository.clear();
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
