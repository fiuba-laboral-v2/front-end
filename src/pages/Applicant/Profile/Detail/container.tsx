import React, { FunctionComponent } from "react";
import { GET_APPLICANT } from "$queries";
import { Detail } from "./component";
import { Redirect, useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { useTranslations } from "$hooks/useTranslations";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { IApplicant } from "$interfaces/Applicant";
import { sortBy } from "lodash";
import styles from "./styles.module.scss";
import { LoadingSpinner } from "$components/LoadingSpinner";
import { ITranslations } from "./interface";

const DetailContainer: FunctionComponent = () => {
  const { id: uuid } = useParams();
  const translations = useTranslations<ITranslations>("applicantProfileDetail");

  const {
    data: { getApplicant } = { getApplicant: {} as IApplicant },
    error: applicantError,
    loading: loadingApplicantData
  } = useQuery(GET_APPLICANT, {
    variables: { uuid },
    fetchPolicy: "no-cache"
  });

  if (applicantError || translations.error) return <Redirect to={RoutesBuilder.notFound}/>;

  const applicant: IApplicant = getApplicant;
  applicant.links = applicant.links || [];
  applicant.sections = sortBy(applicant.sections, ["displayOrder"]);

  if (loadingApplicantData || translations.loading) {
    return (
      <div className={styles.container}>
        <LoadingSpinner/>
      </div>
    );
  }

  return (
    <Detail
      applicant={applicant}
      translations={translations.data}
    />
  );
};

export { DetailContainer };
