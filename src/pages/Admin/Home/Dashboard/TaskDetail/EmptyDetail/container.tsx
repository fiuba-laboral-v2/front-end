import React, { Fragment, FunctionComponent } from "react";
import { EmptyDetail } from "./component";
import { useTranslations } from "$models/hooks/queries";

import { IEmptyDetailTranslations } from "./interfaces";

export const EmptyDetailContainer: FunctionComponent = () => {
  const translations = useTranslations<IEmptyDetailTranslations>("adminEmptyDetail");
  if (!translations) return <Fragment/>;

  return <EmptyDetail translations={translations} />;
};
