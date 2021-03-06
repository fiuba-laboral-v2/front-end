import React, { Fragment, FunctionComponent } from "react";
import { useTranslations } from "$hooks";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { IContainerProps, ITranslations } from "./interfaces";
import { Actions } from "./component";

export const ActionsContainer: FunctionComponent<IContainerProps> = ({ admin, ...props }) => {
  const translations = useTranslations<ITranslations>("adminsActions");
  if (!translations) return <Fragment />;

  return (
    <Actions
      {...props}
      admin={admin}
      translations={translations}
      editUserLink={RoutesBuilder.admin.editAdmin(admin.uuid)}
      deactivateAccountLink={RoutesBuilder.admin.deactivateAdminAccount(admin.uuid)}
      activateAccountLink={RoutesBuilder.admin.activateAdminAccount(admin.uuid)}
    />
  );
};
