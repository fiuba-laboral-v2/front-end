import React, { FunctionComponent } from "react";
import { Subtitle } from "$components/Subtitle";
import styles from "./styles.module.scss";
import { IDetailContactMeProps } from "./interfaces";

const DetailContactMe: FunctionComponent<IDetailContactMeProps> = ({ email, website }) => (
  <div className={styles.contactInfo}>
    <Subtitle className={styles.email}>
      <a href={`mailto: ${email}`}>{email}</a>
    </Subtitle>
    <Subtitle className={styles.website}>
      <a target="_blank" rel="noopener noreferrer" href={website}>
        {website}
      </a>
    </Subtitle>
  </div>
);

export { DetailContactMe };
