import React, { Fragment, FunctionComponent } from "react";
import { useHistory } from "react-router-dom";
import { useApolloClient } from "@apollo/react-hooks";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { useTranslations } from "$hooks";
import { Session } from "$models/Session";
import { NavBar } from "./component";
import { INavBarLink, INavBarTranslations } from "./interface";
import { Redirect } from "../Redirect";
import { useCurrentUser } from "$hooks/queries/useCurrentUser";

export const NavBarContainer: FunctionComponent = () => {
  const history = useHistory();
  const client = useApolloClient();
  const translations = useTranslations<INavBarTranslations>("navBar");
  const currentUser = useCurrentUser();

  if (translations.loading || currentUser.loading) return <Fragment/>;
  if (translations.error || currentUser.error) {
    return <Redirect to={RoutesBuilder.public.internalServerError}/>;
  }

  let links: INavBarLink[] = [];
  if (currentUser.data.getCurrentUser?.applicant) {
    links = [
      { path: RoutesBuilder.applicant.offerList, title: translations.data.jobOffers }
    ];
  }
  if (currentUser.data.getCurrentUser?.company) {
    links = [
      { path: RoutesBuilder.company.jobApplications, title: translations.data.jobApplications },
      { path: RoutesBuilder.company.createOffer, title: translations.data.createOffer }
    ];
  }

  const onLogOut = async () => {
    Session.logout();
    await client.clearStore();
    history.push(RoutesBuilder.public.login);
  };

  return (
    <NavBar
      logOut={onLogOut}
      links={links}
      isLoggedIn={!!currentUser.data.getCurrentUser}
      translations={translations.data}
      username={currentUser.data.getCurrentUser?.name}
    />
  );
};
