import React, { FunctionComponent } from "react";
import { DniField } from "$components/Fields";
import { PasswordField } from "$components/Fields/PasswordField";
import { IApplicantCredentialsFieldsProps } from "./interfaces";

export const ApplicantCredentialsFields: FunctionComponent<IApplicantCredentialsFieldsProps> = (
  {
    translations
  }
) => (
  <>
    <DniField name="user.dni" label={translations.dni} />
    <PasswordField
      name="user.password"
      label={translations.password}
      autoComplete="new-password"
      validate={false}
    />
  </>
);
