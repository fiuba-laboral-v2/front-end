import React, { Fragment, FunctionComponent } from "react";
import { EmptyDetail } from "./component";
import { Redirect } from "$components/Redirect";
import { useTranslations } from "$models/hooks/queries";
import { RoutesBuilder } from "$models/RoutesBuilder";

import { IEmptyDetailTranslations } from "./interfaces";

export const EmptyDetailContainer: FunctionComponent = () => {
  const translations = useTranslations<IEmptyDetailTranslations>("emptyDetailContent");
  if (translations.loading) return <Fragment/>;
  if (translations.error) return <Redirect to={RoutesBuilder.public.internalServerError()}/>;

  return <EmptyDetail translations={translations.data} />;
};
