import React, { FunctionComponent, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { EditableDetail } from "./component";
import { useMyApplicantProfile, useTranslations, useUpdateCurrentApplicant } from "$hooks";
import { LoadingSpinner } from "$components/LoadingSpinner";
import { hasUniqueValues } from "$models/hasUniqueValues";
import { IApplicantDetailEditableTranslations, IApplicantEditableFormValues } from "./interface";
import { Redirect } from "$components/Redirect";
import { formErrorHandlers } from "$models/errorHandlers/formErrorHandlers";
import { updateCurrentApplicantArguments } from "$models/MutationArguments";
import { useSnackbar } from "notistack";

export const EditableDetailContainer: FunctionComponent = () => {
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  const { updateCurrentApplicant } = useUpdateCurrentApplicant();
  const applicantProfile = useMyApplicantProfile();
  const translations = useTranslations<IApplicantDetailEditableTranslations>("editableDetail");

  const validateForm = useCallback(
    ({ careers: selectedCareers, links: selectedLinks }: IApplicantEditableFormValues) => {
      const formErrors = [];
      const selectedCodes = selectedCareers.map(career => career.careerCode);
      if (hasUniqueValues(selectedCodes)) {
        formErrors.push("No se pueden repetir carreras");
      }
      if (selectedCodes.length === 0) {
        formErrors.push("Debes elegir como mínimo una carrera");
      }
      const linksNames: string[] = [];
      const linksUrls: string[] = [];
      selectedLinks.forEach(({ name, url }) => {
        linksNames.push(name);
        linksUrls.push(url);
      });
      if (hasUniqueValues(linksNames)) {
        formErrors.push("No se pueden repetir los nombres de los links");
      }
      if (hasUniqueValues(linksUrls)) {
        formErrors.push("No se pueden repetir las urls de los links");
      }

      return { ...(formErrors.length > 0 && { _form: formErrors }) };
    },
    []
  );

  if (applicantProfile.error) {
    return <Redirect to={RoutesBuilder.public.internalServerError()}/>;
  }
  if (applicantProfile.loading || !translations) return <LoadingSpinner/>;

  const onSubmit = async ({ _form, ...variables }: IApplicantEditableFormValues) => {
    const result = await updateCurrentApplicant({
      variables: updateCurrentApplicantArguments(variables),
      errorHandlers: formErrorHandlers({ enqueueSnackbar })()
    });
    if (!result.error) history.push(RoutesBuilder.applicant.myProfile());
  };

  const applicant = applicantProfile.data.getCurrentUser.applicant;
  return (
    <EditableDetail
      onSubmit={onSubmit}
      translations={translations}
      initialValues={{
        user: {
          email: applicant.user.email,
          name: applicant.user.name,
          surname: applicant.user.surname
        },
        padron: applicant.padron,
        description: applicant.description || "",
        links: applicant.links,
        careers: applicant.careers.map(applicantCareer => ({
          careerCode: applicantCareer.career.code,
          approvedSubjectCount: applicantCareer.approvedSubjectCount || NaN,
          currentCareerYear: applicantCareer.currentCareerYear || NaN,
          isGraduate: applicantCareer.isGraduate
        })),
        capabilities: applicant.capabilities,
        sections: applicant.sections,
        _form: ""
      }}
      validateForm={validateForm}
    />
  );
};
