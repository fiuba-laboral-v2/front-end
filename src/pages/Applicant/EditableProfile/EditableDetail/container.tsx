import React, { FunctionComponent } from "react";
import { Redirect, useHistory, useParams } from "react-router-dom";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { EditableDetail } from "./component";
import { IApplicant } from "$interfaces/Applicant";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { useTranslations } from "$hooks";
import { GET_APPLICANT } from "$queries";
import { LoadingSpinner } from "$components/LoadingSpinner";
import { IApplicantDetailEditableTranslations, IEditableDetailValues } from "./interface";
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

  const translations = useTranslations<IApplicantDetailEditableTranslations>("editableDetail");

  if (applicantError || translations.error) return <Redirect to={RoutesBuilder.notFound}/>;
  if (loadingApplicant || translations.loading) return <LoadingSpinner/>;

  const onSubmit = async (values: IEditableDetailValues) => {
    const {
      errors: updateApplicantErrors
    } = await updateApplicant({
      variables: {
        ...values,
        capabilities: values.capabilities.map(capability => capability.description),
        careers: values.careers.map(({ code, creditsCount }) => ({ code, creditsCount }))
      }
    });
    if (updateApplicantErrors) history.push(RoutesBuilder.notFound);
    history.push(RoutesBuilder.applicant.detail(uuid!));
  };

  return (
    <EditableDetail
      onSubmit={onSubmit}
      translations={translations.data}
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
