import React, { FunctionComponent } from "react";
import { useHistory } from "react-router-dom";
import { ErrorHandlers } from "$models/handleError";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { useTranslations, useFiubaLogin, IFiubaLoginVariables, useShowError } from "$hooks";
import { FiubaAuthenticationErrorHandler } from "$models/errorHandlers";
import { Login } from "./component";
import { ITranslations } from "./interfaces";

export const LoginContainer: FunctionComponent = () => {
  const translations = useTranslations<ITranslations>("applicantLogin");
  const { login } = useFiubaLogin();
  const history = useHistory();
  const showError = useShowError();

  const onSubmit = async (variables: IFiubaLoginVariables, errorHandlers: ErrorHandlers) => {
    const loginResult = await login({
      variables,
      errorHandlers: {
        ...errorHandlers,
        UserNotFoundError: () => {
          if (translations) showError({ message: translations.userNotFoundErrorMessage });
          history.push(RoutesBuilder.applicant.signUp({ dni: variables.dni }));
        },
        ...FiubaAuthenticationErrorHandler(showError)
      }
    });
    if (loginResult.error) return;
    history.push(RoutesBuilder.public.home());
  };

  return <Login translations={translations} onSubmit={onSubmit} />;
};
