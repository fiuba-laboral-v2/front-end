import React, { FunctionComponent } from "react";
import { useHistory } from "react-router-dom";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { ErrorPage } from "$components/ErrorPage";

const NotFoundPage: FunctionComponent = () => {
  const history = useHistory();
  return (
    <ErrorPage
      goTo={() => history.push(RoutesBuilder.applicant.home())}
      errorType="Not found"
      title="Parece que esta página no existe"
      imgSrc="images/brokenLink.svg"
      imageSize="small"
      buttonMessage="Ir a la página principal"
    />
  );
};

export default NotFoundPage;
