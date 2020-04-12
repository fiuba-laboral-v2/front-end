import React, { FunctionComponent } from "react";
import { ListItem } from "$components/ListItem";
import { Offer } from "$components/Offer";
import { IOffer } from "$interfaces/Offer";

import styles from "./styles.module.scss";

const Feed: FunctionComponent<IFeedProps> = () => (
  <div>
    <ListItem className={styles.cardContainer}>
      <Offer />
    </ListItem>
  </div>
);

interface IFeedProps {
  offers: IOffer[];
}

export { Feed };
