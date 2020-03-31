import { isEmpty, pick, every } from "lodash";
import {
  validateName,
  validateEmail,
  validatePassword,
} from "validations-fiuba-laboral-v2";
import { ICareersSelector } from "./interfaces";

const validator = (value: string, callback: (x: string) => void) => {
  try {
    callback(value);
  } catch ({ message }) {
    return message;
  }
};

interface IPropsToValidate {
  email: string;
  password: string;
  name: string;
  surname: string;
  padron: number;
  careers: ICareersSelector[];
}

interface IValidationResult {
  email?: string;
  password?: string;
  name?: string;
  surname?: string;
  padron?: string;
  careers?: object[];
  _form?: string;
}

const validations = (values: IPropsToValidate): IValidationResult => {
  const email = validator(values.email, validateEmail);
  const password = validator(values.password, validatePassword);
  const name = validator(values.name, validateName);
  const surname = validator(values.surname, validateName);
  const padron = values.padron > 0 ? undefined : "El padron es mayor que 0";

  const result: IValidationResult = {
    ...(email) && { email },
    ...(password) && { password },
    ...(name) && { name },
    ...(surname) && { surname },
    ...(padron) && { padron }
  };

  const careers = values.careers.map(value => {
    const code = value.code !== "" ? undefined : "Este campo es obligatorio";
    return {
      ...(code) && { code }
    };
  });
  if (!every(careers,career => isEmpty(career))) result.careers = careers;

  const codes = values.careers.map(career => career.code);
  if (new Set(codes).size !== codes.length) result._form = "No se pueden repetir carreras";
  if (codes.length === 0) result._form = "Debes elegir como mínimo una carrera";

  return result;
};

const signUpParams = (values: any) => pick(values, ["email", "password"]);

const saveApplicantParams = (values: any) => pick(values, ["name", "surname", "padron", "careers"]);

const translationsMapper = (trasnlations: string[] = Array(10).fill("")) => {
  const [
    title,
    email,
    password,
    name,
    surname,
    padron,
    careersTitle,
    submit
  ] = trasnlations;

  return {
    title,
    email,
    password,
    name,
    surname,
    padron,
    careersTitle,
    submit
  };
};

export { validations, signUpParams, saveApplicantParams, translationsMapper };
