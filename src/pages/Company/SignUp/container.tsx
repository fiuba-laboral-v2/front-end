import React, { FunctionComponent } from "react";
import { useHistory } from "react-router-dom";
import { FormikHelpers } from "formik";

import { useCreateCompany } from "$hooks/useCreateCompany";
import { useLogin } from "../../../models/hooks";
import { Session } from "$models/Session";

import { SignUp } from "./component";
import { ISignUpFormValues } from "./interface";
import { RoutesBuilder } from "../../../models/RoutesBuilder";

export const SignUpContainer: FunctionComponent = () => {
  const history = useHistory();
  const createCompany = useCreateCompany();
  const login = useLogin();

  const onSubmit = async (
    { _form, passwordConfirm, ...values }: ISignUpFormValues,
    { setErrors, setSubmitting }: FormikHelpers<ISignUpFormValues>
  ) => {
    const createCompanyResult = await createCompany({
      variables: values,
      handlers: {
        UserEmailAlreadyExistsError: () => setErrors({ user: { email: "Este email ya existe" } }),
        CompanyCuitAlreadyExistsError: () => setErrors({ cuit: "Este cuit ya existe" }),
        ValidationError: () => setErrors({ _form: "Hubo un error: Revise los valores ingresados" }),
        defaultHandler: () => history.push(RoutesBuilder.internalServerError)
      }
    });
    if (createCompanyResult.error) return;

    const loginResult = await login({
      variables: { email: values.user.email , password: values.user.password },
      handlers: { defaultHandler: () => history.push(RoutesBuilder.internalServerError) }
    });
    if (loginResult.error) return;

    setSubmitting(false);
    Session.login(loginResult.data.login);
    history.push(RoutesBuilder.company.detail(createCompanyResult.data.createCompany.uuid));
  };

  return (
    <SignUp
      onSubmit={onSubmit}
    />
  );
};
