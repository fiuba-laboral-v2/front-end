import React, { Fragment, FunctionComponent } from "react";
import { OfferDetails } from "./component";
import { useTranslations, useCompanyByUuid } from "$hooks/queries";

export const OfferDetailsContainer: FunctionComponent<IOfferDetailsContainerProps> = (
  {
    companyUuid
  }
) => {
  const translations = useTranslations<IAdminOfferDetails>("adminOfferDetails");
  const response = useCompanyByUuid({ uuid: companyUuid });
  if (response.error || response.loading || !translations) return <Fragment/>;

  return (
    <OfferDetails
      company={response.data.getCompanyByUuid}
      translations={translations}
    />
  );
};

interface IOfferDetailsContainerProps {
  companyUuid: string;
}

interface IAdminOfferDetails {
  cuit: string;
}
