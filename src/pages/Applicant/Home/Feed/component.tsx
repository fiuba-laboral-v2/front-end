import React, { FunctionComponent } from "react";
import { List, IList } from "$components/List";
import { ListItem } from "$components/ListItem";
import { Offer } from "./Offer";
import { IOffer } from "$interfaces/Offer";

import styles from "./styles.module.scss";

const OfferList = List as IList<IOffer>;

const Feed: FunctionComponent<IFeedProps> = ({offers}) => (
  <div>
    <OfferList list={offers}>
      {offer => (
        <ListItem className={styles.cardContainer} key={offer.uuid}>
          <Offer data={offer} />
        </ListItem>
        )
      }
    </OfferList>
  </div>
);

interface IFeedProps {
  offers: IOffer[];
}

export { Feed };
