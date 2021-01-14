import React, { FunctionComponent } from "react";

import { Secretary } from "$interfaces/Secretary";
import { AdminStatus } from "$interfaces/Admin";
import { TimeFormatter } from "$models/TimeFormatter";

import { IListContentItem } from "./interfaces";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { Actions } from "./Actions";

export const ListContentItem: FunctionComponent<IListContentItem> = ({ admin, translations }) => (
  <>
    <p className={styles.text}>{`${admin.user.name} ${admin.user.surname}`}</p>
    <p className={styles.text}>{admin.user.dni}</p>
    <p className={styles.text}>{admin.user.email}</p>
    <p className={styles.text}>
      {admin.secretary === Secretary.graduados ? translations?.graduados : translations?.extension}
    </p>
    <div className={styles.text}>{TimeFormatter.dateTime(admin.createdAt)}</div>
    <p className={styles.text}>
      {admin.status === AdminStatus.active ? translations?.active : translations?.deactivated}
    </p>
    <div className={classNames(styles.text, styles.actionsContainer)}>
      <Actions admin={admin} />
    </div>
  </>
);
