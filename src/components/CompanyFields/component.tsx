import React, { FunctionComponent } from "react";

import TextInput from "$components/TextInput";
import { FormikValidator } from "$models/FormikValidator";
import { ICompanyFieldsProps } from "./interface";

import {
  validateCuit,
  validateEmail,
  validateName,
  validateURL
} from "validations-fiuba-laboral-v2";

export const CompanyFields: FunctionComponent<ICompanyFieldsProps> = (
  {
    translations
  }
) => {
  return (
    <>
      <TextInput
        name="companyName"
        label={translations.companyName}
        validate={FormikValidator({ validator: validateName, mandatory: true })}
      />
      <TextInput
        name="cuit"
        label={translations.cuit}
        validate={FormikValidator({ validator: validateCuit, mandatory: true })}
      />
      <TextInput
        name="email"
        label={translations.email}
        validate={FormikValidator({ validator: validateEmail, mandatory: true })}
      />
      <TextInput
        name="slogan"
        label={translations.slogan}
      />
      <TextInput
        name="description"
        label={translations.description}
      />
      <TextInput
        name="website"
        label={translations.website}
        validate={FormikValidator({ validator: validateURL, mandatory: true })}
      />
    </>
  );
};
