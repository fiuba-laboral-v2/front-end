import React, { FunctionComponent } from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";

interface IItem {
  column: string;
  text: string;
  withoutActions?: boolean;
}

export const Item: FunctionComponent<IItem> = ({ column, text, withoutActions }) => (
  <p
    className={classNames(styles.item, styles[`${column}`], {
      [styles.withoutActions]: withoutActions
    })}
  >
    {text}
  </p>
);
