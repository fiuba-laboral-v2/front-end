import React, { FunctionComponent } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { sortBy } from "lodash";

import { RoutesBuilder } from "$src/routesBuilder";
import { GET_OFFER_BY_UUID } from "$queries";
import { IOffer } from "$interfaces/Offer";

import { DetailCard } from "./component";
import { LoadingSpinner } from "$components/LoadingSpinner";

const DetailCardContainer: FunctionComponent = () => {
  const { id: uuid } = useParams();
  const history = useHistory();

  const {
    data: { getOfferByUuid: offer } = { getOfferByUuid: {} as IOffer },
    error: offerError,
    loading: loadingOffer
  } = useQuery(GET_OFFER_BY_UUID, { variables: { uuid } });

  if (offerError) history.push(RoutesBuilder.notFound);
  if (loadingOffer) return <LoadingSpinner/>;

  offer.sections = sortBy(offer.sections, ["displayOrder"]);

  return (
    <DetailCard
      goToCompany={RoutesBuilder.company.detail(offer.company.id)}
      offer={offer}
    />
  );
};

export { DetailCardContainer };
