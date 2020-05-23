import React, { FunctionComponent } from "react";
import { useHistory } from "react-router-dom";
import { ErrorPage } from "$components/ErrorPage";
import styles from "./styles.module.scss";

export const InternalServerError: FunctionComponent = () => {
  const history = useHistory();
  return (
    <div className={styles.container}>
      <ErrorPage
        onClickButton={() => history.goBack()}
        errorType="internal server error"
        title="Esta página ha dejado de funcionar"
        imgSrc="images/internalServerError.svg"
        buttonMessage="Cargar de nuevo"
      />
    </div>
  );
};
