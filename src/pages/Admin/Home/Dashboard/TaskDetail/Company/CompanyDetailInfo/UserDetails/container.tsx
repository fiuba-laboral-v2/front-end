import React, { FunctionComponent } from "react";
import { ICompany } from "$interfaces/Company";
import { UserDetails } from "../../../UserDetails";
import { useTranslations } from "$hooks/queries";

export const UserDetailsContainer: FunctionComponent<IUserDetailsContainerProps> = (
  {
    company
  }
) => {
  const translations = useTranslations<IAdminCompanyDetails>("adminCompanyDetails");
  const cuit = translations.loading || translations.error ? "" : translations.data.cuit;
  const [user] = company.users;
  return (
    <UserDetails
      user={user}
      additionalInfoTitle={cuit}
      additionalInfo={company.cuit}
    />
  );
};

export interface IUserDetailsContainerProps {
  company: ICompany;
}

interface IAdminCompanyDetails {
  cuit: string;
}
