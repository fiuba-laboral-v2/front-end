import React, { FunctionComponent } from "react";
import classnames from "classnames";

import styles from "./styles.module.scss";

const ListItem: FunctionComponent<IListItemProps> = (
  {
    children,
    className,
    onClick
  }
) => (
  <div
    className={classnames(styles.listItem, className, { [styles.hoverable]: onClick })}
    onClick={onClick}
  >
    {children}
  </div>
);

interface IListItemProps {
  className?: string;
  onClick?: () => void;
}

export { ListItem };
