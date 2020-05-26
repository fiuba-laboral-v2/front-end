import React, { FunctionComponent } from "react";

import { Window } from "$components/Window";
import { List } from "$components/List";
import { ClickableCard } from "$components/ClickableCard";
import { Offer } from "../../Applicant/Home/Feed/Offer";
import { Headline } from "$components/Headline";

import { IOffer } from "$interfaces/Offer";
import styles from "./styles.module.scss";

export const MyOffers: FunctionComponent<IMyOffers> = (
  {
    translations,
    offers,
    onCardClick
  }
) => (
  <Window>
    <Headline className={styles.headline}>{translations.title}</Headline>
    <List list={offers}>
      {offer => (
        <ClickableCard
          key={offer.uuid}
          className={styles.cardContainer}
          onClick={() => onCardClick(offer.uuid)}
        >
          <Offer data={offer}/>
        </ClickableCard>
      )}
    </List>
  </Window>
);

interface IMyOffers {
  translations: {
    title: string;
  };
  offers: IOffer[];
  onCardClick: (uuid: string) => void;
}
