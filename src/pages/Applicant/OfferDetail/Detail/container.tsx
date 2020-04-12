import React, { FunctionComponent } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { sortBy } from "lodash";

import { RoutesBuilder } from "$models/RoutesBuilder";
import { GET_OFFER_BY_UUID, GET_TRANSLATIONS } from "$queries";
import { IOffer } from "$interfaces/Offer";

import { Detail } from "./component";
import { LoadingSpinner } from "$components/LoadingSpinner";

const DetailContainer: FunctionComponent = () => {
  const { id: uuid } = useParams();
  const history = useHistory();

  const {
    data: { getTranslations } = { getTranslations: [] },
    error: translationsError,
    loading: loadingTranslations
  } = useQuery(GET_TRANSLATIONS, { variables: { paths: [ "offer.apply" ] } });

  const {
    data: { getOfferByUuid: offer } = { getOfferByUuid: {} as IOffer },
    error: offerError,
    loading: loadingOffer
  } = useQuery(GET_OFFER_BY_UUID, { variables: { uuid } });

  if (offerError || translationsError) history.push(RoutesBuilder.notFound);
  if (loadingOffer  || loadingTranslations) return <LoadingSpinner/>;

  const [ apply ] = getTranslations;
  offer.sections = sortBy(offer.sections, [ "displayOrder" ]);

  return (
    <Detail
      translations={{ apply }}
      goToCompany={RoutesBuilder.company.detail(offer.company.id)}
      offer={offer}
    />
  );
};

export { DetailContainer };
