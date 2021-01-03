import React, { FunctionComponent, Fragment } from "react";
import { useHistory } from "react-router-dom";
import { useTranslations, useCurrentUser } from "$hooks";
import { ChangeCurrentRoleButton } from "./component";
import { RoleName, SessionStorageRepository } from "$repositories";
import { Role } from "$models/Role";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { IContainerProps, ITranslations } from "./interfaces";

export const ChangeCurrentRoleButtonContainer: FunctionComponent<IContainerProps> = props => {
  const history = useHistory();
  const currentUser = useCurrentUser().data.getCurrentUser;
  const translations = useTranslations<ITranslations>("changeCurrentRoleButton");
  if (!currentUser) return <Fragment />;
  if (currentUser?.company) return <Fragment />;
  if (!(currentUser?.admin && currentUser?.applicant)) return <Fragment />;
  const currentRole = currentUser.getCurrentRole();

  const getNewRoleName = () => {
    if (currentRole.isApplicantRole()) return RoleName.Admin;
    if (currentRole.isAdminRole()) return RoleName.Applicant;
    throw new Error("The company current role cannot be changed");
  };

  const changeCurrentRole = () => {
    const role = new Role(getNewRoleName());
    SessionStorageRepository.saveCurrentRole(role);
    history.push(RoutesBuilder.public.home());
  };

  const getLabel = () => {
    if (!translations) return "";
    if (currentRole.isApplicantRole()) return translations.enterAsAdmin;
    if (currentRole.isAdminRole()) return translations.enterAsApplicant;
    throw new Error("The company current role cannot be changed");
  };

  return <ChangeCurrentRoleButton onClick={changeCurrentRole} label={getLabel()} {...props} />;
};
