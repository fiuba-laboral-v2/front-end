import React, { FunctionComponent } from "react";
import { ListItem } from "$components/ListItem";
import { Offer } from "$components/Offer";

import styles from "./styles.module.scss";

const Feed: FunctionComponent = () => (
  <div>
    <ListItem className={styles.cardContainer}>
      <Offer />
    </ListItem>
  </div>
);

export { Feed };
