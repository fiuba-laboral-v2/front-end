import React, { Fragment, FunctionComponent } from "react";
import { useTranslations } from "$models/hooks";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { TimeHumanizer } from "./component";
import { Redirect } from "$components/Redirect";
import { ITimeHumanizerContainerProps, ITimeHumanizerTranslations } from "./interfaces";

export const TimeHumanizerContainer: FunctionComponent<ITimeHumanizerContainerProps> = (
  {
    type,
    ...props
  }
) => {
  const translations = useTranslations<ITimeHumanizerTranslations>("timeHumanizer");
  if (translations.loading) return <Fragment/>;
  if (translations.error) return <Redirect to={RoutesBuilder.public.internalServerError()} />;

  const getLabelPrefix = () => {
    if (type === "create") return translations.data.create;
    return translations.data.update;
  };

  return (
    <TimeHumanizer {...props} labelPrefix={getLabelPrefix()}/>
  );
};
