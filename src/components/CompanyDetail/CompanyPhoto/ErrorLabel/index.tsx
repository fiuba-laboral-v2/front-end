import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";

export const ErrorLabel: FunctionComponent<IErrorLabelProps> = ({ url }) => (
  <div>
    <div className={styles.container}>
      <span className={styles.errorLabel}>El link a la imagen es inválido: {url}</span>
    </div>
  </div>
);

interface IErrorLabelProps {
  url: string;
}
