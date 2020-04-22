import React, { FunctionComponent } from "react";
import { ErrorPage } from "$components/ErrorPage";
import image from "./image.svg";

export const InternalServerError: FunctionComponent = () => (
  <ErrorPage
    errorType="internal server error"
    title="Esta página ha dejado de funcionar"
    imgSrc={image}
    buttonMessage="Cargar de nuevo"
  />
);
