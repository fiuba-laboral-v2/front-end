import React, { Fragment, FunctionComponent } from "react";
import { useHistory } from "react-router-dom";

import { ErrorHandlers } from "$models/handleError";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { useTranslations, useFiubaLogin, IFiubaLoginVariables } from "$hooks";

import { LogIn } from "./component";

import { ITranslations } from "./interfaces";
import { FormikHelpers } from "formik";

export const LogInContainer: FunctionComponent = () => {
  const translations = useTranslations<ITranslations>("applicantLogin");
  const { login } = useFiubaLogin();
  const history = useHistory();

  if (!translations) return <Fragment />;

  const onSubmit = async (
    variables: IFiubaLoginVariables,
    { setSubmitting }: FormikHelpers<IFiubaLoginVariables>,
    errorHandlers: ErrorHandlers
  ) => {
    const loginResult = await login({ variables, errorHandlers });
    if (loginResult.error) return;
    setSubmitting(false);
    history.push(RoutesBuilder.public.home());
  };

  return <LogIn translations={translations} onSubmit={onSubmit} />;
};
