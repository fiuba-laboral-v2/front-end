import { RoutesBuilder } from "../RoutesBuilder";
import { FormikErrors } from "formik";
import { History } from "history";

export interface ISaveCompanyErrorHandlersErrors {
  cuit: string;
  _form: string;
}

export interface ISaveCompanyErrorHandlers<T> {
  setErrors: (error: FormikErrors<T>) => void;
  history: History;
}

export const saveCompanyErrorHandlers = (
  {
    setErrors,
    history
  }: ISaveCompanyErrorHandlers<ISaveCompanyErrorHandlersErrors>
) =>
  ({
    CompanyCuitAlreadyExistsError: () => setErrors({ cuit: "Este cuit ya existe" }),
    ValidationError: () => setErrors({ _form: "Hubo un error: Revise los valores ingresados" }),
    defaultHandler: () => history.push(RoutesBuilder.public.internalServerError())
  });
