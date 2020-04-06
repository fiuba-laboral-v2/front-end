import React, { FunctionComponent } from "react";
import { useHistory, useParams } from "react-router-dom";
import { RoutesBuilder } from "$src/routesBuilder";
import { EditableDetail } from "./component";
import { IApplicant } from "$interfaces/Applicant";
import { useQuery } from "@apollo/react-hooks";
import { GET_APPLICANT, GET_TRANSLATIONS } from "$queries";
import { LoadingSpinner } from "$components/LoadingSpinner";
import { noop } from "lodash";

const EditableDetailContainer: FunctionComponent = () => {
  const { id: uuid } = useParams();
  const history = useHistory();

  const {
    data: { getApplicant: applicant } = { getApplicant: {} as IApplicant },
    error: applicantError,
    loading: loadingApplicant
  } = useQuery(GET_APPLICANT, { variables: { uuid } });

  const {
    data: { getTranslations } = { getTranslations: [] },
    error: translationsError,
    loading: loadingTranslations
  } = useQuery(GET_TRANSLATIONS, { variables: { paths: ["applicant.edit.title"] } });

  if (applicantError || translationsError) history.push(RoutesBuilder.notFound);

  if (loadingApplicant || loadingTranslations) return <LoadingSpinner/>;

  const [titleTranslation] = getTranslations;

  return (
    <EditableDetail
      onSubmit={noop}
      translations={{
        title: titleTranslation
      }}
      initialValues={{
        uuid: applicant.uuid,
        links: applicant.links,
        _form: ""
      }}
    />
  );
};

export { EditableDetailContainer };
