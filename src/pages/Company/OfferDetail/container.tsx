import React, { FunctionComponent } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "$hooks";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { GET_COMPANY_OFFER_BY_UUID } from "$queries";
import { OfferDetail } from "$components/OfferDetail";
import { LoadingSpinner } from "$components/LoadingSpinner";
import { Redirect } from "$components/Redirect";
import { Window } from "$components/Window";
import { IOffer } from "$interfaces/Offer";

export const OfferDetailContainer: FunctionComponent = () => {
  const { id: uuid } = useParams();
  const response = useQuery<{ uuid?: string }, { getOfferByUuid: IOffer }>(
    GET_COMPANY_OFFER_BY_UUID,
    { variables: { uuid } }
  );

  if (response.error) return <Redirect to={RoutesBuilder.public.internalServerError()}/>;
  if (response.loading) return <LoadingSpinner/>;

  return (
    <Window>
      <OfferDetail
        goToCompany={RoutesBuilder.company.myProfile()}
        offer={response.data.getOfferByUuid}
      />
    </Window>
  );
};
