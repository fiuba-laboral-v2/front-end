import React, { FunctionComponent } from "react";
import { Subtitle } from "$components/Subtitle";
import { IItemsDetailProps } from "./interface";
import styles from "./styles.module.scss";

const ItemsDetail: FunctionComponent<IItemsDetailProps> = (
  {
    items,
    title
  }
) => (
  <section className={styles.items}>
    <Subtitle>{title}</Subtitle>
    {
      items?.map((item, index) =>
        <span key={index} className={styles.item}>{item}</span>
      )
    }
  </section>
);

export { ItemsDetail };
