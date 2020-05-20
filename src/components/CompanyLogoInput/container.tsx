import React, { Fragment, FunctionComponent } from "react";
import { Redirect } from "react-router-dom";

import { useTranslations } from "$hooks";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { CompanyLogoInput } from "./component";
import { ICompanyLogoInputContainerProps, ICompanyLogoInputTranslations } from "./interfaces";

export const CompanyLogoInputContainer: FunctionComponent<ICompanyLogoInputContainerProps> = (
  {
    companyName,
    className,
    setLogo
  }
) => {
  const translations = useTranslations<ICompanyLogoInputTranslations>("CompanyLogoInput");
  if (translations.loading) return <Fragment/>;
  if (translations.error) return <Redirect to={RoutesBuilder.internalServerError}/>;

  return (
    <CompanyLogoInput
      companyName={companyName}
      translations={translations.data}
      setLogo={setLogo}
      className={className}
    />
  );
};
