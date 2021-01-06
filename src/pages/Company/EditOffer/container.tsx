import React, { FunctionComponent, useState, useCallback } from "react";
import { useCompanyOfferByUuid, useEditOffer, useTranslations } from "$hooks";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { EditOffer, IEditOfferTranslations } from "$components/EditOffer";
import { useHistory, useParams } from "react-router-dom";
import { useSnackbar } from "$hooks/snackbar/useSnackbar";
import { formErrorHandlers } from "$models/errorHandlers/formErrorHandlers";
import { FormFooter } from "$components/FormFooter";
import { FormConfirmDialog } from "$components/Dialog/FormConfirmDialog";
import { ICreateOfferValues } from "$interfaces/Offer";
import { saveOfferArguments } from "$models/MutationArguments";

export const EditOfferContainer: FunctionComponent = () => {
  const [confirmDialogIsOpen, setConfirmDialogIsOpen] = useState(false);
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  const { uuid } = useParams();
  const { editOffer } = useEditOffer();
  const offer = useCompanyOfferByUuid(uuid).data?.getOfferByUuid;
  const translations = useTranslations<IEditOfferTranslations>("editOffer");
  const offerUuid = offer?.uuid || "";

  const onSubmit = useCallback(
    async (values: ICreateOfferValues) => {
      const response = await editOffer({
        variables: saveOfferArguments({
          uuid: offerUuid,
          ...values,
          careers: values.careers.map(({ code }) => ({ careerCode: code }))
        }),
        errorHandlers: formErrorHandlers({ enqueueSnackbar })(),
        update: cache =>
          cache.modify({
            id: `Offer:${offerUuid}`,
            fields: {
              targetApplicantType: () => values.targetApplicantType,
              sections: () => values.sections
            }
          })
      });
      if (response.error) return;
      history.push(RoutesBuilder.company.offer(response.data?.editOffer.uuid));
    },
    [offerUuid, editOffer, enqueueSnackbar, history]
  );

  return (
    <EditOffer
      loading={!translations || !offer}
      offer={offer}
      onSubmit={onSubmit}
      title={translations?.edit}
      infoMessageTranslationGroup="offerEditionInfoMessage"
      formFooter={({ isSubmitting, submitForm, errors }) => (
        <>
          <FormFooter
            isSubmitting={isSubmitting}
            submitButtonText={translations?.submit}
            errors={errors}
            onSubmit={() => setConfirmDialogIsOpen(true)}
          />
          <FormConfirmDialog
            isOpen={confirmDialogIsOpen}
            onConfirmAndClose={submitForm}
            onClose={() => setConfirmDialogIsOpen(false)}
            translations={translations}
          />
        </>
      )}
    />
  );
};
