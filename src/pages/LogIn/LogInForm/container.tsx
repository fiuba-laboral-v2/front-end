import React, { Fragment, FunctionComponent } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { useTranslations } from "$hooks/useTranslations";
import { FormikHelpers } from "formik";
import { Session } from "$models/Session";

import { LogInForm } from "./component";

import { ILogInFormTranslationsProps } from "./interface";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { ILoginVariables, useLogin } from "$hooks/useLogin";

const LogInFormContainer: FunctionComponent<ILogInFormContainerProps> = ({ className }) => {
  const history = useHistory();
  const login = useLogin();

  const translations = useTranslations<ILogInFormTranslationsProps>("login");

  const onSubmit = async (
    values: ILoginVariables,
    { setSubmitting, setErrors }: FormikHelpers<ILoginVariables>
  ) => {
    const { token, errors } = await login(values);
    if (token) {
      Session.login(token);
      history.push(RoutesBuilder.applicant.home());
    } else {
      setErrors({
        email: JSON.stringify(errors),
        password: JSON.stringify(errors)
      });
    }
    setSubmitting(false);
  };

  if (translations.loading) return <Fragment/>;
  if (translations.error) return <Redirect to={RoutesBuilder.notFound}/>;

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
