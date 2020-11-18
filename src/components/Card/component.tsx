import React, { FunctionComponent, useRef, useState } from "react";
import classNames from "classnames";

import styles from "./styles.module.scss";

export const Card: FunctionComponent<IClickableCardProps> = ({
  children,
  className,
  largePadding,
  selected,
  onClick,
  hidden
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [touched, setTouched] = useState(false);
  const [xPosition, setXPosition] = useState(0);
  const [yPosition, setYPosition] = useState(0);

  return (
    <div
      hidden={hidden}
      ref={ref}
      className={classNames(styles.card, className, {
        [styles.largePadding]: largePadding,
        [styles.hoverable]: onClick,
        [styles.touched]: touched,
        [styles.selected]: selected
      })}
      onClick={onClick}
      onTouchStart={event => {
        setTouched(true);
        setXPosition(event.touches[0].screenX);
        setYPosition(event.touches[0].screenY);
      }}
      onTouchMove={event => {
        const touch = event.touches[0];
        const newXPosition = touch.screenX;
        const newYPosition = touch.screenY;
        if (Math.max(Math.abs(newXPosition - xPosition), Math.abs(newYPosition - yPosition)) > 15) {
          return setTouched(false);
        }
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
  hidden?: boolean;
}
