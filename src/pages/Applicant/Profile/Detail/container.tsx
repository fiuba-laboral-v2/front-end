import React, { FunctionComponent } from "react";
import { GET_APPLICANT, GET_TRANSLATIONS } from "$queries";
import { Detail } from "./component";
import { useHistory, useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { IApplicant } from "$interfaces/Applicant";
import { sortBy } from "lodash";
import styles from "./styles.module.scss";
import { LoadingSpinner } from "$components/LoadingSpinner";

const DetailContainer: FunctionComponent = () => {
  const { id: uuid } = useParams();
  const history = useHistory();
  const {
    data: { getTranslations } = { getTranslations: [] },
    error: translationsError,
    loading: loadingTranslations
  } = useQuery(
    GET_TRANSLATIONS,
    { variables: { paths: ["applicant.padron", "applicant.capabilities"] } }
  );
  const {
    data: { getApplicant } = { getApplicant: {} as IApplicant },
    error: applicantError,
    loading: loadingApplicantData
  } = useQuery(GET_APPLICANT, {
    variables: { uuid },
    fetchPolicy: "no-cache"
  });

  if (applicantError || translationsError) history.push(RoutesBuilder.notFound);

  const applicant: IApplicant = getApplicant;
  applicant.links = applicant.links || [];
  applicant.sections = sortBy(applicant.sections, ["displayOrder"]);
  const [padronTranslation, capabilitiesTranslation] = getTranslations;

  if (loadingApplicantData || loadingTranslations) {
    return (
      <div className={styles.container}>
        <LoadingSpinner/>
      </div>
    );
  }

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
