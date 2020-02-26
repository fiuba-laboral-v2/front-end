import React, { FunctionComponent, useState } from "react";
import { ApplicantDetailEditable } from "./component";

const ApplicantDetailEditableContainer: FunctionComponent = () => {
  return (
    <ApplicantDetailEditable
      name={"Sebastian"}
      surname={"Blanco"}
      padron={98539}
      description={"Una description del postulante"}
      careers={["Carrera 1 - 3"]}
      capabilities={["Python", "CSS"]}
      translations={
        {
          padron: "Padron",
          capabilities: "Aptitudes",
          careers: "Carreras",
          credits: "Creditos"
        }
      }
    />
  );
};

export { ApplicantDetailEditableContainer };
