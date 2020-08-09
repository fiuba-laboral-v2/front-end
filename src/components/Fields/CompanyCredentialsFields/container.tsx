import React, { Fragment, FunctionComponent } from "react";
import { useTranslations } from "$hooks";
import { CompanyCredentialsFields } from "./component";

export const CompanyCredentialsFieldsContainer: FunctionComponent = () => {
  const translations = useTranslations<IApplicantCredentialsFieldsTranslations>("companyCredentialsFields");
  if (!translations) return <Fragment />;

  return (
    <CompanyCredentialsFields
      password={{
        name: "user.password",
        label: translations.password,
        validate: true
      }}
      passwordConfirm={{
        name: "user.passwordConfirm",
        label: translations.passwordConfirm,
        validate: false
      }}
    />
  );
};

interface IApplicantCredentialsFieldsTranslations {
  password: string;
  passwordConfirm: string;
}
