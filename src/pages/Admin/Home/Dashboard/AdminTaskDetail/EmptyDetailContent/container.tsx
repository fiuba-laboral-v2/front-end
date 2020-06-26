import React, { Fragment, FunctionComponent } from "react";
import { EmptyDetailContent } from "./component";
import { Redirect } from "$components/Redirect";
import { useTranslations } from "$models/hooks/queries";
import { RoutesBuilder } from "$models/RoutesBuilder";

import { IEmptyDetailContentTranslations } from "./interfaces";

export const EmptyDetailContentContainer: FunctionComponent = () => {
  const translations = useTranslations<IEmptyDetailContentTranslations>("adminTaskDetail");
  if (translations.loading) return <Fragment/>;
  if (translations.error) return <Redirect to={RoutesBuilder.public.internalServerError()}/>;

  return <EmptyDetailContent translations={translations.data} />;
};
