import React, { FunctionComponent } from "react";

import { TextInput } from "$components/TextInput";
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
    translations: {
      companyName,
      cuit,
      email,
      slogan,
      description,
      website
    },
    edit
  }
) => (
  <>
    <TextInput
      name="companyName"
      label={companyName}
      validate={FormikValidator({ validator: validateName, mandatory: true })}
    />
    {!edit && <TextInput
        name="cuit"
        label={cuit}
        validate={FormikValidator({ validator: validateCuit, mandatory: true })}
    />}
    <TextInput
      name="email"
      label={email}
      validate={FormikValidator({ validator: validateEmail, mandatory: true })}
    />
    <TextInput
      name="slogan"
      label={slogan}
    />
    <TextInput
      name="description"
      label={description}
      multiline
    />
    <TextInput
      name="website"
      label={website}
      validate={FormikValidator({ validator: validateURL, mandatory: true })}
    />
  </>
);
