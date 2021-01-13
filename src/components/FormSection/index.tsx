import React, { FunctionComponent, ReactNode } from "react";
import classNames from "classnames";

import { Card } from "$components/Card";
import styles from "./styles.module.scss";

export const FormSection: FunctionComponent<IFormSectionProps> = ({
  className,
  title,
  subtitle,
  children,
  hidden
}) => (
  <Card largePadding className={classNames(styles.card, className)} hidden={hidden}>
    <div
      className={classNames(styles.header, {
        [styles.headerWithMarginBottom]: title
      })}
    >
      <span
        className={classNames(styles.title, {
          [styles.titleWithMarginBottom]: subtitle
        })}
      >
        {title}
      </span>
      <span className={styles.subtitle}>{subtitle}</span>
    </div>
    {children}
  </Card>
);

interface IFormSectionProps {
  className?: string;
  title?: string;
  subtitle?: ReactNode;
  hidden?: boolean;
}
