import React, { Fragment, FunctionComponent } from "react";
import { useTranslations } from "$models/hooks";
import { TimeHumanizer } from "$components/TimeHumanizer";

export const UpdatedSinceContainer: FunctionComponent<IUpdatedSinceContainerProps> = (
  {
    className,
    date
  }
) => {
  const translations = useTranslations<IUpdatedSinceContainerTranslations>("updatedSince");
  if (!translations) return <Fragment/>;
  return <TimeHumanizer className={className} since={date} labelPrefix={translations.update}/>;
};

interface IUpdatedSinceContainerTranslations {
  update: string;
}

interface IUpdatedSinceContainerProps {
  className?: string;
  date: string;
}
