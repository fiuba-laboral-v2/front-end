import React, { FunctionComponent } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useQuery, useTranslations } from "$hooks";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { GET_COMPANY_OFFER_BY_UUID } from "$queries";
import { OfferDetail } from "$components/OfferDetail";
import { LoadingSpinner } from "$components/LoadingSpinner";
import { Redirect } from "$components/Redirect";
import { Window } from "$components/Window";
import { IOffer } from "$interfaces/Offer";
import Button from "$components/Button";

export const OfferDetailContainer: FunctionComponent = () => {
  const history = useHistory();
  const { uuid } = useParams();
  const response = useQuery<{ uuid?: string }, { getOfferByUuid: IOffer }>(
    GET_COMPANY_OFFER_BY_UUID,
    { variables: { uuid } }
  );
  const translations = useTranslations<ITranslations>("offerDetail");

  if (response.error || translations.error) {
    return <Redirect to={RoutesBuilder.public.internalServerError()}/>;
  }
  if (response.loading || translations.loading) return <LoadingSpinner/>;

  const offer = response.data.getOfferByUuid;

  return (
    <Window>
      <OfferDetail
        editButton={
          <Button
            className={"primary"}
            onClick={() => history.push(
              RoutesBuilder.company.editOffer(offer.uuid)
            )}>
            {translations.data.edit}
          </Button>
        }
        goToCompany={RoutesBuilder.company.myProfile()}
        offer={offer}
      />
    </Window>
  );
};

interface ITranslations {
  edit: string;
}
