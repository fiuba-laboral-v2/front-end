import React, { FunctionComponent } from "react";
import { useHistory } from "react-router-dom";
import { FormikHelpers } from "formik";
import { useMyCompanyProfile, useUpdateCurrentCompany, useTranslations } from "$hooks";
import { Redirect } from "$components/Redirect";
import { EditableProfile } from "./component";
import { LoadingSpinner } from "$components/LoadingSpinner";
import { IEditableProfileTranslations, IEditableProfileFormValues } from "./interface";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { saveCompanyErrorHandlers } from "$errorHandlers/saveCompanyErrorHandlers";

export const EditableProfileContainer: FunctionComponent = () => {
  const history = useHistory();
  const updateCurrentCompany = useUpdateCurrentCompany();
  const companyProfile = useMyCompanyProfile();

  const translations = useTranslations<IEditableProfileTranslations>("editMyCompanyProfile");
  if (translations.loading || companyProfile.loading) return <LoadingSpinner/>;
  if (translations.error || companyProfile.error) {
    return <Redirect to={RoutesBuilder.public.internalServerError()}/>;
  }

  const onUpdate = async (
    {
      _form,
      ...companyValues
    }: IEditableProfileFormValues,
    { setErrors, setSubmitting }: FormikHelpers<IEditableProfileFormValues>
  ) => {
    const updateCompanyResult = await updateCurrentCompany({
      variables: companyValues,
      handlers: saveCompanyErrorHandlers({ setErrors, history })
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
        cuit: company.cuit,
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
      translations={translations.data}
      onUpdate={onUpdate}
    />
  );
};
