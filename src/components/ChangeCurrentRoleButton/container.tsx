import React, { FunctionComponent, Fragment } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useTranslations, useCurrentUser } from "$hooks";
import { ChangeCurrentRoleButton } from "./component";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { IContainerProps, ITranslations } from "./interfaces";

export const ChangeCurrentRoleButtonContainer: FunctionComponent<IContainerProps> = props => {
  const history = useHistory();
  const location = useLocation();
  const currentUser = useCurrentUser().data.getCurrentUser;
  const translations = useTranslations<ITranslations>("changeCurrentRoleButton");
  if (!currentUser) return <Fragment />;
  const currentRole = currentUser.getCurrentRole(location.pathname);

  const changeCurrentRole = () => {
    if (currentRole.isAdminRole()) history.push(RoutesBuilder.applicant.myProfile());
    if (currentRole.isApplicantRole()) history.push(RoutesBuilder.admin.home());
  };

  const getLabel = () => {
    if (!translations) return "";
    if (currentRole.isApplicantRole()) return translations.enterAsAdmin;
    if (currentRole.isAdminRole()) return translations.enterAsApplicant;
    throw new Error("The company current role cannot be changed");
  };

  return <ChangeCurrentRoleButton onClick={changeCurrentRole} label={getLabel()} {...props} />;
};
