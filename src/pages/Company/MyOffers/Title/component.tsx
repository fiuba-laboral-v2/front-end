import React, { FunctionComponent } from "react";
import { Checkbox } from "$components/Checkbox";
import { Title as TitleComponent } from "$components/Title";
import { IComponentProps } from "./interfaces";
import styles from "./styles.module.scss";

export const Title: FunctionComponent<IComponentProps> = ({ translations, filter, onClick }) => (
  <div className={styles.titleContainer}>
    <TitleComponent className={styles.title}>{translations?.title}</TitleComponent>
    <div className={styles.checkboxContainer} onClick={onClick}>
      <Checkbox
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
