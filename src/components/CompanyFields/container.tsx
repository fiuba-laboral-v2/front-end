import React, { FunctionComponent } from "react";

import { CompanyFields } from "./component";
import { LoadingSpinner } from "$components/LoadingSpinner";
import { useTranslations } from "$hooks";
import { ICompanyFieldsContainerProps, ICompanyFieldsTranslations } from "./interface";

export const CompanyFieldsContainer: FunctionComponent<ICompanyFieldsContainerProps> = props => {
  const translations = useTranslations<ICompanyFieldsTranslations>("companyFields");
  if (!translations) return <LoadingSpinner />;

  return (
    <CompanyFields translations={translations} {...props}/>
  );
};
