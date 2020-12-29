import React, { FunctionComponent } from "react";
import { useParams } from "react-router-dom";
import {
  useOfferForApplicant,
  useMutation,
  useTranslations,
  useCurrentApplicantType
} from "$hooks";
import { SAVE_JOB_APPLICATION } from "$mutations";
import { OfferDetail } from "./component";
import { IOfferDetailTranslations } from "./interfaces";
import { useShowError } from "$hooks/snackbar/useShowError";
import { useShowSuccess } from "$hooks/snackbar/useShowSuccess";

export const OfferDetailContainer: FunctionComponent = () => {
  const { uuid } = useParams();
  const showError = useShowError();
  const showSuccess = useShowSuccess();
  const { mutation: saveJobApplication } = useMutation(SAVE_JOB_APPLICATION);
  const translations = useTranslations<IOfferDetailTranslations>("offerDetail");
  const offer = useOfferForApplicant(uuid).data?.getOfferByUuid;
  const currentApplicantType = useCurrentApplicantType();

  const apply = async (offerUuid: string) => {
    const { error } = await saveJobApplication({
      variables: { offerUuid },
      errorHandlers: {
        JobApplicationAlreadyExistsError: () => showError({ message: translations?.alreadyApplied })
      },
      update: cache =>
        cache.modify({
          id: `Offer:${offerUuid}`,
          fields: {
            hasApplied: () => true
          }
        })
    });
    if (!error && translations) showSuccess({ message: translations.applySuccess });
  };

  return (
    <OfferDetail
      offer={offer}
      labelTargetApplicantType={currentApplicantType}
      apply={apply}
      translations={translations}
    />
  );
};
