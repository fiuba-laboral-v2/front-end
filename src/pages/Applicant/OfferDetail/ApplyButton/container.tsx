import React, { FunctionComponent, useCallback, useState } from "react";

import { useShowSuccess, useShowError, useTranslations } from "$hooks";

import { IApplyButtonContainerProps, ITranslations } from "./interface";
import { ApplyButton } from "./component";
import { useSaveJobApplication } from "$hooks/mutations/useSaveJobApplication";
import { saveJobApplicationErrorHandlers } from "$errorHandlers";

export const ApplyButtonContainer: FunctionComponent<IApplyButtonContainerProps> = ({ offer }) => {
  const showSuccess = useShowSuccess();
  const showError = useShowError();
  const { saveJobApplication } = useSaveJobApplication(offer.uuid);
  const translations = useTranslations<ITranslations>("offerDetail");
  const [confirmDialogIsOpen, setConfirmDialogIsOpen] = useState(false);

  const apply = useCallback(async () => {
    const { error } = await saveJobApplication({
      variables: { offerUuid: offer.uuid },
      errorHandlers: saveJobApplicationErrorHandlers(showError)
    });
    if (!error) showSuccess({ message: translations?.applySuccess || "" });
  }, [offer, showError, saveJobApplication, showSuccess, translations]);

  const onApply = useCallback(() => {
    setConfirmDialogIsOpen(true);
  }, [setConfirmDialogIsOpen]);

  const onApplyConfirm = useCallback(() => {
    setConfirmDialogIsOpen(false);
    apply();
  }, [apply, setConfirmDialogIsOpen]);

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
