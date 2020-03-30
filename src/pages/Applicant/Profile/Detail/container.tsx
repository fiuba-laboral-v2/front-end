import React, { FunctionComponent } from "react";
import { getTranslations as GET_TRANSLATIONS, GET_APPLICANT } from "$queries";
import { Detail } from "./component";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import NotFound from "$pages/NotFound";
import { IApplicant } from "$interfaces/Applicant";

const DetailContainer: FunctionComponent = () => {
  const { id: uuid } = useParams();
  const {
    data: { getTranslations } = { getTranslations: [] },
    error: translationsError,
    loading: loadingTranslations
  } = useQuery(
    GET_TRANSLATIONS,
    { variables: { paths: [ "applicant.padron", "applicant.capabilities" ] } }
  );
  const {
    data: { getApplicant } = { getApplicant: {} as IApplicant },
    error: applicantError,
    loading: loadingApplicantData
  } = useQuery(GET_APPLICANT, { variables: { uuid } });

  if (applicantError || translationsError) return (<NotFound />);

  const applicant: IApplicant = getApplicant;
  applicant.links = applicant.links || [];
  const [ padronTranslation, capabilitiesTranslation ] = getTranslations;

  return (
    <Detail
      loading={loadingApplicantData || loadingTranslations}
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
