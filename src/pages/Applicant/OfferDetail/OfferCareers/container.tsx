import React, { Fragment, FunctionComponent } from "react";
import { Redirect } from "react-router-dom";
import { useTranslations } from "$hooks/translations";
import { OfferCareers } from "./component";
import { IOfferCareersComponentProps, IOfferCareersContainerProps } from "./interface";
import { RoutesBuilder } from "$models/RoutesBuilder";

const OfferCareersContainer: FunctionComponent<IOfferCareersContainerProps> = (
  {
    offer,
    className
  }) => {
  const translations = useTranslations<IOfferCareersComponentProps>("offerCareer");

  if (translations.loading) return <Fragment/>;
  if (translations.error) return <Redirect to={RoutesBuilder.notFound}/>;

  return (
    <OfferCareers
      className={className}
      careersTitle={translations.data.careersTitle}
      offer={offer}
    />
  );
};

export { OfferCareersContainer };
