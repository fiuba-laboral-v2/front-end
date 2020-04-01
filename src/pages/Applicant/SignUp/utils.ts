import { ICareersSelector } from "./interfaces";

interface IPropsToValidate {
  careers: ICareersSelector[];
}

interface IValidationResult {
  _form?: string;
}

const validations = (values: IPropsToValidate): IValidationResult | undefined => {
  const codes = values.careers.map(career => career.code);
  if (new Set(codes).size !== codes.length) return { _form: "No se pueden repetir carreras" };
  if (codes.length === 0) return { _form: "Debes elegir como mínimo una carrera" };
};


export { validations };
