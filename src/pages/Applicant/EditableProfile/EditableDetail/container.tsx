import React, { FunctionComponent, useCallback } from "react";
import { Redirect, useHistory, useParams } from "react-router-dom";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { EditableDetail } from "./component";
import { IApplicant } from "$interfaces/Applicant";
import { useQuery } from "@apollo/react-hooks";
import { useTranslations, useUpdateApplicant } from "$hooks";
import { GET_APPLICANT } from "$queries";
import { LoadingSpinner } from "$components/LoadingSpinner";
import { hasUniqueValues } from "$models/hasUniqueValues";
import { IApplicantDetailEditableTranslations, IEditableDetailValues } from "./interface";

const EditableDetailContainer: FunctionComponent = () => {
  const { id: uuid } = useParams();
  const history = useHistory();
  const updateApplicant = useUpdateApplicant();

  const {
    data: { getApplicant: applicant } = { getApplicant: {} as IApplicant },
    error: applicantError,
    loading: loadingApplicant
  } = useQuery(GET_APPLICANT, { variables: { uuid } });

  const translations = useTranslations<IApplicantDetailEditableTranslations>("editableDetail");

  const validateForm = useCallback(
    ({ careers, links }: IEditableDetailValues) => {
      const formErrors = [];
      const selectedCodes = careers.map(career => career.code);
      if (hasUniqueValues(selectedCodes)) {
        formErrors.push("No se pueden repetir carreras");
      }
      if (selectedCodes.length === 0) {
        formErrors.push("Debes elegir como mínimo una carrera");
      }
      const linksNames: string[] = [];
      const linksUrls: string[] = [];
      links.forEach(({ name, url }) => {
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

  if (applicantError || translations.error) return <Redirect to={RoutesBuilder.notFound}/>;
  if (loadingApplicant || translations.loading) return <LoadingSpinner/>;

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
      history.push(RoutesBuilder.applicant.detail(uuid!));
    } catch (error) {
      history.push(RoutesBuilder.notFound);
    }
  };

  return (
    <EditableDetail
      onSubmit={onSubmit}
      translations={translations.data}
      initialValues={{
        uuid: applicant.uuid,
        name: applicant.user.name,
        surname: applicant.user.surname,
        description: applicant.description || "",
        links: applicant.links,
        careers: applicant.careers.map(({ code, creditsCount }) => (
          { code, creditsCount: creditsCount }
        )),
        capabilities: applicant.capabilities,
        sections: applicant.sections,
        _form: []
      }}
      validateForm={validateForm}
    />
  );
};

export { EditableDetailContainer };
