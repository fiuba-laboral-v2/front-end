import React, { FunctionComponent } from "react";
import { useHistory } from "react-router-dom";

import { LogInForm } from "./component";

import { ILogInFormValues } from "./interface";
import { FormikHelpers } from "formik";
import { RoutesBuilder } from "../../../models/RoutesBuilder";

const LogInFormContainer: FunctionComponent = () => {
  const history = useHistory();

  const onSubmit = async (
    values: ILogInFormValues,
    { setSubmitting }: FormikHelpers<ILogInFormValues>
  ) => {
    setSubmitting(false);
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
