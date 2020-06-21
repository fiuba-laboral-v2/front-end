import React, { FunctionComponent } from "react";
import { ErrorPage } from "$components/ErrorPage";
import styles from "./styles.module.scss";

export const InternalServerError: FunctionComponent = () => {
  document.title = "Hubo un error desconocido";
  return (
    <div className={styles.container}>
      <ErrorPage
        title="Hubo un error desconocido"
        icon={<img src={"images/internalServerError.svg"} alt={"Error desconocido"}/>}
      />
    </div>
  );
};
