import React, { FunctionComponent, useCallback } from "react";
import { useCreateOffer, useTranslations } from "$hooks";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { useHistory } from "react-router-dom";
import { EditOffer, IEditOfferTranslations } from "$components/EditOffer";
import { formErrorHandlers } from "$models/errorHandlers/formErrorHandlers";
import { useSnackbar } from "$hooks/snackbar/useSnackbar";
import { FormFooter } from "$components/FormFooter";
import { ICreateOfferValues } from "$interfaces/Offer";

export const CreateOfferContainer: FunctionComponent = () => {
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  const { createOffer } = useCreateOffer();
  const translations = useTranslations<IEditOfferTranslations>("editOffer");

  const onSubmit = useCallback(
    async (values: ICreateOfferValues) => {
      const response = await createOffer({
        variables: {
          ...values,
          careers: values.careers.map(({ code }) => ({ careerCode: code }))
        },
        errorHandlers: formErrorHandlers({ enqueueSnackbar })()
      });
      if (response.error) return;
      history.push(RoutesBuilder.company.offer(response.data.createOffer.uuid));
    },
    [createOffer, enqueueSnackbar, history]
  );

  return (
    <EditOffer
      loading={!translations}
      autoFocus
      onSubmit={onSubmit}
      title={translations?.create}
      infoMessageTranslationGroup="offerCreationInfoMessage"
      formFooter={({ isSubmitting, submitForm, errors }) => (
        <FormFooter
          isSubmitting={isSubmitting}
          submitButtonText={translations?.submit}
          errors={errors}
          onSubmit={submitForm}
        />
      )}
    />
  );
};
