import React, { FunctionComponent } from "react";
import { getTranslations as GET_TRANSLATIONS, GET_APPLICANT } from "$queries";
import { Detail } from "./component";
import { useParams, useHistory } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { RoutesBuilder } from "$src/routesBuilder";
import { IApplicant } from "$interfaces/Applicant";
import { sortBy } from "lodash";

const DetailContainer: FunctionComponent = () => {
  const { id: uuid } = useParams();
  const history = useHistory();
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

  if (applicantError || translationsError) history.push(RoutesBuilder.notFound);

  const applicant: IApplicant = getApplicant;
  applicant.links = applicant.links || [];
  applicant.sections = applicant.sections || [];
  applicant.sections = sortBy(applicant.sections, ["displayOrder"]);
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
