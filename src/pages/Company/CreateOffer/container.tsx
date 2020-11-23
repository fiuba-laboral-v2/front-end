import React, { FunctionComponent, useCallback } from "react";
import { useCreateOffer, useTranslations } from "$hooks";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { useHistory } from "react-router-dom";
import { EditOffer, IEditOfferTranslations } from "$components/EditOffer";
import { formErrorHandlers } from "$models/errorHandlers/formErrorHandlers";
import { useSnackbar } from "$hooks/snackbar/useSnackbar";
import { FormFooter } from "$components/FormFooter";
import { Window } from "$components/Window";
import { ICreateOfferValues, IOffer } from "$interfaces/Offer";
import { isNil } from "lodash";
import { validateSalaryRange } from "validations-fiuba-laboral-v2";
import { Formik } from "$components/Formik";

export const CreateOfferContainer: FunctionComponent = () => {
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  const { createOffer } = useCreateOffer();
  const translations = useTranslations<IEditOfferTranslations>("editOffer");
  const acceptanceCriteria = useTranslations<{ text: string }>("editOfferAcceptanceCriteria");

  const onSubmit = useCallback(
    async (variables: ICreateOfferValues) => {
      const response = await createOffer({
        variables: {
          ...variables,
          careers: variables.careers.map(({ code }) => ({ careerCode: code }))
        },
        errorHandlers: formErrorHandlers({ enqueueSnackbar })()
      });
      if (response.error) return;
      history.push(RoutesBuilder.company.offer(response.data.createOffer.uuid));
    },
    [createOffer, enqueueSnackbar, history]
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

  return (
    <Window loading={!translations || !acceptanceCriteria}>
      <Formik initialValues={modelToValues()} {...{ validateForm, onSubmit }}>
        {formikProps => (
          <EditOffer
            autoFocus
            modelToValues={modelToValues}
            title={translations?.create}
            acceptanceCriteria={acceptanceCriteria?.text}
            infoMessageTranslationGroup="offerCreationInfoMessage"
            formikProps={formikProps}
            formFooter={({ isSubmitting, submitForm, errors }) =>
              translations &&
              acceptanceCriteria && (
                <FormFooter
                  isSubmitting={isSubmitting}
                  submitButtonText={translations?.submit}
                  errors={errors}
                  onSubmit={submitForm}
                />
              )
            }
          />
        )}
      </Formik>
    </Window>
  );
};
