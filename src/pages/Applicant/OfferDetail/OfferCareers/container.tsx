import React, { FunctionComponent } from "react";
import { useHistory } from "react-router-dom";
import { useTranslations } from "$hooks/translations";
import { OfferCareers } from "./component";
import { IOfferCareersContainerProps, IOfferCareersComponentProps } from "./interface";
import { RoutesBuilder } from "$models/RoutesBuilder";

const OfferCareersContainer: FunctionComponent<IOfferCareersContainerProps> = (
  {
    offer,
    className
  }) => {
  const history = useHistory();
  const {
    translations,
    error
  } = useTranslations<IOfferCareersComponentProps>("offerCareer");

  if (error) history.push(RoutesBuilder.notFound);

  return (
    <OfferCareers
      className={className}
      title={translations!.title}
      offer={offer}
    />
  );
};

export { OfferCareersContainer };
