import React, { FunctionComponent, useCallback, useState } from "react";

import { useShowSuccess, useSnackbar, useTranslations } from "$hooks";

import { IApplyButtonContainerProps, ITranslations } from "./interface";
import { ApplyButton } from "./component";
import { useSaveJobApplication } from "$hooks/mutations/useSaveJobApplication";
import { saveJobApplicationErrorHandlers } from "$errorhandlers";

export const ApplyButtonContainer: FunctionComponent<IApplyButtonContainerProps> = ({ offer }) => {
  const showSuccess = useShowSuccess();
  const { enqueueSnackbar } = useSnackbar();
  const { saveJobApplication } = useSaveJobApplication(offer.uuid);
  const translations = useTranslations<ITranslations>("offerDetail");
  const [confirmDialogIsOpen, setConfirmDialogIsOpen] = useState(false);

  const apply = useCallback(async () => {
    const { error } = await saveJobApplication({
      variables: { offerUuid: offer.uuid },
      errorHandlers: saveJobApplicationErrorHandlers({ enqueueSnackbar })
    });
    if (!error) showSuccess({ message: translations?.applySuccess || "" });
  }, [offer, enqueueSnackbar, saveJobApplication, showSuccess, translations]);

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
