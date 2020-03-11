import React, { FunctionComponent, useState, useMemo } from "react";
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
  const [applicant, setApplicant] = useState<IApplicant>({} as any);
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

  const { data: applicantData, error: applicantError, loading } = useQuery(getApplicantByPadron, {
      variables: { padron: parseInt(id!, 10) }
    }
  );

  useMemo(() => setApplicant(applicantData?.getApplicantByPadron), [applicantData]);

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

  const deleteCapability = (description: string) => {
    setDeletedCapabilities([ ...deletedCapabilities,  description]);
    applicant.capabilities = applicant.capabilities?.filter(c =>  c.description !== description);
    setApplicant({ ...applicant, capabilities: applicant.capabilities });
  };

  const deleteCareer = (code: string) => {
    setDeletedCareers([ ...deletedCareers, code ]);
    applicant.careers = applicant.careers?.filter(c =>  c.code !== code);
    setApplicant({ ...applicant, careers: applicant.careers });
  };

  if (redirect || updateData || deleteCapabilitiesData || deleteCareersData) {
    return (<Redirect to={`/applicants/${id}/`}/>);
  }
  if (updateError) alert(updateError.message);
  if (deleteCapabilitiesError) alert(deleteCapabilitiesError.message);
  if (deleteCareersError) alert(deleteCareersError.message);
  if (applicantError) return (<NotFound/>);
  if (loading) return (<div></div>);
  return (
    <ApplicantDetailEditable
      deleteCapability={deleteCapability}
      deleteCareer={deleteCareer}
      setState={setApplicant}
      onSubmit={submit}
      onCancel={() => setRedirect(true)}
      applicant={applicant}
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
