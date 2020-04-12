import React, { FunctionComponent } from "react";
import { useQuery } from "@apollo/react-hooks";
import { useHistory } from "react-router-dom";
import { GET_TRANSLATIONS } from "$queries";
import { OfferCareers } from "./component";
import { IOfferCareersContainerProps } from "./interface";
import { RoutesBuilder } from "$models/RoutesBuilder";

const OfferCareersContainer: FunctionComponent<IOfferCareersContainerProps> = (
  {
    offer,
    className
  }) => {
  const history = useHistory();
  const {
    data: { getTranslations } = { getTranslations: [] },
    error
  } = useQuery(GET_TRANSLATIONS, { variables: { paths: [ "offer.careersTitle" ] } });

  if (error) history.push(RoutesBuilder.notFound);

  const [ title ] = getTranslations;

  return (
    <OfferCareers
      className={className}
      title={title}
      offer={offer}
    />
  );
};

export { OfferCareersContainer };
