import React, { FunctionComponent, useCallback } from "react";
import { useCreateOffer, useTranslations, useShowError } from "$hooks";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { useHistory } from "react-router-dom";
import { EditOffer, IEditOfferTranslations } from "$components/EditOffer";
import { formErrorHandlers } from "$models/errorHandlers/formErrorHandlers";
import { FormFooter } from "$components/FormFooter";
import { ICreateOfferValues } from "$interfaces/Offer";
import { saveOfferArguments } from "$models/MutationArguments";

export const CreateOfferContainer: FunctionComponent = () => {
  const history = useHistory();
  const showError = useShowError();
  const { createOffer } = useCreateOffer();
  const translations = useTranslations<IEditOfferTranslations>("editOffer");

  const onSubmit = useCallback(
    async (values: ICreateOfferValues) => {
      const response = await createOffer({
        variables: saveOfferArguments({
          ...values,
          careers: values.careers.map(({ code }) => ({ careerCode: code }))
        }),
        errorHandlers: formErrorHandlers(showError)()
      });
      if (response.error) return;
      history.push(RoutesBuilder.company.offer(response.data.createOffer.uuid));
    },
    [createOffer, showError, history]
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
