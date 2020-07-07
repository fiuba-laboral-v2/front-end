import React, { FunctionComponent } from "react";

import { ICompany } from "$interfaces/Company";

import { UserDetails } from "./component";
import { useTranslations } from "$hooks/queries";

export const UserDetailsContainer: FunctionComponent<IUserDetailsContainerProps> = (
  { company }
) => {
  const translations = useTranslations<IAdminCompanyDetails>("adminCompanyDetails");
  const translation = translations.loading || translations.error ? "" : translations.data.cuit;
  const [user] = company.users;

  return <UserDetails company={company} user={user} translation={translation}/>;
};

export interface IUserDetailsContainerProps {
  company: ICompany;
}

interface IAdminCompanyDetails {
  cuit: string;
}
