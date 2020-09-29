import React, { FunctionComponent } from "react";
import moment from "moment";

import { IListContentItem } from "./interface";

import styles from "./styles.module.scss";
import { Secretary } from "$interfaces/Secretary";

const DATE_FORMAT = "YYYY-MM-DD HH:mm";

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
      {moment(createdAt).format(DATE_FORMAT)}
    </div>
  </>
);
