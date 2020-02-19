import React, { FunctionComponent } from "react";
import { ApplicantDetail } from "./component";

const ApplicantDetailContainer: FunctionComponent = () => {
  return (
    <ApplicantDetail
      name={"Sebastian"}
      surname={"Blanco"}
      padron={98539}
      description={`
      Me considero una graciosa, con talentos de buen humor. Tengo promedio 8 en
      la facultad y por eso me considero una persona sabia con aires de
      grandeza.
      `}
      credits={233}
      careers={["Ingenieria Informatica", "Ingenieria Civil"]}
      capabilities={["Python", "Node", "css", "Auth security"]}
    />
  );
};

export { ApplicantDetailContainer };
