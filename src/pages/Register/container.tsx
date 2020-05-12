import React, { Fragment, FunctionComponent } from "react";
import { Redirect, useHistory } from "react-router-dom";

import { Register } from "./component";

import { useTranslations } from "$hooks/useTranslations";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { IRegisterTranslations } from "./interface";

const RegisterContainer: FunctionComponent = () => {
  const history = useHistory();
  const translations = useTranslations<IRegisterTranslations>("register");
  if (translations.loading) return <Fragment/>;
  if (translations.error) return <Redirect to={RoutesBuilder.internalServerError} />;

  return (
    <Register
      onClickRegisterApplicant={() => history.push(RoutesBuilder.applicant.signUp)}
      onClickRegisterCompany={() => alert("Próximamente en cines")}
      translations={translations.data}
    />
  );
};

export { RegisterContainer };
