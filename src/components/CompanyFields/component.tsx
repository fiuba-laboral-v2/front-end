import React, { FunctionComponent } from "react";

import { TextInput } from "$components/TextInput";
import { EmailField, NameField } from "$components/Fields";
import { FormikValidator } from "$models/FormikValidator";
import { ICompanyFieldsProps } from "./interface";

import { validateCuit, validateURL } from "validations-fiuba-laboral-v2";

export const CompanyFields: FunctionComponent<ICompanyFieldsProps> = (
  {
    translations: {
      companyName,
      businessName,
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
    <NameField name="companyName" label={companyName} />
    <TextInput
      name="businessName"
      label={businessName}
      validate={FormikValidator({ mandatory: true })}
    />
    {
      !edit &&
      <TextInput
        name="cuit"
        label={cuit}
        validate={FormikValidator({ validator: validateCuit, mandatory: true })}
      />
    }
    <EmailField name="email" label={email}/>
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
