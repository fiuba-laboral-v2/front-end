import React, { FunctionComponent } from "react";

import { MainTitle } from "../../../../../../components/MainTitle";
import { useTranslations } from "$hooks/queries";
import { IOffer } from "$interfaces/Offer";

export const MainTitleContainer: FunctionComponent<IMainTitleContainerProps> = ({ offer }) => {
  const translations = useTranslations<IAdminOfferMainTitle>("adminOfferMainTitle");
  const title = translations ? translations.title : "";
  return <MainTitle hidden={!offer} title={title} updatedAt={offer?.updatedAt} />;
};

interface IAdminOfferMainTitle {
  title: string;
}

interface IMainTitleContainerProps {
  offer?: IOffer;
}
