import React, { FunctionComponent } from "react";
import { useHistory } from "react-router-dom";
import { ErrorPage } from "$components/ErrorPage";

export const InternalServerError: FunctionComponent = () => {
  const history = useHistory();
  return (
    <ErrorPage
      goTo={() => history.goBack()}
      errorType="internal server error"
      title="Esta página ha dejado de funcionar"
      imgSrc="images/internalServerError.svg"
      imageSize="large"
      buttonMessage="Cargar de nuevo"
    />
  );
};
