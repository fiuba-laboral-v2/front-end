import React, { Fragment, FunctionComponent, useState } from "react";
import { useCompanyOfferByUuid, useEditOffer, useTranslations } from "$hooks";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { EditOffer, ICreateOfferValues, IEditOfferTranslations } from "$components/EditOffer";
import { useHistory, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";
import { formErrorHandlers } from "$models/errorHandlers/formErrorHandlers";
import { FormFooter } from "$components/FormFooter";
import { FormConfirmDialog, IConfirmDialogTranslations } from "$components/FormConfirmDialog";

export const EditOfferContainer: FunctionComponent = () => {
  const [confirmDialogIsOpen, setConfirmDialogIsOpen] = useState(false);
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  const translations = useTranslations<IEditOfferTranslations & IConfirmDialogTranslations>("editOffer");
  const { uuid } = useParams();
  const { editOffer } = useEditOffer();
  const getOffer = useCompanyOfferByUuid(uuid);

  if (!translations || getOffer.loading || getOffer.error) return <Fragment/>;

  const onSubmit = async (variables: ICreateOfferValues) => {
    const response = await editOffer({
      variables,
      errorHandlers: formErrorHandlers({ enqueueSnackbar })(),
      update: cache => cache.modify({
        id: `Offer:${getOffer.data.getOfferByUuid.uuid}`,
        fields: {
          targetApplicantType: () => variables.targetApplicantType
        }
      })
    });
    if (response.error) return;
    history.push(RoutesBuilder.company.offer(response.data?.editOffer.uuid));
  };

  return <EditOffer
    title={translations.edit}
    translations={translations}
    initialValues={{ _form: "", ...getOffer.data.getOfferByUuid }}
    onSubmit={onSubmit}
    formFooter={({ isSubmitting, submitForm, errors }) =>
      <>
        <FormFooter
          isSubmitting={isSubmitting}
          submitButtonText={translations.submit}
          errors={errors}
          onSubmit={() => setConfirmDialogIsOpen(true)}
        />
        <FormConfirmDialog
          isOpen={confirmDialogIsOpen}
          onConfirm={submitForm}
          onClose={() => setConfirmDialogIsOpen(false)}
          translations={translations}
        />
      </>
    }
  />;
};
