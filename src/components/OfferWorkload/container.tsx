import React, { Fragment, FunctionComponent } from "react";
import { useTranslations } from "$hooks";
import { OfferWorkload } from "./component";
import { IOfferWorkloadContainerProps, IOfferWorkloadTranslations } from "./interfaces";

export const OfferWorkloadContainer: FunctionComponent<IOfferWorkloadContainerProps> = ({
  offer,
  className
}) => {
  const translations = useTranslations<IOfferWorkloadTranslations>("offerWorkload");
  if (!translations) return <Fragment />;

  return <OfferWorkload className={className} translations={translations} offer={offer} />;
};
