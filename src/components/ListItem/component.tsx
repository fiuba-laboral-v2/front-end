import React, { FunctionComponent } from "react";
import classnames from "classnames";

import styles from "./styles.module.scss";

const ListItem: FunctionComponent<IListItemProps> = ({
  children,
  className
  }) => (
  <div className={classnames(styles.listItem, className)}>
    {children}
  </div>
);

interface IListItemProps {
  className?: string;
}

export { ListItem };
