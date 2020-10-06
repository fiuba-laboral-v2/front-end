import React, { FunctionComponent } from "react";
import moment from "moment";

import { Secretary } from "$interfaces/Secretary";
import { DATE_FORMAT } from "../../components/ListPageContainer/constants";

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
      {moment(createdAt).format(DATE_FORMAT)}
    </div>
  </>
);
