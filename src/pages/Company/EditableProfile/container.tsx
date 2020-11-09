import React, { FunctionComponent } from "react";
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
import { LoadingWindow } from "$components/LoadingWindow";

export const EditableProfileContainer: FunctionComponent = () => {
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  const { updateCurrentCompany } = useUpdateCurrentCompany();
  const companyProfile = useMyCompanyProfile();
  const company = companyProfile.data?.getCurrentUser.company;

  const translations = useTranslations<IEditableProfileTranslations>("editMyCompanyProfile");
  const acceptanceCriteria = useTranslations<{ text: string }>("companyEditableAcceptanceCriteria");

  if (companyProfile.error) return <Redirect to={RoutesBuilder.public.internalServerError()} />;
  if (!translations || !companyProfile || !acceptanceCriteria || !company) {
    return <LoadingWindow />;
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

  return (
    <Window>
      <EditableProfile
        acceptanceCriteria={acceptanceCriteria.text}
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
    </Window>
  );
};
