import React, { FunctionComponent } from "react";
import { useHistory } from "react-router-dom";
import { useTranslations } from "$hooks";
import { ChangeCurrentRoleButton } from "./component";
import { CurrentRole, SessionStorageRepository } from "$repositories";
import { Role } from "$models/Role";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { IContainerProps, ITranslations } from "./interfaces";

export const ChangeCurrentRoleButtonContainer: FunctionComponent<IContainerProps> = props => {
  const history = useHistory();
  const currentRole = SessionStorageRepository.getCurrentRole();
  const translations = useTranslations<ITranslations>("changeCurrentRoleButton");

  const getNewRole = () => {
    if (currentRole.isApplicantRole()) return CurrentRole.admin;
    if (currentRole.isAdminRole()) return CurrentRole.applicant;
    throw new Error("The company current role cannot be changed");
  };

  const changeCurrentRole = () => {
    const role = new Role(getNewRole());
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
