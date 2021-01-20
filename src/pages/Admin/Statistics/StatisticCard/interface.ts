import { ReactNode } from "react";

export enum StatisticType {
  approvedStudentsCount = "approvedStudentsCount",
  approvedGraduatesCount = "approvedGraduatesCount",
  approvedCompaniesCount = "approvedCompaniesCount",
  approvedJobApplicationsCount = "approvedJobApplicationsCount",
  approvedOffersCount = "approvedOffersCount"
}

export interface IStatisticCardContainerProps {
  title: string;
  value: number;
  type: StatisticType;
}

export interface IStatisticCardProps extends IStatisticCardContainerProps {
  icon: (className: string) => ReactNode;
}
