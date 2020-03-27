import React, { FunctionComponent } from "react";
import { getTranslations } from "$queries";
import { GET_APPLICANT } from "$queries";
import { Detail } from "./component";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import NotFound from "$pages/NotFound";
import { IApplicant } from "$interfaces/Applicant";

const DetailContainer: FunctionComponent = () => {
  const { id: uuid } = useParams();
  const {
    data: translationsData,
    error: translationsError,
    loading: loadingTranslations
  } = useQuery(
    getTranslations,
    { variables: { paths: [ "applicant.padron", "applicant.capabilities" ] } }
  );
  const {
    data: applicantData,
    error: applicantError,
    loading: loadingApplicantData
  } = useQuery(GET_APPLICANT, { variables: { uuid } });

  if (applicantError || translationsError) return (<NotFound />);
  if (loadingApplicantData || loadingTranslations) return (<div/>);

  const applicant: IApplicant = applicantData.getApplicant;
  const [ padronTranslation, capabilitiesTranslation ] = translationsData.getTranslations;

  return (
    <Detail
      applicant={applicant}
      translations={
        {
          padron: padronTranslation,
          capabilities: capabilitiesTranslation
        }
      }
    />
  );
};

export { DetailContainer };
