import React, { FunctionComponent } from "react";
import { useHistory } from "react-router-dom";
import { useQuery, useTranslations } from "$hooks";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { GET_MY_OFFERS } from "$queries";

import { LoadingSpinner } from "$components/LoadingSpinner";
import { Redirect } from "$components/Redirect";
import { IOffer } from "$interfaces/Offer";

import { MyOffers } from "./component";

export const MyOffersContainer: FunctionComponent = () => {
  const history = useHistory();
  const response = useQuery<{ uuid?: string }, { getMyOffers: IOffer[] }>(GET_MY_OFFERS);
  const translations = useTranslations<ITranslations>("MyOffers");

  if (response.error || translations.error) {
    return <Redirect to={RoutesBuilder.public.internalServerError()}/>;
  }
  if (response.loading || translations.loading) return <LoadingSpinner/>;

  const offers = response.data.getMyOffers;

  return (
    <MyOffers
      translations={translations.data}
      offers={offers}
      onCardClick={(uuid: string) => history.push(RoutesBuilder.company.offer(uuid))}
    />);
};

interface ITranslations {
  title: string;
}
