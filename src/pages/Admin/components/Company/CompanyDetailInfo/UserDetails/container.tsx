import React, { FunctionComponent } from "react";
import { UserDetails } from "./component";
import { IUserDetailsContainerProps, IAdminCompanyDetails } from "./interfaces";
import { useTranslations } from "$hooks/queries";

export const UserDetailsContainer: FunctionComponent<IUserDetailsContainerProps> = ({
  company
}) => {
  const translations = useTranslations<IAdminCompanyDetails>("adminCompanyDetails");
  return <UserDetails hidden={!company} company={company} translations={translations} />;
};
