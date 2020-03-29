import React, { FunctionComponent } from "react";
import { Subtitle } from "$components/Subtitle";
import styles from "./styles.module.scss";
import { IDetailContactMeProps } from "./interface";

const DetailContactMe: FunctionComponent<IDetailContactMeProps> = (
  {
    email,
    website
  }
) => (
  <div className={styles.contactInfo}>
    <Subtitle><a href={`mailto: ${email}`}>{email}</a></Subtitle>
    <span className={styles.contactInfoDivider}> — </span>
    <Subtitle>
      <a target="_blank" rel="noopener noreferrer" href={website}>{website}</a>
    </Subtitle>
  </div>
);

export { DetailContactMe };
