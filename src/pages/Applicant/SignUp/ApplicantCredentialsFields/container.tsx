import React, { Fragment, FunctionComponent } from "react";
import { useTranslations } from "$hooks";
import { ApplicantCredentialsFields } from "./component";
import { IApplicantCredentialsFieldsTranslations } from "./interfaces";

export const ApplicantCredentialsFieldsContainer: FunctionComponent = () => {
  const translations = useTranslations<IApplicantCredentialsFieldsTranslations>("applicantCredentialsFields");
  if (!translations) return <Fragment/>;

  return (
    <ApplicantCredentialsFields
      translations={translations}
    />
  );
};
