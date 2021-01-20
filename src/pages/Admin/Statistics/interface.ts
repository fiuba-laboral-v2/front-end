import { IStatisticsValues } from "$models/hooks/queries/useStatistics";
import { StatisticType } from "./StatisticCard/interface";

export interface IStatisticsProps {
  statisticsValues: IStatisticsValues;
  translations: ITranslations;
  statistics: StatisticType[];
}
export interface ITranslations {
  title: string;
  [approvedStudentsCount: string]: string;
  approvedGraduatesCount: string;
  approvedCompaniesCount: string;
  approvedJobApplicationsCount: string;
  approvedOffersCount: string;
}
