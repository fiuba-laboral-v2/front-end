import React, { FunctionComponent } from "react";
import { useParams } from "react-router-dom";
import { useOfferVisibleByApplicant, useMutation, useTranslations } from "$hooks";
import { SAVE_JOB_APPLICATION } from "$mutations";
import { OfferDetail } from "./component";
import { LoadingSpinner } from "$components/LoadingSpinner";
import { IOfferDetailTranslations } from "./interfaces";
import { useShowError } from "$hooks/snackbar/useShowError";
import { useShowSuccess } from "$hooks/snackbar/useShowSuccess";

export const OfferDetailContainer: FunctionComponent = () => {
  const { uuid } = useParams();
  const showError = useShowError();
  const showSuccess = useShowSuccess();
  const saveJobApplication = useMutation(SAVE_JOB_APPLICATION);
  const translations = useTranslations<IOfferDetailTranslations>("offerDetail");
  const response = useOfferVisibleByApplicant(uuid);

  if (response.error || response.loading || !translations) return <LoadingSpinner/>;

  const apply = async (offerUuid: string) => {
    const { error } = await saveJobApplication({
      variables: { offerUuid },
      errorHandlers: {
        JobApplicationAlreadyExistsError: () =>
          showError({ message: translations.alreadyApplied })
      },
      update: cache => cache.modify({
        id: `Offer:${offerUuid}`,
        fields: {
          hasApplied: () => true
        }
      })
    });
    if (!error) showSuccess({ message: translations.applySuccess });
  };

  return (
    <OfferDetail
      offer={response.data.getOfferVisibleByCurrentApplicant}
      apply={apply}
      translations={translations}
    />
  );
};
