import React, { FunctionComponent } from "react";
import { useHistory } from "react-router-dom";
import { ErrorPage } from "$components/ErrorPage";
import styles from "./styles.module.scss";

export const InternalServerError: FunctionComponent = () => {
  const history = useHistory();
  return (
    <div className={styles.container}>
      <ErrorPage
        title="Esta página ha dejado de funcionar"
        buttonMessage="Cargar de nuevo"
        onClickButton={() => history.goBack()}
        icon={<img src={"images/internalServerError.svg"} alt={"Error desconocido"}/>}
      />
    </div>
  );
};
