import React, { FunctionComponent } from "react";
import { UserDetails } from "./component";
import { IUserDetailsContainerProps, IUserDetailsTranslations } from "./interfaces";
import { useTranslations } from "$hooks/queries";

export const UserDetailsContainer: FunctionComponent<IUserDetailsContainerProps> = (
  {
    applicant
  }
) => {
  const translations = useTranslations<IUserDetailsTranslations>("adminApplicantDetails");
  const padron = translations.loading || translations.error ? "" : translations.data.padron;

  return (
    <UserDetails
      applicant={applicant}
      translations={{ padron }}
    />
  );
};
