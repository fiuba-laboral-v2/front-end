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
  const [login] = useLogin();

  const translations = useTranslations<ILogInFormTranslationsProps>("login");

  const onSubmit = async (
    values: ILoginVariables,
    { setSubmitting, setErrors }: FormikHelpers<ILoginVariables>
  ) => {
    try {
      const loginResult = await login({ variables: values });
      setSubmitting(false);
      Session.login(loginResult.data.login);
      history.push(RoutesBuilder.applicant.home());
    } catch (error) {
      setErrors({
        email: JSON.stringify(error),
        password: JSON.stringify(error)
      });
      setSubmitting(false);
    }
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
