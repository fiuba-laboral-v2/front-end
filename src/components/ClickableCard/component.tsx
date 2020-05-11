import React, { FunctionComponent, useState } from "react";
import classNames from "classnames";

import styles from "./styles.module.scss";

export const ClickableCard: FunctionComponent<IClickableCardProps> = (
  {
    children,
    className,
    onClick
  }
) => {
  const [touched, setTouched] = useState(false);
  return (
    <div
      className={classNames(styles.clickableCard, className, {
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

interface IClickableCardProps {
  className?: string;
  onClick?: () => void;
}
