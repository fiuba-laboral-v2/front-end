import React, { FunctionComponent } from "react";
import { useParams } from "react-router-dom";
import { useQuery, useMutation, useTranslations } from "$hooks";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { GET_OFFER_BY_UUID } from "$queries";
import { SAVE_JOB_APPLICATION } from "$mutations";
import { OfferDetail } from "./component";
import { LoadingSpinner } from "$components/LoadingSpinner";
import { Redirect } from "$components/Redirect";
import { IOfferDetailTranslations } from "./interfaces";
import { IMyOffer } from "$interfaces/Applicant";

export const OfferDetailContainer: FunctionComponent = () => {
  const { uuid } = useParams();
  const saveJobApplication = useMutation(SAVE_JOB_APPLICATION);
  const translations = useTranslations<IOfferDetailTranslations>("offerDetail");

  const response = useQuery<{ uuid?: string }, { getOfferByUuid: IMyOffer }>(
    GET_OFFER_BY_UUID,
    { variables: { uuid } }
  );

  if (response.error || translations.error) {
    return <Redirect to={RoutesBuilder.public.internalServerError()}/>;
  }
  if (response.loading || translations.loading) return <LoadingSpinner/>;

  const apply = async (offerUuid: string) => {
    const { error } = await saveJobApplication({
      variables: { offerUuid },
      handlers: { JobApplicationAlreadyExistsError: () => alert(translations.data.alreadyApplied) },
      update: cache => cache.writeData({ id: `Offer_${offerUuid}`, data: { hasApplied: true } })
    });
    if (!error) alert(translations.data.applySuccess);
  };

  return (
    <OfferDetail
      offer={response.data.getOfferByUuid}
      apply={apply}
      translations={translations.data}
    />
  );
};
