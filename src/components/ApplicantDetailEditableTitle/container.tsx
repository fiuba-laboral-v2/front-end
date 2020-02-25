import React, { FunctionComponent } from "react";
import { useQuery } from "@apollo/react-hooks";
import { useParams } from "react-router-dom";
import { getTranslations } from "$queries";
import { DetailTitle } from "../Detail/DetailTitle";

const ApplicantDetailEditableTitleContainer: FunctionComponent = () => {
  const { data } = useQuery(getTranslations, {
      variables: {
        paths: ["applicant.explanation", "applicant.title", "edit"]
      }
    }
  );
  const [explanation, title, edit] = data ? data.getTranslations : ["", "", ""];
  const { id } = useParams();

  return (
    <DetailTitle
      myDetail={title}
      explanation={"Ahora puede editar su perfil"}
      edit={"Editando"}
      link={`/applicants/${id}`}
    />
  );
};

export { ApplicantDetailEditableTitleContainer };
