import React, { FunctionComponent } from "react";
import { useHistory } from "react-router-dom";
import { ErrorHandlers } from "$models/handleError";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { useTranslations, useFiubaLogin, IFiubaLoginVariables } from "$hooks";
import { Login } from "./component";
import { LoadingLoginWindow } from "$components/LoadingLoginWindow";
import { ITranslations } from "./interfaces";
import { FormikHelpers } from "formik";

export const LoginContainer: FunctionComponent = () => {
  const translations = useTranslations<ITranslations>("applicantLogin");
  const { login } = useFiubaLogin();
  const history = useHistory();

  if (!translations) return <LoadingLoginWindow />;

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

  return <Login translations={translations} onSubmit={onSubmit} />;
};
