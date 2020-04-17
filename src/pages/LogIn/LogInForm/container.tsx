import React, { FunctionComponent } from "react";
import { useHistory } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { LOGIN } from "$mutations";
import { GET_TRANSLATIONS } from "$queries";
import { Session } from "$models/Session";

import { LogInForm } from "./component";

import { ILogInFormValues } from "./interface";
import { FormikHelpers } from "formik";
import { RoutesBuilder } from "../../../models/RoutesBuilder";

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
              "login.DontHaveAnAccount",
              "login.Register"
            ]
        }
    }
  );

  const [ title, email, password, logIn, dontHaveAnAccount, register ] = getTranslations;

  const onSubmit = async (
    values: ILogInFormValues,
    { setSubmitting }: FormikHelpers<ILogInFormValues>
  ) => {
    const { data } = await login({ variables: values });
    Session.login(data.login);
    setSubmitting(false);
    history.push(RoutesBuilder.applicant.home());
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
