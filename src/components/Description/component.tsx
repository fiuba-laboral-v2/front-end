import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";

export const Description: FunctionComponent<IDetailDescriptionProps> = (
  {
    description,
    onClick
  }
) => {
  if (!description) return null;

  return (
    <p className={styles.description} onClick={onClick}>{description}</p>
  );
};

interface IDetailDescriptionProps {
  description?: string;
  onClick?: () => void;
}
