import React, { FunctionComponent } from "react";
import { useHistory, useParams } from "react-router-dom";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { EditableDetail } from "./component";
import { IApplicant } from "$interfaces/Applicant";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { GET_APPLICANT, GET_TRANSLATIONS } from "$queries";
import { LoadingSpinner } from "$components/LoadingSpinner";
import { IEditableDetailValues } from "./interface";
import { UPDATE_APPLICANT } from "$mutations";

const EditableDetailContainer: FunctionComponent = () => {
  const { id: uuid } = useParams();
  const history = useHistory();

  const [updateApplicant] = useMutation(UPDATE_APPLICANT);

  const {
    data: { getApplicant: applicant } = { getApplicant: {} as IApplicant },
    error: applicantError,
    loading: loadingApplicant
  } = useQuery(GET_APPLICANT, { variables: { uuid } });

  const {
    data: { getTranslations } = { getTranslations: [] },
    error: translationsError,
    loading: loadingTranslations
  } = useQuery(GET_TRANSLATIONS, {
    variables: {
      paths: [
        "applicant.edit.title",
        "applicant.edit.name",
        "applicant.edit.surname",
        "applicant.edit.links",
        "applicant.edit.link",
        "applicant.edit.linkTitle",
        "applicant.edit.careers",
        "applicant.edit.capabilities",
        "applicant.edit.capability",
        "applicant.edit.sections",
        "applicant.edit.sectionTitle",
        "applicant.edit.sectionContent",
        "applicant.edit.submit"
      ]
    }
  });

  if (applicantError || translationsError) {
    history.push(RoutesBuilder.notFound);
  }

  if (loadingApplicant || loadingTranslations) {
    return <LoadingSpinner/>;
  }

  const [
    titleTranslation,
    nameTranslation,
    surnameTranslation,
    linksTranslation,
    linkTranslation,
    linkTitleTranslation,
    careersTranslation,
    capabilitiesTranslation,
    capabilityTranslation,
    sectionsTranslation,
    sectionTitleTranslation,
    sectionContentTranslation,
    submitTranslation
  ] = getTranslations;

  const onSubmit = async (values: IEditableDetailValues) => {
    const {
      data: { updateApplicant: updatedApplicant },
      errors: updateApplicantErrors
    } = await updateApplicant({
      variables: {
        ...values,
        capabilities: values.capabilities.map(capability => capability.description),
        careers: values.careers.map(({ code, creditsCount }) => ({ code, creditsCount }))
      }
    });
    if (updateApplicantErrors) history.push(RoutesBuilder.notFound);
    history.push(RoutesBuilder.applicant.detail(updatedApplicant.uuid));
  };

  return (
    <EditableDetail
      onSubmit={onSubmit}
      translations={{
        title: titleTranslation,
        name: nameTranslation,
        surname: surnameTranslation,
        links: linksTranslation,
        link: linkTranslation,
        linkTitle: linkTitleTranslation,
        careers: careersTranslation,
        capabilities: capabilitiesTranslation,
        capability: capabilityTranslation,
        sections: sectionsTranslation,
        sectionTitle: sectionTitleTranslation,
        sectionContent: sectionContentTranslation,
        submit: submitTranslation
      }}
      initialValues={{
        uuid: applicant.uuid,
        name: applicant.name,
        surname: applicant.surname,
        links: applicant.links,
        careers: applicant.careers.map(({ code, creditsCount }) => (
          { code, creditsCount: creditsCount }
        )),
        capabilities: applicant.capabilities,
        sections: applicant.sections,
        _form: ""
      }}
    />
  );
};

export { EditableDetailContainer };
