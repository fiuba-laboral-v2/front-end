import React, { FunctionComponent } from "react";
import { IApplicantItemsDetailProps } from "./interface";
import styles from "./styles.module.scss";

const ApplicantItemsDetail: FunctionComponent<IApplicantItemsDetailProps> = (
  {
    items,
    title
  }
) => (
  <section className={styles.items}>
    <span
      className={styles.title}> {title}:
    </span>
    {
      items?.map((item, index) =>
        (
          <span key={index} className={styles.item}>
            {item}
          </span>
        ))
    }
  </section>
);

export { ApplicantItemsDetail };
