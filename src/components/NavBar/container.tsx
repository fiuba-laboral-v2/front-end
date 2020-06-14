import React, { Fragment, FunctionComponent } from "react";
import { useHistory } from "react-router-dom";
import { useApolloClient } from "@apollo/react-hooks";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { useTranslations } from "$hooks";
import { NavBar } from "./component";
import { INavBarLink, INavBarTranslations } from "./interface";
import { Redirect } from "../Redirect";
import { useCurrentUser, useLogout } from "$hooks";

export const NavBarContainer: FunctionComponent = () => {
  const history = useHistory();
  const client = useApolloClient();
  const translations = useTranslations<INavBarTranslations>("navBar");
  const currentUser = useCurrentUser();
  const logout = useLogout();

  if (translations.loading || currentUser.loading) return <Fragment/>;
  if (translations.error || currentUser.error) {
    return <Redirect to={RoutesBuilder.public.internalServerError()}/>;
  }

  let links: INavBarLink[] = [];
  if (currentUser.isApplicant()) {
    links = [
      {
        path: RoutesBuilder.applicant.offerList(),
        title: translations.data.jobOffers
      },
      {
        path: RoutesBuilder.applicant.myProfile(),
        title: translations.data.myProfile
      },
      {
        path: RoutesBuilder.applicant.companies(),
        title: translations.data.companies
      }
    ];
  }
  if (currentUser.isCompany()) {
    const company = currentUser.company();
    links = [
      {
        path: RoutesBuilder.company.jobApplications(),
        title: translations.data.jobApplications,
        disabled: company.isRouteDisabled(RoutesBuilder.company.jobApplications())
      },
      {
        path: RoutesBuilder.company.createOffer(),
        title: translations.data.createOffer,
        disabled: company.isRouteDisabled(RoutesBuilder.company.createOffer())
      },
      {
        path: RoutesBuilder.company.myOffers(),
        title: translations.data.myOffers,
        disabled: company.isRouteDisabled(RoutesBuilder.company.myOffers())
      },
      {
        path: RoutesBuilder.company.myProfile(),
        title: translations.data.myCompanyProfile,
        disabled: company.isRouteDisabled(RoutesBuilder.company.myProfile())
      }
    ];
  }

  const onLogOut = async () => {
    await client.clearStore();
    await logout();
    history.push(RoutesBuilder.public.login());
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
