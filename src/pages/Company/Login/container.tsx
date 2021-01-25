import React, { FunctionComponent } from "react";
import { useHistory } from "react-router-dom";
import { ErrorHandlers } from "$models/handleError";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { ICompanyLoginVariables, useCompanyLogin, useTranslations } from "$hooks";
import { ITranslations } from "./interfaces";
import { Login } from "./component";

export const LoginContainer: FunctionComponent = () => {
  const translations = useTranslations<ITranslations>("companyLogin");
  const history = useHistory();
  const { login } = useCompanyLogin();

  const onSubmit = async (variables: ICompanyLoginVariables, errorHandlers: ErrorHandlers) => {
    const loginResult = await login({ variables, errorHandlers });
    if (loginResult.error) return;
    history.push(RoutesBuilder.public.home());
  };

  return <Login onSubmit={onSubmit} translations={translations} />;
};
