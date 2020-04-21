import React, { FunctionComponent } from "react";
import { ErrorPage } from "$components/ErrorPage";
import logo from "./logo.svg";

export const InternalServerError: FunctionComponent = () => (
  <ErrorPage
    typeError="internal server error"
    title="Esta página ha dejado de funcionar"
    logo={logo}
    buttonMessage="Cargar de nuevo"
  />
);
