import React, { FunctionComponent, useState } from "react";
import { Redirect, useParams } from "react-router-dom";
import { ApplicantDetailEditable } from "./component";
import { IApplicant, IApplicantEditable } from "$interfaces/Applicant";
import { updateApplicant } from "$mutations";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { getApplicantByPadron, getTranslations } from "$queries";
import NotFound from "$pages/NotFound";


const ApplicantDetailEditableContainer: FunctionComponent = () => {
  const { id } = useParams();

  const [redirect, setRedirect] = useState(false);
  const [state, setState] = useState<IApplicant>({} as any);

  const { data: translationsData } = useQuery(getTranslations, {
      variables: {
        paths: [
          "applicant.padron",
          "applicant.name",
          "applicant.lastName",
          "applicant.description"
        ]
      }
    }
  );

  const [
    padronTranslation,
    nameTranslation,
    lastNameTranslation,
    descriptionTranslation
  ] = translationsData ? translationsData.getTranslations : ["", "", "", "", ""];

  const [
    updateApplicantTodo,
    { data: updateData, error: updateError }
    ] = useMutation(updateApplicant);
  const { data: applicantData, error: applicantError } = useQuery(getApplicantByPadron, {
      variables: { padron: parseInt(id!, 10) }
    }
  );

  const applicant = applicantData ? applicantData.getApplicantByPadron : undefined;

  const submit = (applicantProps: IApplicant) => {
    const dataToUpdate: IApplicantEditable = {
      padron: parseInt(id!, 10),
      name: applicantProps.name,
      surname: applicantProps.surname,
      description: applicantProps.description,
      capabilities: applicantProps.capabilities?.map(c => c.description),
      careers: applicantProps.careers?.map(c =>
        ({ code: c.code, creditsCount: c.creditsCount || 0 })
      )
    };
    return updateApplicantTodo({ variables: dataToUpdate });
  };

  const onChange = (applicantProps: IApplicant) => {
    setState(applicantProps);
  };

  const cancel = () => {
    return setRedirect(true);
  };

  const mergeCapabilities = () => {
    const clone1 = Object.assign([], applicant.capabilities);
    const clone2 = Object.assign([], state.capabilities);
    return [...clone1, ...clone2];
  };

  const mergeCareers = () => {
    const clone1 = Object.assign([], applicant.careers);
    const clone2 = Object.assign([], state.careers);
    return [...clone1, ...clone2];
  };

  const mergeData = () => {
    const clone: IApplicant = Object.assign({}, applicant);
    clone.careers = mergeCareers();
    clone.capabilities = mergeCapabilities();
    return clone;
  };

  if (redirect || updateData) return (<Redirect to={`/applicants/${id}/`}/>);
  if (updateError) alert(updateError.message);
  if (applicantError) return (<NotFound/>);
  if (applicant === undefined) return (<div></div>);

  return (
    <ApplicantDetailEditable
      setState={onChange}
      onSubmit={submit}
      onCancel={cancel}
      applicant={mergeData()}
      state={state}
      translations={
        {
          padron: padronTranslation,
          name: nameTranslation,
          lastName: lastNameTranslation,
          description: descriptionTranslation
        }
      }
    />
  );
};

export { ApplicantDetailEditableContainer };
