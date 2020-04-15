import React, { Fragment, FunctionComponent } from "react";
import styles from "./styles.module.scss";

export const Description: FunctionComponent<IDetailDescriptionProps> = ({ description }) => {
  if (!description) return <Fragment/>;

  return (
    <p className={styles.description}>{description}</p>
  );
};

interface IDetailDescriptionProps {
  description?: string;
}
