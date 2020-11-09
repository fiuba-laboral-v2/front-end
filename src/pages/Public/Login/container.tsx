import React, { FunctionComponent } from "react";
import { useHistory } from "react-router-dom";
import { Login } from "./component";
import { LoadingLoginWindow } from "$components/LoadingLoginWindow";
import { useTranslations } from "$hooks";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { ITranslations } from "./interfaces";

export const LoginContainer: FunctionComponent = () => {
  const history = useHistory();
  const translations = useTranslations<ITranslations>("login");
  if (!translations) return <LoadingLoginWindow />;

  return (
    <Login
      loginAsFiubaUser={() => history.push(RoutesBuilder.applicant.login())}
      loginAsCompanyUser={() => history.push(RoutesBuilder.company.login())}
      translations={translations}
    />
  );
};
