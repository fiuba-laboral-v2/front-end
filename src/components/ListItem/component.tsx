import React, { FunctionComponent, useState } from "react";
import classnames from "classnames";

import styles from "./styles.module.scss";

const ListItem: FunctionComponent<IListItemProps> = (
  {
    children,
    className,
    onClick
  }
) => {
  const [touched, setTouched] = useState(false);
  return (
    <div
      className={classnames(styles.listItem, className, {
        [styles.hoverable]: onClick,
        [styles.touched]: touched
      })}
      onClick={onClick}
      onTouchStart={() => setTouched(true)}
      onTouchMove={() => setTouched(false)}
      onTouchEnd={() => setTouched(false)}
    >
      {children}
    </div>
  );
};

interface IListItemProps {
  className?: string;
  onClick?: () => void;
}

export { ListItem };
