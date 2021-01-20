import React, { FunctionComponent } from "react";
import { Title } from "$components/Title";
import { StatisticCard } from "./StatisticCard";

import { IStatisticsProps } from "./interface";
import styles from "./styles.module.scss";

export const Statistics: FunctionComponent<IStatisticsProps> = ({
  translations,
  statistics,
  statisticsValues
}) => {
  return (
    <div className={styles.mainContainer}>
      <Title className={styles.title}>{translations.title}</Title>
      <div className={styles.statisticsContainer}>
        {statistics.map(statistic => (
          <StatisticCard
            title={translations[statistic]}
            value={statisticsValues[statistic]}
            type={statistic}
          />
        ))}
      </div>
    </div>
  );
};
