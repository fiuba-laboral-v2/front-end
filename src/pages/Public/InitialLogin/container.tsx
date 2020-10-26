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
      onClickRegisterApplicant={() => history.push(RoutesBuilder.applicant.signUp())}
      onClickRegisterCompany={() => history.push(RoutesBuilder.company.signUp())}
      translations={translations}
    />
  );
};
