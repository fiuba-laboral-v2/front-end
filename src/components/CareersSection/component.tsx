import React, { FunctionComponent } from "react";
import { ICareersProps } from "./interface";
import styles from "./styles.module.scss";
import { Subtitle } from "$components/Subtitle";
import { CareersDetail } from "./CareersDetail";

export const CareersSection: FunctionComponent<ICareersProps> = (
  {
    className,
    careers,
    translations
  }
) => (
  <div className={className}>
    <section className={styles.items}>
      <Subtitle>{translations.careersTitle}</Subtitle>
      <CareersDetail careers={careers} className={styles.item}/>
    </section>
  </div>
);
