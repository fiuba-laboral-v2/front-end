import React, { Fragment, FunctionComponent } from "react";
import { useTranslations } from "$models/hooks";
import { TimeHumanizer } from "$components/TimeHumanizer";

export const PublishedSinceContainer: FunctionComponent<IPublishedSinceContainerProps> = (
  {
    className,
    date
  }
) => {
  const translations = useTranslations<IPublishedSinceContainerTranslations>("publishedSince");
  if (!translations) return <Fragment/>;
  return <TimeHumanizer className={className} since={date} labelPrefix={translations.update}/>;
};

interface IPublishedSinceContainerTranslations {
  update: string;
}

interface IPublishedSinceContainerProps {
  className?: string;
  date: string;
}
