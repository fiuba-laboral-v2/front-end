import React, { FunctionComponent } from "react";

import { ICompany } from "$interfaces/Company";

import { UserDetails } from "./component";
import { useTranslations } from "$hooks/queries";
import { IUser } from "$interfaces/User";

export const UserDetailsContainer: FunctionComponent<IUserDetailsContainerProps> = (
  { company, user }
) => {
  const translations = useTranslations<IAdminCompanyDetails>("adminCompanyDetails");
  const translation = translations.loading || translations.error ? "" : translations.data.cuit;
  return <UserDetails company={company} user={user} translation={translation}/>;
};

export interface IUserDetailsContainerProps {
  company: ICompany;
  user: IUser;
}

interface IAdminCompanyDetails {
  cuit: string;
}
