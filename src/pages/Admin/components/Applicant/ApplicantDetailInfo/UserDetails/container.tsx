import React, { FunctionComponent, Fragment } from "react";
import { UserDetails } from "./component";
import { IUserDetailsContainerProps, IUserDetailsTranslations } from "./interfaces";
import { useTranslations } from "$hooks/queries";

export const UserDetailsContainer: FunctionComponent<IUserDetailsContainerProps> = ({
  applicant
}) => {
  const translations = useTranslations<IUserDetailsTranslations>("adminApplicantDetails");
  const padron = translations ? translations.padron : "";
  if (!applicant) return <Fragment />;
  return <UserDetails applicant={applicant} translations={{ padron }} />;
};
