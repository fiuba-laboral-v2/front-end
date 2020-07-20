import React, { FunctionComponent, useState } from "react";
import classNames from "classnames";

import styles from "./styles.module.scss";

export const ClickableCard: FunctionComponent<IClickableCardProps> = (
  {
    children,
    className,
    detail,
    selected,
    onClick
  }
) => {
  const [touched, setTouched] = useState(false);
  return (
    <div
      className={classNames(styles.clickableCard, className, {
        [styles.detail]: detail,
        [styles.hoverable]: onClick,
        [styles.touched]: touched,
        [styles.selected]: selected
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

interface IClickableCardProps {
  className?: string;
  onClick?: () => void;
  selected?: boolean;
  detail?: boolean;
}
