import React, { Fragment, FunctionComponent } from "react";
import { useTranslations } from "$hooks";
import { OfferCareers } from "./component";
import { IOfferCareersComponentProps, IOfferCareersContainerProps } from "./interfaces";

export const OfferCareersContainer: FunctionComponent<IOfferCareersContainerProps> = ({
  offer,
  className
}) => {
  const translations = useTranslations<IOfferCareersComponentProps>("offerCareer");
  if (!translations) return <Fragment />;

  return (
    <OfferCareers className={className} careersTitle={translations.careersTitle} offer={offer} />
  );
};
