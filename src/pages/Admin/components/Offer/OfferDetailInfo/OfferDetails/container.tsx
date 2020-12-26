import React, { Fragment, FunctionComponent } from "react";
import { OfferDetails } from "./component";
import { useTranslations } from "$hooks/queries";

export const OfferDetailsContainer: FunctionComponent<IOfferDetailsContainerProps> = ({ cuit }) => {
  const translations = useTranslations<IAdminOfferDetails>("adminOfferDetails");
  if (!translations || !cuit) return <Fragment />;
  return <OfferDetails cuit={cuit} translations={translations} />;
};

interface IOfferDetailsContainerProps {
  cuit?: string;
}

interface IAdminOfferDetails {
  cuit: string;
}
