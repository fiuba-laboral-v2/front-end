import React, { Fragment, FunctionComponent } from "react";
import { useHistory } from "react-router-dom";
import { useTranslations } from "$hooks/useTranslations";
import { FormikHelpers, FormikErrors } from "formik";

import { LogInForm } from "./component";

import { RoutesBuilder } from "$models/RoutesBuilder";
import { Session } from "$models/Session";
import { ILoginVariables, useLogin } from "$hooks/useLogin";

import { ILogInFormTranslationsProps } from "./interface";

const LogInFormContainer: FunctionComponent<ILogInFormContainerProps> = ({ className }) => {
  const history = useHistory();
  const login = useLogin();

  const translations = useTranslations<ILogInFormTranslationsProps>("login");

  const badCredentialsMessage = (setErrors: (callback: FormikErrors<ILoginVariables>) => void) => {
    setErrors({
      email: "Email o contraseña inválidos",
      password: "Email o contraseña inválidos"
    });
  };

  const onSubmit = async (
    values: ILoginVariables,
    { setSubmitting, setErrors }: FormikHelpers<ILoginVariables>
  ) => {
    const loginResult = await login(
      { variables: values },
      {
        BadCredentialsError: () => badCredentialsMessage(setErrors),
        UserNotFoundError: () => badCredentialsMessage(setErrors),
        DefaultError: () => history.push(RoutesBuilder.internalServerError)
      }
    );
    setSubmitting(false);
    Session.login(loginResult.data.login);
    history.push(RoutesBuilder.applicant.home());
  };

  if (translations.loading) return <Fragment/>;

  return (
    <LogInForm
      className={className}
      initialValues={{ email: "", password: "" }}
      onSubmit={onSubmit}
      translations={translations.data}
    />
  );
};

interface ILogInFormContainerProps {
  className?: string;
}

export { LogInFormContainer };
