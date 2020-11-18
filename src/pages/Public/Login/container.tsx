import React, { FunctionComponent } from "react";
import { useHistory } from "react-router-dom";
import { Login } from "./component";
import { useTranslations } from "$hooks";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { ITranslations } from "./interfaces";

export const LoginContainer: FunctionComponent = () => {
  const history = useHistory();
  const translations = useTranslations<ITranslations>("login");

  return (
    <Login
      loginAsFiubaUser={() => history.push(RoutesBuilder.applicant.login())}
      loginAsCompanyUser={() => history.push(RoutesBuilder.company.login())}
      translations={translations}
    />
  );
};
