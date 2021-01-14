import React, { FunctionComponent } from "react";
import classNames from "classnames";
import { Checkbox } from "$components/Checkbox";
import { Title as TitleComponent } from "$components/Title";
import { IComponentProps } from "./interfaces";
import styles from "./styles.module.scss";

export const Title: FunctionComponent<IComponentProps> = ({
  className,
  translations,
  filter,
  onClick
}) => (
  <div className={classNames(className, styles.titleContainer)}>
    <TitleComponent className={styles.title}>{translations?.title}</TitleComponent>
    <div className={styles.checkboxContainer} onClick={onClick}>
      <Checkbox
        color="default"
        checked={filter.getHideRejectedAndExpiredOffers()}
        className={styles.checkbox}
        checkboxClassName={styles.checkboxIcon}
      />
      <span className={styles.checkboxDescription}>
        {translations?.hideRejectedAndExpiredOffers}
      </span>
    </div>
  </div>
);
