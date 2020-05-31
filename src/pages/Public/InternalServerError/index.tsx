import React, { FunctionComponent } from "react";
import { ErrorPage } from "$components/ErrorPage";
import styles from "./styles.module.scss";

export const InternalServerError: FunctionComponent = () => (
  <div className={styles.container}>
    <ErrorPage
      title="Hubo un error desconocido"
      buttonMessage="Ir a la página principal"
      onClickButton={
        () => window.location.href = window.location.pathname + window.location.search
      }
      icon={<img src={"images/internalServerError.svg"} alt={"Error desconocido"}/>}
    />
  </div>
);
