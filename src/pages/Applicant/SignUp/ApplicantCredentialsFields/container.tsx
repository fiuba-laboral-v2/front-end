import React, { Fragment, FunctionComponent } from "react";
import { useTranslations } from "$hooks";
import { ApplicantCredentialsFields } from "./component";

export const ApplicantCredentialsFieldsContainer: FunctionComponent = () => {
  const translations = useTranslations<IApplicantCredentialsFieldsTranslations>("applicantCredentialsFields");
  if (!translations) return <Fragment/>;

  return (
    <ApplicantCredentialsFields
      dni={{
        name: "user.dni",
        label: translations.dni
      }}
      password={{
        name: "user.password",
        label: translations.password,
        validate: false
      }}
    />
  );
};

interface IApplicantCredentialsFieldsTranslations {
  dni: string;
  password: string;
}
