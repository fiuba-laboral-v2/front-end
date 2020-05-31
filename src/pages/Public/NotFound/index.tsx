import React, { FunctionComponent } from "react";
import { ErrorPage } from "$components/ErrorPage";
import { Window } from "$components/Window";

export const NotFound: FunctionComponent = () => (
  <Window>
    <ErrorPage
      title="Parece que esta página no existe"
      icon={<img src={"images/brokenLink.svg"} alt={"Página inexistente"}/>}
    />
  </Window>
);
