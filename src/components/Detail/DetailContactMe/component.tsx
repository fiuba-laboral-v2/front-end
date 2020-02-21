import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";
import { IDetailContactMeProps } from "./interface";

const DetailContactMe: FunctionComponent<IDetailContactMeProps> = (
  {
    email,
    website
  }
) => (
  <div className={styles.contactInfo}>
    <a href={`mailto: ${email}`}>{email}</a>
    <span className={styles.contactInfoDivider}> — </span>
    <a target="_blank" rel="noopener noreferrer" href={website}>{website}</a>
  </div>
);

export { DetailContactMe };
