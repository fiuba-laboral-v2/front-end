import React, { FunctionComponent } from "react";
import { ApplicantDetailEditable } from "./component";
import { IApplicant } from "./interface";

const ApplicantDetailEditableContainer: FunctionComponent = () => {
  const submit = (applicantProps: IApplicant) => {
    alert(JSON.stringify(applicantProps));
    return applicantProps;
  };

  return (
    <ApplicantDetailEditable
      onSubmit={submit}
      applicant={
        {
          name: "Sebastian",
          surname: "Blanco",
          padron: 98459,
          description: "Una description del postulante",
          careers: [
            {
              code: "10",
              description: "Ingenieria Informatica",
              credits: 246
            }
          ],
          capabilities: [
            {
              description: "Python"
            },
            {
              description: "CSS"
            },
            {
              description: "Node"
            },
            {
              description: "RoR"
            },
            {
              description: "C"
            }
          ]
        }
      }
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
