import React, { FunctionComponent } from "react";
import { useParams } from "react-router-dom";
import { useMutation, useQuery, useTranslations } from "$hooks";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { GET_OFFER_BY_UUID } from "$queries";
import { SAVE_JOB_APPLICATION } from "$mutations";
import { OfferDetail } from "./component";
import { LoadingSpinner } from "$components/LoadingSpinner";
import { Redirect } from "$components/Redirect";
import { IOfferDetailTranslations } from "./interfaces";
import { IMyOffer } from "$interfaces/Applicant";
import { useSnackbar } from "notistack";

export const OfferDetailContainer: FunctionComponent = () => {
  const { uuid } = useParams();
  const saveJobApplication = useMutation(SAVE_JOB_APPLICATION);
  const translations = useTranslations<IOfferDetailTranslations>("offerDetail");
  const { enqueueSnackbar } = useSnackbar();

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
      errorHandlers: {
        JobApplicationAlreadyExistsError: () =>
          enqueueSnackbar(translations.data.alreadyApplied, { variant: "error" })
      },
      update: cache => cache.writeData({ id: `Offer_${offerUuid}`, data: { hasApplied: true } })
    });
    if (!error) enqueueSnackbar(translations.data.applySuccess, { variant: "success" });
  };

  return (
    <OfferDetail
      offer={response.data.getOfferByUuid}
      apply={apply}
      translations={translations.data}
    />
  );
};
