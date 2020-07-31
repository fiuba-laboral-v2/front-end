import React, { Fragment, FunctionComponent } from "react";
import { useHistory } from "react-router-dom";
import { Register } from "./component";

import { useTranslations } from "$hooks";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { IRegisterTranslations } from "./interface";

const RegisterContainer: FunctionComponent = () => {
  const history = useHistory();
  const translations = useTranslations<IRegisterTranslations>("register");
  if (!translations) return <Fragment/>;

  return (
    <Register
      onClickRegisterApplicant={() => history.push(RoutesBuilder.applicant.signUp())}
      onClickRegisterCompany={() => history.push(RoutesBuilder.company.signUp())}
      translations={translations}
    />
  );
};

export { RegisterContainer };
