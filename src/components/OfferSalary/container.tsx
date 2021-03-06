import React, { Fragment, FunctionComponent } from "react";
import { useTranslations } from "$hooks";
import { OfferSalary } from "./component";
import { IOfferSalaryContainerProps, IOfferSalaryTranslations } from "./interfaces";

export const OfferSalaryContainer: FunctionComponent<IOfferSalaryContainerProps> = ({
  offer,
  className
}) => {
  const translations = useTranslations<IOfferSalaryTranslations>("offerSalary");
  if (!translations || !offer) return <Fragment />;

  return <OfferSalary className={className} translations={translations} offer={offer} />;
};
