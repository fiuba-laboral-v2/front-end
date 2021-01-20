import React, { FunctionComponent } from "react";

import { useStatistics, useTranslations } from "$hooks";

import { ITranslations } from "./interface";
import { Statistics } from "./component";
import { Window } from "$components/Window";
import { StatisticType } from "./StatisticCard/interface";

export const StatisticsContainer: FunctionComponent = () => {
  const statisticsValues = useStatistics();
  const translations = useTranslations<ITranslations>("statistics");
  const statistics = [
    StatisticType.approvedCompaniesCount,
    StatisticType.approvedJobApplicationsCount,
    StatisticType.approvedOffersCount,
    StatisticType.approvedStudentsCount,
    StatisticType.approvedGraduatesCount
  ];

  return (
    <Window loading={!statisticsValues || !translations} width="fullWidth">
      {translations && (
        <Statistics
          statisticsValues={statisticsValues!}
          statistics={statistics}
          translations={translations}
        />
      )}
    </Window>
  );
};
