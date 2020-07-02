import React, { FunctionComponent } from "react";
import { useParams } from "react-router-dom";
import { useApplicantOfferByUuid, useMutation, useTranslations } from "$hooks";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { SAVE_JOB_APPLICATION } from "$mutations";
import { OfferDetail } from "./component";
import { LoadingSpinner } from "$components/LoadingSpinner";
import { Redirect } from "$components/Redirect";
import { IOfferDetailTranslations } from "./interfaces";
import { useSnackBar } from "$hooks/useSnackBar";

export const OfferDetailContainer: FunctionComponent = () => {
  const { uuid } = useParams();
  const showError = useSnackBar();
  const saveJobApplication = useMutation(SAVE_JOB_APPLICATION);
  const translations = useTranslations<IOfferDetailTranslations>("offerDetail");
  const response = useApplicantOfferByUuid(uuid);

  if (translations.error) return <Redirect to={RoutesBuilder.public.internalServerError()}/>;
  if (response.error || response.loading || translations.loading) return <LoadingSpinner/>;

  const apply = async (offerUuid: string) => {
    const { error } = await saveJobApplication({
      variables: { offerUuid },
      errorHandlers: {
        JobApplicationAlreadyExistsError: () =>
          showError({ message: translations.data.alreadyApplied, variant: "error" })
      },
      update: cache => cache.writeData({ id: `Offer_${offerUuid}`, data: { hasApplied: true } })
    });
    if (!error) showError({ message: translations.data.applySuccess, variant: "success" });
  };

  return (
    <OfferDetail
      offer={response.data.getOfferByUuid}
      apply={apply}
      translations={translations.data}
    />
  );
};
