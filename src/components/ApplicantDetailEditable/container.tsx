import React, { FunctionComponent, useState } from "react";
import { Redirect, useParams } from "react-router-dom";
import { ApplicantDetailEditable } from "./component";
import { IApplicant } from "$interfaces/Applicant";

const ApplicantDetailEditableContainer: FunctionComponent = () => {
  const [redirect, setRedirect] = useState(false);
  const { id } = useParams();

  const submit = (applicantProps: IApplicant) => {
    alert(JSON.stringify(applicantProps));
    return applicantProps;
  };

  const cancel = () => {
    return setRedirect(true);
  };

  if (redirect) return (<Redirect to={`/applicants/${id}/`}/>);

  return (
    <ApplicantDetailEditable
      onSubmit={submit}
      onCancel={cancel}
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
