import React, { FunctionComponent } from "react";

import styles from "./styles.module.scss";

const SpecItem: FunctionComponent<ISpecItemProps> = ({ item, description, children }) => (
  <div className={styles.content}>
    {children}
    <h2>{item}</h2>
    {description && <p>{description}</p>}
  </div>
);

interface ISpecItemProps {
  item: string;
  description?: string;
}

export { SpecItem };
