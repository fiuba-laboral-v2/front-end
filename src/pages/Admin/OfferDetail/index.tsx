import React, { FunctionComponent } from "react";
import { useParams } from "react-router-dom";

import { OfferDetailInfo, OfferDetailContent } from "../components/Offer";
import { Window } from "$components/Window";

import styles from "./styles.module.scss";

export const OfferDetail: FunctionComponent = () => {
  const { uuid } = useParams<{ uuid: string }>();
  const hideActions = true;
  return (
    <Window desktopOnly>
      <OfferDetailInfo hideActions={hideActions} selectedTaskUuid={uuid} />
      <OfferDetailContent className={styles.content} offerUuid={uuid} />
    </Window>
  );
};
