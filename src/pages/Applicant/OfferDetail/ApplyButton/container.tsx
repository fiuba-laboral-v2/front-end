import React, { FunctionComponent, useState } from "react";

import { useMutation, useShowError, useShowSuccess, useTranslations } from "$hooks";
import { SAVE_JOB_APPLICATION } from "$mutations";

import { IApplyButtonContainerProps, ITranslations } from "./interface";
import { ApplyButton } from "./component";

export const ApplyButtonContainer: FunctionComponent<IApplyButtonContainerProps> = ({ offer }) => {
  const showError = useShowError();
  const showSuccess = useShowSuccess();
  const { mutation: saveJobApplication } = useMutation(SAVE_JOB_APPLICATION);
  const translations = useTranslations<ITranslations>("offerDetail");
  const [confirmDialogIsOpen, setConfirmDialogIsOpen] = useState(false);

  const apply = async () => {
    const { error } = await saveJobApplication({
      variables: { offerUuid: offer.uuid },
      errorHandlers: {
        JobApplicationAlreadyExistsError: () => showError({ message: translations?.alreadyApplied })
      },
      update: cache =>
        cache.modify({
          id: `Offer:${offer.uuid}`,
          fields: {
            hasApplied: () => true
          }
        })
    });
    if (!error && translations) showSuccess({ message: translations.applySuccess });
  };

  const onApply = () => {
    setConfirmDialogIsOpen(true);
  };

  const onApplyConfirm = () => {
    setConfirmDialogIsOpen(false);
    apply();
  };

  const onCancel = () => setConfirmDialogIsOpen(false);

  return (
    <>
      {translations && (
        <ApplyButton
          offer={offer}
          onApply={onApply}
          onApplyConfirm={onApplyConfirm}
          onCancel={onCancel}
          confirmDialogIsOpen={confirmDialogIsOpen}
          translations={translations}
        />
      )}
    </>
  );
};
