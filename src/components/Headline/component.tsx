import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";

export const Headline: FunctionComponent<IDetailHeadlineProps> = ({
  mobileLayout,
  className,
  color = "light",
  children
}) => (
  <h2
    className={classNames(styles.detailHeadline, className, styles[color], {
      [styles.mobile]: mobileLayout
    })}
  >
    {children}
  </h2>
);

interface IDetailHeadlineProps {
  mobileLayout?: boolean;
  className?: string;
  color?: "dark" | "light";
}
