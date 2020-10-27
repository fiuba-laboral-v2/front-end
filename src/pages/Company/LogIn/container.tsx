import React, { Fragment, FunctionComponent } from "react";
import { useHistory } from "react-router-dom";

import { ErrorHandlers } from "$models/handleError";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { ICompanyLoginVariables, useCompanyLogin, useTranslations } from "$hooks";
import { ITranslations } from "./interfaces";

import { LogIn } from "./component";
import { FormikHelpers } from "formik";

export const LogInContainer: FunctionComponent = () => {
  const translations = useTranslations<ITranslations>("companyLogin");
  const history = useHistory();
  const { login } = useCompanyLogin();

  if (!translations) return <Fragment />;

  const onSubmit = async (
    variables: ICompanyLoginVariables,
    { setSubmitting }: FormikHelpers<ICompanyLoginVariables>,
    errorHandlers: ErrorHandlers
  ) => {
    const loginResult = await login({ variables, errorHandlers });
    if (loginResult.error) return;

    setSubmitting(false);
    history.push(RoutesBuilder.public.home());
  };

  return <LogIn onSubmit={onSubmit} translations={translations} />;
};
