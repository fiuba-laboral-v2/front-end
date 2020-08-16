import React, { FunctionComponent } from "react";
import { EmailField } from "$components/Fields/EmailField";
import { NameField } from "$components/Fields/NameField";
import { IUserFieldsProps } from "./interfaces";

export const UserFields: FunctionComponent<IUserFieldsProps> = (
  {
    email,
    name,
    surname,
    translations
  }
) => (
  <>
    <EmailField name={email} label={translations.email} />
    <NameField name={name} label={translations.name} />
    <NameField name={surname} label={translations.surname} />
  </>
);
