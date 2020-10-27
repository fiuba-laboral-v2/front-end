import React, { Fragment, FunctionComponent } from "react";
import { useHistory } from "react-router-dom";

import { ErrorHandlers } from "$models/handleError";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { ILoginVariables, useLogin, useTranslations } from "$hooks";

import { LogIn } from "./component";

import { ITranslations } from "./interfaces";
import { FormikHelpers } from "formik";

export const LogInContainer: FunctionComponent = () => {
  const translations = useTranslations<ITranslations>("login");
  const history = useHistory();
  const { login } = useLogin();

  if (!translations) return <Fragment />;

  const onSubmit = async (
    variables: ILoginVariables,
    { setSubmitting }: FormikHelpers<ILoginVariables>,
    errorHandlers: ErrorHandlers
  ) => {
    const loginResult = await login({ variables, errorHandlers });
    if (loginResult.error) return;

    setSubmitting(false);
    history.push(RoutesBuilder.public.home());
  };

  return <LogIn translations={translations} onSubmit={onSubmit} />;
};
