import React, { FunctionComponent } from "react";
import { useHistory } from "react-router-dom";
import { useTranslations } from "$hooks";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { ITranslations, IContainerProps } from "./interfaces";
import { Title } from "./component";

export const TitleContainer: FunctionComponent<IContainerProps> = ({
  className,
  filter,
  refetchOffers
}) => {
  const history = useHistory();
  const translations = useTranslations<ITranslations>("MyOffers");

  const onClick = async () => {
    filter.setValues({ hideRejectedAndExpiredOffers: !filter.getHideRejectedAndExpiredOffers() });
    const searchParams = filter.toString();
    if (refetchOffers) await refetchOffers(filter.getValues());
    history.push(RoutesBuilder.company.myOffers({ searchParams }));
  };

  return (
    <Title className={className} translations={translations} filter={filter} onClick={onClick} />
  );
};
