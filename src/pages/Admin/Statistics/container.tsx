import React, { FunctionComponent } from "react";

import { useTranslations } from "$hooks";

import { IStatisticsContainerProps, ITranslations } from "./interface";
import { Statistics } from "./component";

export const StatisticsContainer: FunctionComponent<IStatisticsContainerProps> = () => {
  const translations = useTranslations<ITranslations>("");
  return <>{translations && <Statistics translations={translations}></Statistics>}</>;
};
