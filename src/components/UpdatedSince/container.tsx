import React, { Fragment, FunctionComponent } from "react";
import { useTranslations } from "$models/hooks";
import { TimeHumanizer } from "$components/TimeHumanizer";
import { Redirect } from "../Redirect";
import { RoutesBuilder } from "../../models/RoutesBuilder";

export const UpdatedSinceContainer: FunctionComponent<IUpdatedSinceContainerProps> = (
  {
    className,
    date
  }
) => {
  const translations = useTranslations<IUpdatedSinceContainerTranslations>("updatedSince");
  if (translations.loading) return <Fragment/>;
  if (translations.error) return <Redirect to={RoutesBuilder.public.internalServerError()} />;
  return (
    <TimeHumanizer className={className} since={date} labelPrefix={translations.data.update}/>
  );
};

interface IUpdatedSinceContainerTranslations {
  update: string;
}

interface IUpdatedSinceContainerProps {
  className?: string;
  date: string;
}
