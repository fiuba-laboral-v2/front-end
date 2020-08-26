import React, { FunctionComponent } from "react";

import { MainTitle } from "../../../MainTitle";
import { useTranslations } from "$hooks/queries";

export const MainTitleContainer: FunctionComponent = () => {
  const translations = useTranslations<IAdminOfferMainTitle>("adminOfferMainTitle");
  const title = translations ? translations.title : "";
  return <MainTitle title={title}/>;
};

interface IAdminOfferMainTitle {
  title: string;
}
