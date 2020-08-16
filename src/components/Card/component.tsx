import React, { FunctionComponent, Ref, useState } from "react";
import classNames from "classnames";

import styles from "./styles.module.scss";

export const Card: FunctionComponent<IClickableCardProps> = (
  {
    children,
    className,
    largePadding,
    selected,
    onClick,
    _ref
  }
) => {
  const [touched, setTouched] = useState(false);
  return (
    <div
      ref={_ref}
      className={classNames(styles.card, className, {
        [styles.largePadding]: largePadding,
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
  largePadding?: boolean;
  _ref?: Ref<HTMLDivElement>;
}
