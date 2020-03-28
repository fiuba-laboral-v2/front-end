import React, { FunctionComponent } from "react";
import { ICapabilitiesProps } from "./interface";
import { Tag } from "$components/Tag";
import styles from "./styles.module.scss";

const CapabilitiesDetail: FunctionComponent<ICapabilitiesProps> = (
  {
    capabilities,
    title,
    className
  }) => (
  <div className={className}>
    <span className={styles.title}> {title}</span>
    <section className={styles.items}>
      {
        capabilities.map((capability, index) =>
          <Tag key={index} className={styles.item} name={capability.description} />
        )
      }
    </section>
  </div>
);

export { CapabilitiesDetail };
