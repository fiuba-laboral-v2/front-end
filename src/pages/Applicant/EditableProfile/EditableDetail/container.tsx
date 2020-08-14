import React, { FunctionComponent, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { EditableDetail } from "./component";
import { useMyApplicantProfile, useTranslations, useUpdateCurrentApplicant } from "$hooks";
import { LoadingSpinner } from "$components/LoadingSpinner";
import { hasUniqueValues } from "$models/hasUniqueValues";
import { IApplicantDetailEditableTranslations, IEditableDetailValues } from "./interface";
import { Redirect } from "$components/Redirect";
import { formErrorHandlers } from "$models/errorHandlers/formErrorHandlers";
import { useSnackbar } from "notistack";

const EditableDetailContainer: FunctionComponent = () => {
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  const updateApplicant = useUpdateCurrentApplicant();
  const applicantProfile = useMyApplicantProfile();
  const translations = useTranslations<IApplicantDetailEditableTranslations>("editableDetail");

  const validateForm = useCallback(
    ({ careers: selectedCareers, links: selectedLinks }: IEditableDetailValues) => {
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

  const onSubmit = async ({ name, surname, ...values }: IEditableDetailValues) => {
    const result = await updateApplicant({
      variables: {
        ...values,
        user: { name, surname },
        capabilities: values.capabilities.map(capability => capability.description),
        careers: values.careers
      },
      errorHandlers: formErrorHandlers({ enqueueSnackbar })()
    });
    if (!result.error) history.push(RoutesBuilder.applicant.myProfile());
  };

  const {
    uuid,
    user,
    description = "",
    links,
    careers,
    capabilities,
    sections
  } = applicantProfile.data.getCurrentUser.applicant;

  return (
    <EditableDetail
      onSubmit={onSubmit}
      translations={translations}
      initialValues={{
        uuid,
        name: user.name,
        surname: user.surname,
        description,
        links,
        careers: careers.map(({ career, approvedSubjectCount, approvedYearCount, isGraduate }) => ({
          careerCode: career.code,
          approvedSubjectCount,
          approvedYearCount,
          isGraduate
        })),
        capabilities,
        sections,
        _form: []
      }}
      validateForm={validateForm}
    />
  );
};

export { EditableDetailContainer };
