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

const LogInFormContainer: FunctionComponent = () => {
  const history = useHistory();
  const [ login ] = useMutation(LOGIN);

  const { data: { getTranslations } = { getTranslations: [] } } = useQuery(
    GET_TRANSLATIONS,
    {
      variables:
        {
          paths:
            [
              "login.title",
              "login.email",
              "login.password",
              "logIn"
            ]
        }
    }
  );

  const [ title, email, password, logIn ] = getTranslations;

  const onSubmit = async (
    values: ILogInFormValues,
    { setSubmitting }: FormikHelpers<ILogInFormValues>
  ) => {
    setSubmitting(false);
    const { data } = await login({ variables: values });
    Session.login(data.login);
    history.push(RoutesBuilder.applicant.home());
  };

  return (
    <LogInForm
      initialValues={{ email: "", password: "" }}
      onSubmit={onSubmit}
      translations={{
        title,
        email,
        password,
        logIn
      }}
    />
  );
};

export { LogInFormContainer };
