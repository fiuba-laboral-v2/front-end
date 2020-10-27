import React, { Fragment, FunctionComponent } from "react";
import { useHistory } from "react-router-dom";
import { InitialLogin } from "./component";

import { useTranslations } from "$hooks";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { IRegisterTranslations } from "./interface";

export const InitialLoginContainer: FunctionComponent = () => {
  const history = useHistory();
  const translations = useTranslations<IRegisterTranslations>("initialLogin");
  if (!translations) return <Fragment/>;

  return (
    <InitialLogin
      loginAsFiubaUser={() => history.push(RoutesBuilder.applicant.login())}
      loginAsCompanyUser={() => history.push(RoutesBuilder.company.login())}
      translations={translations}
    />
  );
};
