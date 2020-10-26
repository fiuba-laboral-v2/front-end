import React, { FunctionComponent, useRef, useState } from "react";
import classNames from "classnames";

import styles from "./styles.module.scss";

export const Card: FunctionComponent<IClickableCardProps> = ({
  children,
  className,
  largePadding,
  selected,
  onClick
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [touched, setTouched] = useState(false);
  const [moveCount, setMoveCount] = useState(0);

  return (
    <div
      ref={ref}
      className={classNames(styles.card, className, {
        [styles.largePadding]: largePadding,
        [styles.hoverable]: onClick,
        [styles.touched]: touched,
        [styles.selected]: selected
      })}
      onClick={onClick}
      onTouchStart={() => setTouched(true)}
      onTouchMove={() => {
        if (moveCount === 15) {
          setTouched(false);
          setMoveCount(0);
        }
        setMoveCount(moveCount + 1);
      }}
      onTouchEnd={() => {
        if (!touched) return;
        ref.current?.click();
      }}
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
}
