import React, { Fragment, FunctionComponent } from "react";
import { useTranslations } from "$models/hooks";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { TimeHumanizer } from "$components/TimeHumanizer";
import { Redirect } from "$components/Redirect";

export const CreatedSinceContainer: FunctionComponent<ICreatedSinceContainerProps> = (
  {
    className,
    date
  }
) => {
  const translations = useTranslations<ICreatedSinceContainerTranslations>("createdSince");
  if (translations.loading) return <Fragment/>;
  if (translations.error) return <Redirect to={RoutesBuilder.public.internalServerError()} />;

  return (
    <TimeHumanizer className={className} since={date} labelPrefix={translations.data.create}/>
  );
};

interface ICreatedSinceContainerTranslations {
  create: string;
}

interface ICreatedSinceContainerProps {
  className?: string;
  date: string;
}
