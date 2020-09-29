import React, { FunctionComponent } from "react";
import moment from "moment";
import { IAdmin } from "$interfaces/Admin";

import styles from "./styles.module.scss";

const DATE_FORMAT = "YYYY-MM-DD HH:mm:ss";

export const ListContentItem: FunctionComponent<IListContentItemProps> = ({
  admin: {
    user: {
      name,
      surname,
      email
    },
    secretary,
    updatedAt
  }
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
      {secretary}
    </p>
    <div className={styles.text}>
      {moment(updatedAt).format(DATE_FORMAT)}
    </div>
  </>
);

interface IListContentItemProps {
  admin: IAdmin;
}
