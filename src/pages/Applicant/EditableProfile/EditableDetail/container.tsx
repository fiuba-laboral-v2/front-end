import React, { FunctionComponent, useState, useMemo } from "react";
import { useParams, useHistory } from "react-router-dom";
import { RoutesBuilder } from "$src/routesBuilder";
import { EditableDetail } from "./component";
import { IApplicant, IApplicantEditable } from "$interfaces/Applicant";
import {
  updateApplicant as updateApplicantMutation,
  deleteApplicantCapabilities,
  deleteApplicantCareers
} from "$mutations";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { GET_APPLICANT, getTranslations } from "$queries";
import NotFound from "$pages/NotFound";

const EditableDetailContainer: FunctionComponent = () => {
  const { id: uuid } = useParams();
  // const padron = parseInt(id!, 10);
  const [applicant, setApplicant] = useState<IApplicant>({} as any);
  const [deletedCapabilities, setDeletedCapabilities] = useState(Array<string>());
  const [deletedCareers, setDeletedCareers] = useState(Array<string>());
  const history = useHistory();

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

  const [updateApplicant] = useMutation(updateApplicantMutation);

  const [deleteCapabilities] = useMutation(deleteApplicantCapabilities);

  const [deleteCareers] = useMutation(deleteApplicantCareers);

  const { data: applicantData, error: applicantError, loading } = useQuery(GET_APPLICANT, {
    variables: { uuid }
  }
  );

  useMemo(() => setApplicant(applicantData?.getApplicant), [applicantData]);

  const submit = async ({
    uuid: id,
    padron,
    name,
    surname,
    description,
    capabilities,
    careers
  }: IApplicant) => {
    const dataToUpdate: IApplicantEditable = {
      padron,
      name,
      surname,
      description,
      capabilities: capabilities?.map(c => c.description),
      careers: careers?.map(c =>
        ({ code: c.code, creditsCount: c.creditsCount || 0 })
      )
    };
    try {
      await deleteCapabilities({
        variables: { padron: padron, capabilities: deletedCapabilities }
      });
      await deleteCareers({
        variables: { padron: padron, careersCodes: deletedCareers }
      });
      await updateApplicant({ variables: dataToUpdate });
    } catch (e) {
      alert(e);
    }
    history.push(RoutesBuilder.applicant.detail(id));
  };

  const deleteCapability = (description: string) => {
    setDeletedCapabilities([...deletedCapabilities, description]);
    const capabilities = applicant.capabilities?.filter(c => c.description !== description);
    setApplicant({ ...applicant, capabilities: capabilities });
  };

  const deleteCareer = (code: string) => {
    setDeletedCareers([...deletedCareers, code]);
    applicant.careers = applicant.careers?.filter(c => c.code !== code);
    setApplicant({ ...applicant, careers: applicant.careers });
  };

  if (applicantError) return (<NotFound />);
  if (loading) return (<div></div>);

  return (
    <EditableDetail
      deleteCapability={deleteCapability}
      deleteCareer={deleteCareer}
      setApplicant={setApplicant}
      onSubmit={submit}
      onCancel={() => history.push(RoutesBuilder.applicant.detail(uuid as string))}
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

export { EditableDetailContainer };
