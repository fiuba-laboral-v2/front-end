import React, { FunctionComponent } from "react";
import { useHistory } from "react-router-dom";
import { ErrorHandlers } from "$models/handleError";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { useTranslations, useFiubaLogin, IFiubaLoginVariables, useSnackbar } from "$hooks";
import { Login } from "./component";
import { ITranslations } from "./interfaces";
import { FormikHelpers } from "formik";

export const LoginContainer: FunctionComponent = () => {
  const translations = useTranslations<ITranslations>("applicantLogin");
  const { login } = useFiubaLogin();
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();

  const onSubmit = async (
    variables: IFiubaLoginVariables,
    { setSubmitting }: FormikHelpers<IFiubaLoginVariables>,
    errorHandlers: ErrorHandlers
  ) => {
    const loginResult = await login({
      variables,
      errorHandlers: {
        ...errorHandlers,
        UserNotFoundError: () => {
          if (translations) enqueueSnackbar(translations.userNotFoundErrorMessage);
          history.push(RoutesBuilder.applicant.signUp({ dni: variables.dni }));
        }
      }
    });
    if (loginResult.error) return;
    setSubmitting(false);
    history.push(RoutesBuilder.public.home());
  };

  return <Login translations={translations} onSubmit={onSubmit} />;
};
