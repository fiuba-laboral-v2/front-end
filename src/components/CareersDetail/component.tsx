import React, { FunctionComponent } from "react";
import { ICareersProps } from "./interface";
import styles from "./styles.module.scss";
import { Subtitle } from "$components/Subtitle";
import { CareersData } from "./CareersData";

export const CareersDetail: FunctionComponent<ICareersProps> = (
  {
    className,
    careers,
    translations
  }) => {
  return (
    <div className={className}>
      <section className={styles.items}>
        <Subtitle>{translations.careersTitle}</Subtitle>
        <CareersData careers={careers} className={styles.item}/>
      </section>
    </div>
  );
};
