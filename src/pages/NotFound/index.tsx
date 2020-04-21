import React, { FunctionComponent } from "react";
import { ErrorPage } from "$components/ErrorPage";

const NotFoundPage: FunctionComponent = () => (
  <ErrorPage
    typeError="Not found"
    title="Parece que esta página no existe"
    logo="images/brokenLink.svg"
    buttonMessage="Ir a la página principal"
  />
);

export default NotFoundPage;
