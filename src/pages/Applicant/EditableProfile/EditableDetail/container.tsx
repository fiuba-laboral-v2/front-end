import React, { FunctionComponent, useMemo, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { RoutesBuilder } from "$src/routesBuilder";
import { EditableDetail } from "./component";
import { IApplicant, IApplicantEditable } from "$interfaces/Applicant";
import {
  deleteApplicantCapabilities,
  deleteApplicantCareers,
  updateApplicant as updateApplicantMutation
} from "$mutations";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { GET_APPLICANT } from "$queries";

const EditableDetailContainer: FunctionComponent = () => {
  const { id: uuid } = useParams();
  const [applicant, setApplicant] = useState<IApplicant>({} as any);
  const [deletedCapabilities, setDeletedCapabilities] = useState(Array<string>());
  const [deletedCareers, setDeletedCareers] = useState(Array<string>());
  const history = useHistory();

  const [updateApplicant] = useMutation(updateApplicantMutation);

  const [deleteCapabilities] = useMutation(deleteApplicantCapabilities);

  const [deleteCareers] = useMutation(deleteApplicantCareers);

  const {
    data: { getApplicant } = { getApplicant: {} as IApplicant },
    error: applicantError,
    loading: loadingApplicant
  } = useQuery(GET_APPLICANT, { variables: { uuid } });

  useMemo(
    () => loadingApplicant ? null : setApplicant(getApplicant),
    [getApplicant, loadingApplicant]
  );

  const submit = async (
    {
      uuid: id,
      padron,
      name,
      surname,
      description,
      capabilities,
      careers,
      sections
    }: IApplicant
  ) => {
    const dataToUpdate: IApplicantEditable = {
      uuid: id,
      padron,
      name,
      surname,
      description,
      capabilities: capabilities?.map(c => c.description),
      careers: careers?.map(c =>
        ({ code: c.code, creditsCount: c.creditsCount || 0 })
      ),
      sections: sections
    };
    try {
      await deleteCapabilities({
        variables: { uuid: id, capabilities: deletedCapabilities }
      });
      await deleteCareers({
        variables: { uuid: id, careersCodes: deletedCareers }
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

  if (applicantError) history.push(RoutesBuilder.notFound);

  return (
    <EditableDetail
      loading={loadingApplicant}
      deleteCapability={deleteCapability}
      deleteCareer={deleteCareer}
      setApplicant={setApplicant}
      onSubmit={submit}
      applicant={applicant}
    />
  );
};

export { EditableDetailContainer };
