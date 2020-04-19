import React, { FunctionComponent } from "react";
import { useHistory } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { FormikHelpers } from "formik";

import { LOGIN } from "$mutations";
import { GET_TRANSLATIONS } from "$queries";
import { Session } from "$models/Session";

import { LogInForm } from "./component";

import { ILogInFormValues } from "./interface";
import { RoutesBuilder } from "$models/RoutesBuilder";

const LogInFormContainer: FunctionComponent<ILogInFormContainerProps> = ({ className }) => {
  const history = useHistory();
  const [ login ] = useMutation(LOGIN);

  const { data: { getTranslations } = { getTranslations: [] } } = useQuery(
    GET_TRANSLATIONS,
    {
      variables:
        {
          paths:
            [
              "login.enter",
              "login.email",
              "login.password",
              "login.prompt",
              "login.dontHaveAnAccount",
              "login.register"
            ]
        }
    }
  );

  const [ title, email, password, logIn, dontHaveAnAccount, register ] = getTranslations;

  const onSubmit = async (
    values: ILogInFormValues,
    { setSubmitting, setErrors }: FormikHelpers<ILogInFormValues>
  ) => {
    try {
      const { data } = await login({ variables: values });
      Session.login(data.login);
      setSubmitting(false);
      history.push(RoutesBuilder.applicant.home());
    } catch (e) {
      setErrors({
        email: e.message,
        password: e.message
      });
    }
  };

  return (
    <LogInForm
      className={className}
      initialValues={{ email: "", password: "" }}
      onSubmit={onSubmit}
      translations={{
        title,
        email,
        password,
        logIn,
        dontHaveAnAccount,
        register
      }}
    />
  );
};

interface ILogInFormContainerProps {
  className?: string;
}

export { LogInFormContainer };
