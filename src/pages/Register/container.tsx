import React, { Fragment, FunctionComponent } from "react";
import { useHistory } from "react-router-dom";

import { Register } from "./component";

import { useTranslations } from "$hooks/useTranslations";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { IRegisterTranslations, defaultTranslations } from "./interface";

const RegisterContainer: FunctionComponent = () => {
  const history = useHistory();
  let translations = {} as IRegisterTranslations;
  const translationsResponse = useTranslations<IRegisterTranslations>("register");
  if (translationsResponse.loading) return <Fragment/>;
  if (translationsResponse.error) {
    translations = defaultTranslations;
  } else {
    translations = translationsResponse.data;
  }

  return (
    <Register
      onClickRegisterApplicant={() => history.push(RoutesBuilder.applicant.signUp)}
      onClickRegisterCompany={() => alert("Próximamente en cines")}
      translations={translations}
    />
  );
};

export { RegisterContainer };
