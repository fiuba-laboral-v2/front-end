import React, { FunctionComponent } from "react";
import { useHistory } from "react-router-dom";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { ErrorPage } from "$components/ErrorPage";
import { Window } from "$components/Window";

export const NotFound: FunctionComponent = () => {
  const history = useHistory();
  return (
    <Window>
      <ErrorPage
        title="Parece que esta página no existe"
        icon={<img src={"images/brokenLink.svg"} alt={"Página inexistente"}/>}
      />
    </Window>
  );
};
