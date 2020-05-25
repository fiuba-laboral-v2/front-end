import React, { FunctionComponent, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { EditableDetail } from "./component";
import { useTranslations, useUpdateCurrentApplicant } from "$hooks";
import { LoadingSpinner } from "$components/LoadingSpinner";
import { hasUniqueValues } from "$models/hasUniqueValues";
import { IApplicantDetailEditableTranslations, IEditableDetailValues } from "./interface";
import { Redirect } from "$components/Redirect";
import { useMyApplicantProfile } from "$hooks";

const EditableDetailContainer: FunctionComponent = () => {
  const history = useHistory();
  const updateApplicant = useUpdateCurrentApplicant();
  const applicantProfile = useMyApplicantProfile();
  const translations = useTranslations<IApplicantDetailEditableTranslations>("editableDetail");

  const validateForm = useCallback(
    ({ careers: selectedCareers, links: selectedLinks }: IEditableDetailValues) => {
      const formErrors = [];
      const selectedCodes = selectedCareers.map(career => career.code);
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

  if (applicantProfile.error || translations.error) {
    return <Redirect to={RoutesBuilder.public.internalServerError}/>;
  }
  if (applicantProfile.loading || translations.loading) return <LoadingSpinner/>;

  const onSubmit = async (
    {
      name,
      surname,
      ...values
    }: IEditableDetailValues) => {
    try {
      await updateApplicant({
        variables: {
          ...values,
          user: {
            name,
            surname
          },
          capabilities: values.capabilities.map(capability => capability.description),
          careers: values.careers.map(({ code, creditsCount }) => ({ code, creditsCount }))
        }
      });
      history.push(RoutesBuilder.applicant.myProfile);
    } catch (error) {
      history.push(RoutesBuilder.public.notFound);
    }
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
      translations={translations.data}
      initialValues={{
        uuid,
        name: user.name,
        surname: user.surname,
        description,
        links,
        careers: careers.map(({ code, creditsCount }) => (
          { code, creditsCount: creditsCount }
        )),
        capabilities,
        sections,
        _form: []
      }}
      validateForm={validateForm}
    />
  );
};

export { EditableDetailContainer };
