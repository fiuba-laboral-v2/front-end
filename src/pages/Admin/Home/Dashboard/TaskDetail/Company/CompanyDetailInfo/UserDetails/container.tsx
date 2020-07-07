import React, { Fragment, FunctionComponent } from "react";
import { UserDetails } from "./component";
import { IUserDetailsContainerProps, IAdminCompanyDetails } from "./interfaces";
import { useTranslations } from "$hooks/queries";

export const UserDetailsContainer: FunctionComponent<IUserDetailsContainerProps> = (
  {
    company
  }
) => {
  const translations = useTranslations<IAdminCompanyDetails>("adminCompanyDetails");
  if (translations.loading) return <Fragment/>;
  if (translations.error) return <Fragment/>;

  return (
    <UserDetails
      company={company}
      translations={translations.data}
    />
  );
};
