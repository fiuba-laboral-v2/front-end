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
  const [state, setState] = useState<IApplicantEditable>({
    padron: parseInt(id!, 10)
  });

  const { data: translationsData } = useQuery(getTranslations, {
      variables: {
        paths: [
          "applicant.padron",
          "applicant.capabilities",
          "applicant.careers",
          "applicant.credits"
        ]
      }
    }
  );

  const [
    padronTranslation,
    capabilitiesTranslation,
    careersTranslation,
    creditsTranslation
  ] = translationsData ? translationsData.getTranslations : ["", "", "", ""];

  const [
    updateApplicantTodo,
    { data: updateData, error: updateError }
    ] = useMutation(updateApplicant);
  const { data: applicantData, error: applicantError } = useQuery(getApplicantByPadron, {
      variables: { padron: parseInt(id!, 10) }
    }
  );

  const applicant = applicantData ? applicantData.getApplicantByPadron : undefined;

  const submit = (applicantProps: IApplicantEditable) => {
    return updateApplicantTodo({ variables: applicantProps });
  };

  const onChange = (applicantProps: IApplicantEditable) => {
    setState(applicantProps);
  };

  const cancel = () => {
    return setRedirect(true);
  };

  const mergeCapabilities = () => {
    const clone1 = Object.assign([], applicant.capabilities);
    const clone2 = Object.assign([], state.capabilities?.map(c => ({ description: c })));
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
  if (applicantError || updateError) return (<NotFound/>);
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
          capabilities: capabilitiesTranslation,
          careers: careersTranslation,
          credits: creditsTranslation
        }
      }
    />
  );
};

export { ApplicantDetailEditableContainer };
