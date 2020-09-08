import React, { FunctionComponent } from "react";
import { Headline } from "$components/Headline";
import styles from "./styles.module.scss";

export const Filters: FunctionComponent = () => (
  <div className={styles.filtersContainer}>
    <div className={styles.filters}>
      <Headline/>
    </div>
  </div>
);
