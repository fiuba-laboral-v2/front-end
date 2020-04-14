import React, { FunctionComponent } from "react";
import { useHistory } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";
import { LOGIN } from "$mutations";

import { LogInForm } from "./component";

import { ILogInFormValues } from "./interface";
import { FormikHelpers } from "formik";
import { RoutesBuilder } from "../../../models/RoutesBuilder";

const LogInFormContainer: FunctionComponent = () => {
  const history = useHistory();
  const [ login ] = useMutation(LOGIN);

  const onSubmit = async (
    values: ILogInFormValues,
    { setSubmitting }: FormikHelpers<ILogInFormValues>
  ) => {
    setSubmitting(false);
    const { data } = await login({ variables: values });
    localStorage.setItem("token", data.login);
    history.push(RoutesBuilder.applicant.home());
  };

  return (
    <LogInForm
      initialValues={{ email: "", password: "" }}
      onSubmit={onSubmit}
    />
  );
};

export { LogInFormContainer };
