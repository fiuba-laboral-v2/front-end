import React, { FunctionComponent } from "react";
import { IApplicantItemsDetailProps } from "./interface";
import styles from "./styles.module.scss";

const ApplicantItemsDetail: FunctionComponent<IApplicantItemsDetailProps> = (
  {
    items,
    title,
    itemSuffix
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
            {item} {itemSuffix}
          </span>
        ))
    }
  </section>
);

export { ApplicantItemsDetail };
