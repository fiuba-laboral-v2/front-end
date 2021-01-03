import React, { Fragment, FunctionComponent } from "react";
import { useTranslations, useCurrentUser } from "$hooks";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { IContainerProps, ITranslations } from "./interfaces";
import { Actions } from "./component";

export const ActionsContainer: FunctionComponent<IContainerProps> = ({ companyUser, ...props }) => {
  const translations = useTranslations<ITranslations>("companyUserActions");
  const currentUserResponse = useCurrentUser();
  if (currentUserResponse.loading || currentUserResponse.error) return <Fragment />;
  if (!translations) return <Fragment />;

  const hideChangePasswordIcon = () =>
    currentUserResponse.data.getCurrentUser?.uuid !== companyUser.userUuid;

  return (
    <Actions
      {...props}
      translations={translations}
      hideChangePasswordIcon={hideChangePasswordIcon}
      changePasswordLink={RoutesBuilder.company.editPassword()}
      editUserLink={RoutesBuilder.company.editUser()}
    />
  );
};
