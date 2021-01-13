import React, { FunctionComponent } from "react";
import { useHistory } from "react-router-dom";
import { useTranslations } from "$hooks";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { ITranslations, IContainerProps } from "./interfaces";
import { Title } from "./component";

export const TitleContainer: FunctionComponent<IContainerProps> = ({ filter }) => {
  const history = useHistory();
  const translations = useTranslations<ITranslations>("MyOffers");

  const onClick = () => {
    filter.setValues({ hideRejectedAndExpiredOffers: !filter.getHideRejectedAndExpiredOffers() });
    const searchParams = filter.toString();
    history.push(RoutesBuilder.company.myOffers({ searchParams }));
  };

  return <Title translations={translations} filter={filter} onClick={onClick} />;
};