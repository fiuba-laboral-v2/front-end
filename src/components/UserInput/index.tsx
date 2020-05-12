import React, { FunctionComponent } from "react";
import TextInput from "$components/TextInput";
import { FormikValidator } from "../../models/FormikValidator";
import { validateEmail, validateName, validatePassword } from "validations-fiuba-laboral-v2";

export const UserInput: FunctionComponent<IUserInputProps> = (
  {
    fields
  }
) => {
  return (
    <>
      <TextInput
        name={fields.email.name}
        label={fields.email.label}
        type="email"
        validate={FormikValidator({ validator: validateEmail, mandatory: true })}
      />
      <TextInput
        name={fields.password.name}
        label={fields.password.label}
        type="password"
        validate={FormikValidator({ validator: validatePassword, mandatory: true })}
      />
      <TextInput
        name={fields.passwordConfirm.name}
        label={fields.passwordConfirm.label}
        type="password"
      />
      <TextInput
        name={fields.name.name}
        label={fields.name.label}
        validate={FormikValidator({ validator: validateName, mandatory: true })}
      />
      <TextInput
        name={fields.surname.name}
        label={fields.surname.label}
        validate={FormikValidator({ validator: validateName, mandatory: true })}
      />
    </>
  );
};

interface IField {
  name: string;
  label: string;
}

interface IFields {
  email: IField;
  password: IField;
  passwordConfirm: IField;
  name: IField;
  surname: IField;
}

interface IUserInputProps {
  fields: IFields;
}
