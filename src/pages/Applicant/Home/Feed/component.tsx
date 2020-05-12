import React, { FunctionComponent } from "react";
import { List } from "$components/List";
import { ClickableCard } from "$components/ClickableCard";
import { Offer } from "./Offer";
import { IOffer } from "$interfaces/Offer";

import styles from "./styles.module.scss";

const Feed: FunctionComponent<IFeedProps> = ({ offers, onCardClick }) => (
  <div>
    <List list={offers}>
      {offer => (
        <ClickableCard
          key={offer.uuid}
          className={styles.cardContainer}
          onClick={() => onCardClick(offer.uuid)}
        >
          <Offer data={offer}/>
        </ClickableCard>
      )
      }
    </List>
  </div>
);

interface IFeedProps {
  offers: IOffer[];
  onCardClick: (uuid: string) => void;
}

export { Feed };
