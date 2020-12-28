import React, { FunctionComponent } from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";
import { Link } from "$components/Link";

export const Card: FunctionComponent<IClickableCardProps> = ({
  children,
  className,
  onClick,
  link,
  largePadding,
  selected,
  hoverable,
  hidden
}) => {
  const props = {
    onClick,
    hidden,
    children,
    className: classNames(styles.card, className, {
      [styles.largePadding]: largePadding,
      [styles.selected]: selected,
      [styles.hoverable]: link || hoverable
    })
  };
  return link ? <Link to={link} {...props} /> : <div {...props} />;
};

export interface IClickableCardProps {
  className?: string;
  onClick?: () => void;
  link?: string;
  selected?: boolean;
  hoverable?: boolean;
  largePadding?: boolean;
  hidden?: boolean;
}
