import React, { Fragment, FunctionComponent } from "react";
import { useHistory } from "react-router-dom";
import { useApolloClient } from "@apollo/react-hooks";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { useTranslations } from "$hooks";
import { NavBar } from "./component";
import { INavBarLink, INavBarTranslations } from "./interface";
import { Redirect } from "../Redirect";
import { useCurrentUser, useLogout } from "$hooks";
import { Permissions } from "$models/Permissions";
import { CurrentUser } from "$models/CurrentUser";

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

  const getTooltipMessage = (translationKey?: "pendingProfile" | "rejectedProfile") => {
    return translationKey && translations.data[translationKey];
  };

  const currentUser = CurrentUser(currentUserResponse.data.getCurrentUser);
  let links: INavBarLink[] = [];
  if (currentUser?.applicant) {
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

  if (currentUser?.company) {
    const { jobApplications, createOffer, myOffers, myProfile } = RoutesBuilder.company;
    links = [
      {
        path: jobApplications(),
        title: translations.data.jobApplications,
        tooltipMessage: getTooltipMessage(
          Permissions.getAccessError(currentUser, jobApplications())
        )
      },
      {
        path: createOffer(),
        title: translations.data.createOffer,
        tooltipMessage: getTooltipMessage(Permissions.getAccessError(currentUser, createOffer()))
      },
      {
        path: myOffers(),
        title: translations.data.myOffers,
        tooltipMessage: getTooltipMessage(Permissions.getAccessError(currentUser, myOffers()))
      },
      {
        path: myProfile(),
        title: translations.data.myCompanyProfile,
        tooltipMessage: getTooltipMessage(Permissions.getAccessError(currentUser, myProfile()))
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
      isLoggedIn={!!currentUser}
      translations={translations.data}
      username={currentUser?.name}
    />
  );
};
