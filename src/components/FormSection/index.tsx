import React, { FunctionComponent } from "react";
import classNames from "classnames";

import { Card } from "$components/Card";
import styles from "./styles.module.scss";

export const FormSection: FunctionComponent<IFormSectionProps> = (
  {
    className,
    title,
    subtitle,
    largePaddingBottom,
    mediumPaddingBottom,
    children
  }
) => (
  <Card
    largePadding
    className={classNames(className, {
      [styles.largePaddingBottom]: largePaddingBottom,
      [styles.mediumPaddingBottom]: mediumPaddingBottom
    })}
  >
    <div className={styles.header}>
      <span
        className={classNames(styles.title, {
          [styles.withMarginBottom]: subtitle
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
  largePaddingBottom?: boolean;
  mediumPaddingBottom?: boolean;
  className?: string;
  title: string;
  subtitle?: string;
}
