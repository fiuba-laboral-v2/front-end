import {
  ISaveCompanyErrorHandlers,
  ISaveCompanyErrorHandlersErrors,
  saveCompanyErrorHandlers
} from "./saveCompanyErrorHandlers";

interface ICreateCompanyErrorHandlers extends ISaveCompanyErrorHandlersErrors {
  user: { email: string; };
}

export const createCompanyErrorHandlers = (
  {
    setErrors,
    history
  }: ISaveCompanyErrorHandlers<ICreateCompanyErrorHandlers>
) =>
  ({
    UserEmailAlreadyExistsError: () => setErrors({ user: { email: "Este email ya existe" } }),
    ...saveCompanyErrorHandlers({ setErrors, history })
  });
