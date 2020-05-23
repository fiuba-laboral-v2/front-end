import React, { Fragment, FunctionComponent } from "react";
import { useHistory } from "react-router-dom";
import { Register } from "./component";
import { Redirect } from "$components/Redirect";

import { useTranslations } from "$hooks";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { IRegisterTranslations } from "./interface";

const RegisterContainer: FunctionComponent = () => {
  const history = useHistory();
  const translations = useTranslations<IRegisterTranslations>("register");
  if (translations.loading) return <Fragment/>;
  if (translations.error) return <Redirect to={RoutesBuilder.public.internalServerError}/>;

  return (
    <Register
      onClickRegisterApplicant={() => history.push(RoutesBuilder.applicant.signUp)}
      onClickRegisterCompany={() => history.push(RoutesBuilder.company.signUp)}
      translations={translations.data}
    />
  );
};

export { RegisterContainer };
