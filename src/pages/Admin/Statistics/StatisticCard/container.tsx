import React, { FunctionComponent } from "react";

import { CompanyIcon } from "$components/Icons/CompanyIcon";
import { ApplicantIcon } from "$components/Icons/ApplicantIcon";
import { OfferIcon } from "$components/Icons/OfferIcon";
import { JobApplicationIcon } from "$components/Icons/JobApplicationIcon";

import { IStatisticCardContainerProps, StatisticType } from "./interface";
import { StatisticCard } from "./component";

export const StatisticCardContainer: FunctionComponent<IStatisticCardContainerProps> = ({
  title,
  value,
  type
}) => {
  const icon = {
    [StatisticType.approvedStudentsCount]: (className: string) => (
      <ApplicantIcon className={className} fontSize="large" />
    ),
    [StatisticType.approvedGraduatesCount]: (className: string) => (
      <ApplicantIcon className={className} fontSize="large" />
    ),
    [StatisticType.approvedCompaniesCount]: (className: string) => (
      <CompanyIcon className={className} fontSize="large" />
    ),
    [StatisticType.approvedOffersCount]: (className: string) => (
      <OfferIcon className={className} fontSize="large" />
    ),
    [StatisticType.approvedJobApplicationsCount]: (className: string) => (
      <JobApplicationIcon className={className} fontSize="large" />
    )
  }[type];

  return <StatisticCard title={title} value={value} type={type} icon={icon} />;
};
