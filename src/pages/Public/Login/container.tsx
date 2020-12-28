import React, { FunctionComponent } from "react";
import { Login } from "./component";
import { useTranslations } from "$hooks";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { ITranslations } from "./interfaces";

export const LoginContainer: FunctionComponent = () => {
  const translations = useTranslations<ITranslations>("login");

  return (
    <Login
      loginAsFiubaUserLink={RoutesBuilder.applicant.login()}
      loginAsCompanyUserLink={RoutesBuilder.company.login()}
      translations={translations}
    />
  );
};
