import React, { FunctionComponent } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { FormikHelpers } from "formik";

import { useCreateCompany, useTranslations } from "$hooks";
import { useLogin } from "$models/hooks";
import { Session } from "$models/Session";

import { SignUp } from "./component";
import { LoadingSpinner } from "../../../components/LoadingSpinner";

import { ISignUpFormValues, ISignUpTranslations } from "./interface";
import { RoutesBuilder } from "../../../models/RoutesBuilder";

export const SignUpContainer: FunctionComponent = () => {
  const history = useHistory();
  const createCompany = useCreateCompany();
  const login = useLogin();

  const translations = useTranslations<ISignUpTranslations>("companySignUp");
  if (translations.loading) return <LoadingSpinner/>;
  if (translations.error) return <Redirect to={RoutesBuilder.internalServerError}/>;

  const onSubmit = async (
    {
      _form,
      user: {
        passwordConfirm,
        ...userAttributes
      },
      ...companyValues
    }: ISignUpFormValues,
    { setErrors, setSubmitting }: FormikHelpers<ISignUpFormValues>
  ) => {
    const createCompanyResult = await createCompany({
      variables: { user: userAttributes, ...companyValues },
      handlers: {
        UserEmailAlreadyExistsError: () => setErrors({ user: { email: "Este email ya existe" } }),
        CompanyCuitAlreadyExistsError: () => setErrors({ cuit: "Este cuit ya existe" }),
        ValidationError: () => setErrors({ _form: "Hubo un error: Revise los valores ingresados" }),
        defaultHandler: () => history.push(RoutesBuilder.internalServerError)
      }
    });
    if (createCompanyResult.error) return;

    const loginResult = await login({
      variables: { email: userAttributes.email , password: userAttributes.password },
      handlers: { defaultHandler: () => history.push(RoutesBuilder.internalServerError) }
    });
    if (loginResult.error) return;

    setSubmitting(false);
    Session.login(loginResult.data.login);
    history.push(RoutesBuilder.company.detail(createCompanyResult.data.createCompany.uuid));
  };

  return (
    <SignUp
      translations={translations.data}
      onSubmit={onSubmit}
    />
  );
};
