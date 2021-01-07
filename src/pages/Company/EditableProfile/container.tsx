import React, { FunctionComponent, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { FormikHelpers } from "formik";
import {
  useMyCompanyProfile,
  useTranslations,
  useUpdateCurrentCompany,
  useSharedSettings
} from "$hooks";
import { EditableProfile } from "./component";
import { IEditableProfileFormValues, IEditableProfileTranslations } from "./interfaces";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { saveCompanyErrorHandlers } from "$errorHandlers/saveCompanyErrorHandlers";
import { useSnackbar } from "$hooks/snackbar/useSnackbar";
import { Window } from "$components/Window";
import { Formik } from "$components/Formik";
import { FormikForm } from "$components/FormikForm";
import { ICompany } from "$interfaces/Company";

export const EditableProfileContainer: FunctionComponent = () => {
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  const { updateCurrentCompany } = useUpdateCurrentCompany();
  const company = useMyCompanyProfile();
  const translations = useTranslations<IEditableProfileTranslations>("editMyCompanyProfile");
  const acceptanceCriteria = useSharedSettings()?.companyEditableAcceptanceCriteria;

  const modelToValues = useCallback((model?: ICompany) => {
    const values: IEditableProfileFormValues = {
      uuid: model?.uuid || "",
      companyName: model?.companyName || "",
      businessSector: model?.businessSector || "",
      slogan: model?.slogan,
      description: model?.description,
      logo: model?.logo,
      website: model?.website,
      email: model?.email,
      phoneNumbers: model?.phoneNumbers,
      photos: model?.photos,
      _form: ""
    };
    return values;
  }, []);

  const onSubmit = useCallback(
    async (
      { _form, ...companyValues }: IEditableProfileFormValues,
      { setErrors, setSubmitting }: FormikHelpers<IEditableProfileFormValues>
    ) => {
      const updateCompanyResult = await updateCurrentCompany({
        variables: companyValues,
        errorHandlers: saveCompanyErrorHandlers({ setErrors, enqueueSnackbar })
      });
      if (updateCompanyResult.error) return;

      setSubmitting(false);
      history.push(RoutesBuilder.company.myProfile());
    },
    [enqueueSnackbar, history, updateCurrentCompany]
  );

  return (
    <Window loading={!translations || !company || !acceptanceCriteria || !company}>
      <Formik initialValues={modelToValues()} onSubmit={onSubmit}>
        {formikProps => (
          <FormikForm
            initialValuesModel={company}
            modelToValues={modelToValues}
            formikProps={formikProps}
          >
            <EditableProfile
              acceptanceCriteria={acceptanceCriteria}
              translations={translations}
              formikProps={formikProps}
            />
          </FormikForm>
        )}
      </Formik>
    </Window>
  );
};
