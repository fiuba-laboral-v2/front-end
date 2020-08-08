import React, { FunctionComponent } from "react";
import { TextInput } from "$components/TextInput";
import { FormikValidator } from "../../models/FormikValidator";
import { validateEmail, validateName, validatePassword, validateDni } from "validations-fiuba-laboral-v2";

export const UserInput: FunctionComponent<IUserInputProps> = (
  {
    email,
    dni,
    password,
    passwordConfirm,
    name,
    surname
  }
) => (
  <>
    <TextInput
      name={email.name}
      label={email.label}
      type="email"
      validate={FormikValidator({ validator: validateEmail, mandatory: true })}
    />
    {
      dni &&
      <TextInput
        name={dni.name}
        label={dni.label}
        type="number"
        validate={FormikValidator({ validator: validateDni, mandatory: true })}
      />
    }
    <TextInput
      name={password.name}
      label={password.label}
      type="password"
      validate={
        password.validate && FormikValidator({ validator: validatePassword, mandatory: true })
      }
    />
    {
      passwordConfirm &&
      <TextInput
        name={passwordConfirm.name}
        label={passwordConfirm.label}
        type="password"
      />
    }
    <TextInput
      name={name.name}
      label={name.label}
      validate={FormikValidator({ validator: validateName, mandatory: true })}
    />
    <TextInput
      name={surname.name}
      label={surname.label}
      validate={FormikValidator({ validator: validateName, mandatory: true })}
    />
  </>
);

interface IField {
  name: string;
  label: string;
  validate?: boolean;
}

interface IUserInputProps {
  email: IField;
  password: IField;
  dni?: IField;
  passwordConfirm?: IField;
  name: IField;
  surname: IField;
}
