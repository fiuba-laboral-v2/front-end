import React, { FunctionComponent } from "react";

import { Secretary } from "$interfaces/Secretary";
import { TimeFormatter } from "$models/TimeFormatter";

import { IListContentItem } from "./interface";
import styles from "./styles.module.scss";

export const ListContentItem: FunctionComponent<IListContentItem> = ({
  admin: {
    user: {
      name,
      surname,
      email
    },
    secretary,
    createdAt
  },
  translations
}) => (
  <>
    <p className={styles.text}>
      {name}
    </p>
    <p className={styles.text}>
      {surname}
    </p>
    <p className={styles.text}>
      {email}
    </p>
    <p className={styles.text}>
      {secretary === Secretary.graduados ? translations.graduados : translations.extension }
    </p>
    <div className={styles.text}>
      {TimeFormatter.dateTime(createdAt)}
    </div>
  </>
);
