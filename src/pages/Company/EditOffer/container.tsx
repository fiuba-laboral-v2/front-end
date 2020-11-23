import React, { FunctionComponent, useState, useCallback } from "react";
import { useCompanyOfferByUuid, useEditOffer, useTranslations } from "$hooks";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { EditOffer, IEditOfferTranslations } from "$components/EditOffer";
import { useHistory, useParams } from "react-router-dom";
import { useSnackbar } from "$hooks/snackbar/useSnackbar";
import { formErrorHandlers } from "$models/errorHandlers/formErrorHandlers";
import { FormFooter } from "$components/FormFooter";
import { FormConfirmDialog, IConfirmDialogTranslations } from "$components/FormConfirmDialog";
import { ICreateOfferValues, IOffer } from "$interfaces/Offer";
import { Window } from "$components/Window";
import { LoadingWindow } from "$components/LoadingWindow";
import { isNil } from "lodash";
import { validateSalaryRange } from "validations-fiuba-laboral-v2";
import { Formik } from "$components/Formik";

export const EditOfferContainer: FunctionComponent = () => {
  const [confirmDialogIsOpen, setConfirmDialogIsOpen] = useState(false);
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  const translations = useTranslations<IEditOfferTranslations & IConfirmDialogTranslations>(
    "editOffer"
  );
  const acceptanceCriteria = useTranslations<{ text: string }>("editOfferAcceptanceCriteria");
  const { uuid } = useParams();
  const { editOffer } = useEditOffer();
  const getOffer = useCompanyOfferByUuid(uuid);

  const offer = getOffer.data?.getOfferByUuid;
  const offerUuid = getOffer.data?.getOfferByUuid.uuid || "";

  const onSubmit = useCallback(
    async (variables: ICreateOfferValues) => {
      const response = await editOffer({
        variables: {
          uuid: offerUuid,
          ...variables,
          careers: variables.careers.map(({ code }) => ({ careerCode: code }))
        },
        errorHandlers: formErrorHandlers({ enqueueSnackbar })(),
        update: cache =>
          cache.modify({
            id: `Offer:${offerUuid}`,
            fields: {
              targetApplicantType: () => variables.targetApplicantType,
              sections: () => variables.sections
            }
          })
      });
      if (response.error) return;
      history.push(RoutesBuilder.company.offer(response.data?.editOffer.uuid));
    },
    [offerUuid, editOffer, enqueueSnackbar, history]
  );

  const modelToValues = useCallback((model?: IOffer) => {
    const values: ICreateOfferValues = {
      title: model?.title || "",
      description: model?.description || "",
      targetApplicantType: model?.targetApplicantType || "",
      hoursPerDay: model?.hoursPerDay || NaN,
      minimumSalary: model?.minimumSalary || NaN,
      maximumSalary: model?.maximumSalary || NaN,
      isInternship: model?.isInternship || false,
      careers: model?.careers || [],
      sections: model?.sections || [],
      _form: []
    };
    return values;
  }, []);

  const validateForm = useCallback((values: ICreateOfferValues) => {
    if (isNil(values.maximumSalary)) return;
    if (isNaN(values.minimumSalary) || isNaN(values.maximumSalary)) return;
    try {
      validateSalaryRange(values.minimumSalary, values.maximumSalary);
    } catch ({ message }) {
      return { _form: message };
    }
  }, []);

  if (!translations || !getOffer.data || !acceptanceCriteria) return <LoadingWindow />;

  return (
    <Window>
      <Formik initialValues={modelToValues()} {...{ validateForm, onSubmit }}>
        {formikProps => (
          <EditOffer
            offer={offer}
            modelToValues={modelToValues}
            title={translations.edit}
            acceptanceCriteria={acceptanceCriteria.text}
            infoMessageTranslationGroup="offerEditionInfoMessage"
            formikProps={formikProps}
            formFooter={({ isSubmitting, submitForm, errors }) => (
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
            )}
          />
        )}
      </Formik>
    </Window>
  );
};
