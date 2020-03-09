import React, { FunctionComponent, useState } from "react";
import { Redirect, useParams } from "react-router-dom";
import { ApplicantDetailEditable } from "./component";
import { IApplicant, IApplicantEditable } from "$interfaces/Applicant";
import { updateApplicant, deleteApplicantCapabilities, deleteApplicantCareers } from "$mutations";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { getApplicantByPadron, getTranslations } from "$queries";
import NotFound from "$pages/NotFound";


const ApplicantDetailEditableContainer: FunctionComponent = () => {
  const { id } = useParams();

  const [redirect, setRedirect] = useState(false);
  const [state, setState] = useState<IApplicant>({} as any);
  const [deletedCapabilities, setDeletedCapabilities] = useState(Array<string>());
  const [deletedCareers, setDeletedCareers] = useState(Array<string>());

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

  const [
    deleteCapabilitiesTodo,
    { data: deleteCapabilitiesData, error: deleteCapabilitiesError }
  ] = useMutation(deleteApplicantCapabilities);

  const [
    deleteCareersTodo,
    { data: deleteCareersData, error: deleteCareersError }
  ] = useMutation(deleteApplicantCareers);

  const { data: applicantData, error: applicantError } = useQuery(getApplicantByPadron, {
      variables: { padron: parseInt(id!, 10) }
    }
  );

  const applicant: IApplicant = applicantData ? applicantData.getApplicantByPadron : undefined;

  const submit = async (applicantProps: IApplicant) => {
    const padron = parseInt(id!, 10);
    const dataToUpdate: IApplicantEditable = {
      padron: padron,
      name: applicantProps.name,
      surname: applicantProps.surname,
      description: applicantProps.description,
      capabilities: applicantProps.capabilities?.map(c => c.description),
      careers: applicantProps.careers?.map(c =>
        ({ code: c.code, creditsCount: c.creditsCount || 0 })
      )
    };
    await deleteCapabilitiesTodo({
      variables: { padron: padron, capabilities: deletedCapabilities }
    });
    await deleteCareersTodo({
      variables: { padron: padron, careersCodes: deletedCareers }
    });
    return updateApplicantTodo({ variables: dataToUpdate });
  };

  const onChange = (applicantProps: IApplicant) => {
    setState(applicantProps);
  };

  const cancel = () => {
    return setRedirect(true);
  };

  const deleteNewCapability = (description: string) => {
    state.capabilities = state.capabilities?.filter(c =>  c.description !== description);
    setState(Object.assign({}, state));
  };

  const deleteExistingCapability = (description: string) => {
    applicant.capabilities = applicant.capabilities?.filter(c =>  c.description !== description);
  };

  const deleteCapability = (description: string) => {
    const newDeletedCapabilities = Object.assign([], deletedCapabilities);
    newDeletedCapabilities.push(description);
    setDeletedCapabilities(Object.assign([], [...new Set(newDeletedCapabilities)]));
    deleteNewCapability(description);
    deleteExistingCapability(description);
  };

  const deleteNewCareer = (code: string) => {
    state.careers = state.careers?.filter(c =>  c.code !== code);
    setState(Object.assign({}, state));
  };

  const deleteExistingCareer = (code: string) => {
    applicant.careers = applicant.careers?.filter(c =>  c.code !== code);
  };

  const deleteCareer = (code: string) => {
    const newDeletedCareers = Object.assign([], deletedCareers);
    newDeletedCareers.push(code);
    setDeletedCareers(Object.assign([], [...new Set(newDeletedCareers)]));
    deleteNewCareer(code);
    deleteExistingCareer(code);
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

  if (redirect || updateData || deleteCapabilitiesData || deleteCareersData) {
    return (<Redirect to={`/applicants/${id}/`}/>);
  }
  if (updateError) alert(updateError.message);
  if (deleteCapabilitiesError) alert(deleteCapabilitiesError.message);
  if (deleteCareersError) alert(deleteCareersError.message);
  if (applicantError) return (<NotFound/>);
  if (applicant === undefined) return (<div></div>);

  return (
    <ApplicantDetailEditable
      deleteCapability={deleteCapability}
      deleteCareer={deleteCareer}
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
