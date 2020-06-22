import React, { FunctionComponent } from "react";

import { CompanyFields } from "./component";
import { LoadingSpinner } from "$components/LoadingSpinner";
import { Redirect } from "$components/Redirect";
import { useTranslations } from "$hooks";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { ICompanyFieldsContainerProps, ICompanyFieldsTranslations } from "./interface";

export const CompanyFieldsContainer: FunctionComponent<ICompanyFieldsContainerProps> = props => {
  const translations = useTranslations<ICompanyFieldsTranslations>("companyFields");
  if (translations.loading) return <LoadingSpinner />;
  if (translations.error) return <Redirect to={RoutesBuilder.public.internalServerError()}/>;

  return (
    <CompanyFields translations={translations.data} {...props}/>
  );
};
