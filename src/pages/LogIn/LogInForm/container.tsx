import React, { Fragment, FunctionComponent } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";
import { useTranslations } from "$hooks/translations";
import { FormikHelpers } from "formik";

import { LOGIN } from "$mutations";
import { Session } from "$models/Session";

import { LogInForm } from "./component";

import { ILogInFormTranslationsProps, ILogInFormValues } from "./interface";
import { RoutesBuilder } from "$models/RoutesBuilder";

const LogInFormContainer: FunctionComponent<ILogInFormContainerProps> = ({ className }) => {
  const history = useHistory();
  const [login] = useMutation(LOGIN);

  const translations = useTranslations<ILogInFormTranslationsProps>("login");

  const onSubmit = async (
    values: ILogInFormValues,
    { setSubmitting, setErrors }: FormikHelpers<ILogInFormValues>
  ) => {
    try {
      const { data } = await login({ variables: values });
      Session.login(data.login);
    } catch (e) {
      return setErrors({
        email: e.message,
        password: e.message
      });
    }
    setSubmitting(false);
    history.push(RoutesBuilder.applicant.home());
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
