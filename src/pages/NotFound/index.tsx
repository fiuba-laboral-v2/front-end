import React, { FunctionComponent } from "react";
import { useHistory } from "react-router-dom";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { ErrorPage } from "$components/ErrorPage";
import { Window } from "$components/Window";

const NotFoundPage: FunctionComponent = () => {
  const history = useHistory();
  return (
    <Window>
      <ErrorPage
        onClickButton={() => history.push(RoutesBuilder.applicant.home())}
        errorType="Not found"
        title="Parece que esta página no existe"
        imgSrc="images/brokenLink.svg"
        buttonMessage="Ir a la página principal"
      />
    </Window>
  );
};

export default NotFoundPage;
