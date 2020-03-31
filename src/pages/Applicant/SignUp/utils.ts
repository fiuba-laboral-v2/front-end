import { every, isEmpty } from "lodash";
import { ICareersSelector } from "./interfaces";

interface IPropsToValidate {
  careers: ICareersSelector[];
}

interface IValidationResult {
  careers?: object[];
  _form?: string;
}

const validations = (values: IPropsToValidate): IValidationResult => {
  const result: IValidationResult = {};

  const careers = values.careers.map(value => {
    const code = value.code !== "" ? undefined : "Este campo es obligatorio";
    return {
      ...(code) && { code }
    };
  });
  if (!every(careers, career => isEmpty(career))) result.careers = careers;

  const codes = values.careers.map(career => career.code);
  if (new Set(codes).size !== codes.length) result._form = "No se pueden repetir carreras";
  if (codes.length === 0) result._form = "Debes elegir como mínimo una carrera";

  return result;
};


export { validations };
