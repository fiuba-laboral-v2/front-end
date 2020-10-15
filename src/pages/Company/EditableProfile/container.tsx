import React, { FunctionComponent } from "react";
import { useHistory } from "react-router-dom";
import { FormikHelpers } from "formik";
import { useMyCompanyProfile, useTranslations, useUpdateCurrentCompany } from "$hooks";
import { Redirect } from "$components/Redirect";
import { EditableProfile } from "./component";
import { LoadingSpinner } from "$components/LoadingSpinner";
import { IEditableProfileFormValues, IEditableProfileTranslations } from "./interface";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { saveCompanyErrorHandlers } from "$errorHandlers/saveCompanyErrorHandlers";
import { useSnackbar } from "notistack";

export const EditableProfileContainer: FunctionComponent = () => {
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  const { updateCurrentCompany } = useUpdateCurrentCompany();
  const companyProfile = useMyCompanyProfile();

  const translations = useTranslations<IEditableProfileTranslations>("editMyCompanyProfile");
  if (!translations || companyProfile.loading) return <LoadingSpinner />;
  if (companyProfile.error) {
    return <Redirect to={RoutesBuilder.public.internalServerError()} />;
  }

  const onUpdate = async (
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
  };

  const company = companyProfile.data.getCurrentUser.company;

  return (
    <EditableProfile
      initialValues={{
        uuid: company.uuid,
        companyName: company.companyName,
        slogan: company.slogan,
        description: company.description,
        logo: company.logo,
        website: company.website,
        email: company.email,
        phoneNumbers: company.phoneNumbers,
        photos: company.photos,
        _form: ""
      }}
      translations={translations}
      onUpdate={onUpdate}
    />
  );
};
