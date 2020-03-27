import React, { FunctionComponent } from "react";
import { ICapabilitiesProps } from "./interface";
import { Tag } from "$components/Tag";
import styles from "./styles.module.scss";

const CapabilitiesDetail: FunctionComponent<ICapabilitiesProps> = (
  {
    capabilities,
    title
  }) => (
  <>
    <span className={styles.title}> {title}</span>
    <section className={styles.items}>
      {
        capabilities.map((capability, index) =>
          <div key={index} className={styles.item}>
            <Tag name={capability.description} />
          </div>
        )
      }
    </section>
  </>
);

export { CapabilitiesDetail };
