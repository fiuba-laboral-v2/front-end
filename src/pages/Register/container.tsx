import React, { FunctionComponent } from "react";
import { useHistory } from "react-router-dom";

import { Register } from "./component";

import { RoutesBuilder } from "$models/RoutesBuilder";

const RegisterContainer: FunctionComponent = () => {
  const history = useHistory();
  return (
    <Register
      onClickRegisterApplicant={() => history.push(RoutesBuilder.applicant.home)}
      onClickRegisterCompany={() => alert("Próximamente en cine")}
    />
  );
};

export { RegisterContainer };
