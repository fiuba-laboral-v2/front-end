import React, { FunctionComponent, useEffect, useState } from "react";
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
  const [hideRejectedAndExpiredOffers, setHideRejectedAndExpiredOffers] = useState(false);
  useEffect(() => {
    setHideRejectedAndExpiredOffers(filter.getHideRejectedAndExpiredOffers());
    // eslint-disable-next-line
  }, []);

  const onClick = async () => {
    const newValue = !filter.getHideRejectedAndExpiredOffers();
    setHideRejectedAndExpiredOffers(newValue);
    filter.setValues({ hideRejectedAndExpiredOffers: newValue });
    const searchParams = filter.toString();
    if (refetchOffers) await refetchOffers(filter.getValues());
    history.push(RoutesBuilder.company.myOffers({ searchParams }));
  };

  return (
    <Title
      className={className}
      translations={translations}
      disabled={hideRejectedAndExpiredOffers !== filter.getHideRejectedAndExpiredOffers()}
      checked={hideRejectedAndExpiredOffers}
      onChange={onClick}
    />
  );
};
