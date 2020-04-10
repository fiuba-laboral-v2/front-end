import React, { Fragment, FunctionComponent } from "react";
import styles from "./styles.module.scss";

export const Description: FunctionComponent<IDetailDescriptionProps> = (
  {
    description,
    onClick
  }
) => {
  if (!description) return <Fragment/>;

  return (
    <p className={styles.description} onClick={onClick}>{description}</p>
  );
};

interface IDetailDescriptionProps {
  description?: string;
  onClick?: () => void;
}
