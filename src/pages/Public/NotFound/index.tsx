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
        onClickButton={() => history.push(RoutesBuilder.applicant.offerList())}
        errorType="Not found"
        title="Parece que esta página no existe"
        imgSrc="images/brokenLink.svg"
        buttonMessage="Ir a la página principal"
      />
    </Window>
  );
};
