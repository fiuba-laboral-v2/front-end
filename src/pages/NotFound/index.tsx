import React, { FunctionComponent } from "react";
import { ErrorPage } from "$components/ErrorPage";

const NotFoundPage: FunctionComponent = () => (
  <ErrorPage
    errorType="Not found"
    title="Parece que esta página no existe"
    imgSrc="images/brokenLink.svg"
    buttonMessage="Ir a la página principal"
  />
);

export default NotFoundPage;
