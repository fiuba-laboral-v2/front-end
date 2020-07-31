import React, { Fragment, FunctionComponent } from "react";
import { useTranslations } from "$models/hooks";
import { TimeHumanizer } from "$components/TimeHumanizer";

export const CreatedSinceContainer: FunctionComponent<ICreatedSinceContainerProps> = (
  {
    className,
    date
  }
) => {
  const translations = useTranslations<ICreatedSinceContainerTranslations>("createdSince");
  if (!translations) return <Fragment/>;

  return (
    <TimeHumanizer className={className} since={date} labelPrefix={translations.create}/>
  );
};

interface ICreatedSinceContainerTranslations {
  create: string;
}

interface ICreatedSinceContainerProps {
  className?: string;
  date: string;
}
