import React, { Fragment, FunctionComponent } from "react";
import { useHistory } from "react-router-dom";
import { useTranslations, useCurrentUser } from "$hooks";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { IContainerProps, ITranslations } from "./interfaces";
import { Actions } from "./component";

export const ActionsContainer: FunctionComponent<IContainerProps> = ({ companyUser, ...props }) => {
  const history = useHistory();
  const translations = useTranslations<ITranslations>("companyUserActions");
  const currentUserResponse = useCurrentUser();
  if (currentUserResponse.loading || currentUserResponse.error) return <Fragment />;
  if (!translations) return <Fragment />;

  const hideChangePasswordIcon = () =>
    currentUserResponse.data?.getCurrentUser?.uuid !== companyUser.userUuid;

  const onClickChangePasswordIcon = () => history.push(RoutesBuilder.company.editPassword());

  return (
    <Actions
      {...props}
      translations={translations}
      hideChangePasswordIcon={hideChangePasswordIcon}
      onClickChangePasswordIcon={onClickChangePasswordIcon}
    />
  );
};
