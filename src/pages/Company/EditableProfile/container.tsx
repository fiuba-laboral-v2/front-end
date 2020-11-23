import React, { FunctionComponent, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { FormikHelpers } from "formik";
import { useMyCompanyProfile, useTranslations, useUpdateCurrentCompany } from "$hooks";
import { Redirect } from "$components/Redirect";
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
  const companyProfile = useMyCompanyProfile();
  const translations = useTranslations<IEditableProfileTranslations>("editMyCompanyProfile");
  const acceptanceCriteria = useTranslations<{ text: string }>("companyEditableAcceptanceCriteria");

  const company = companyProfile.data?.getCurrentUser.company;

  const modelToValues = useCallback((model?: ICompany) => {
    const values: IEditableProfileFormValues = {
      uuid: model?.uuid || "",
      companyName: model?.companyName,
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

  if (companyProfile.error) return <Redirect to={RoutesBuilder.public.internalServerError()} />;

  return (
    <Window loading={!translations || !companyProfile || !acceptanceCriteria || !company}>
      <Formik initialValues={modelToValues()} {...{ onSubmit }}>
        {formikProps => (
          <FormikForm initialValuesModel={company} {...{ modelToValues, formikProps }}>
            <EditableProfile
              acceptanceCriteria={acceptanceCriteria?.text}
              {...{ translations, formikProps }}
            />
          </FormikForm>
        )}
      </Formik>
    </Window>
  );
};
