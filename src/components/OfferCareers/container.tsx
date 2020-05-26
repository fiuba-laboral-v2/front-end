import React, { Fragment, FunctionComponent } from "react";
import { useTranslations } from "$hooks";
import { OfferCareers } from "./component";
import { IOfferCareersComponentProps, IOfferCareersContainerProps } from "./interface";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { Redirect } from "$components/Redirect";

const OfferCareersContainer: FunctionComponent<IOfferCareersContainerProps> = (
  {
    offer,
    className
  }) => {
  const translations = useTranslations<IOfferCareersComponentProps>("offerCareer");

  if (translations.loading) return <Fragment/>;
  if (translations.error) return <Redirect to={RoutesBuilder.public.internalServerError()}/>;

  return (
    <OfferCareers
      className={className}
      careersTitle={translations.data.careersTitle}
      offer={offer}
    />
  );
};

export { OfferCareersContainer };
