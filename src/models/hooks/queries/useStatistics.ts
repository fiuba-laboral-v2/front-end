import { useQuery } from "$hooks";
import { GET_STATISTICS } from "$queries";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { useHistory } from "react-router-dom";

export const useStatistics = () => {
  const history = useHistory();
  return useQuery<{}, { getStatistics: IStatisticsValues }>(GET_STATISTICS, {
    errorHandlers: {
      defaultHandler: () => history.push(RoutesBuilder.public.internalServerError())
    }
  }).data?.getStatistics;
};

export interface IStatisticsValues {
  [approvedStudentsCount: string]: number;
  approvedGraduatesCount: number;
  approvedCompaniesCount: number;
  approvedJobApplicationsCount: number;
  approvedOffersCount: number;
}
