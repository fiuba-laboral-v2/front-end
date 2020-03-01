import React, { FunctionComponent } from "react";
import { useParams } from "react-router-dom";
import { DetailTitle } from "$components/Detail/DetailTitle";

const ApplicantDetailEditableTitleContainer: FunctionComponent = () => {
  const { id } = useParams();

  return (
    <DetailTitle
      myDetail={"Editando Mi perfil"}
      explanation={"Ahora puede editar su perfil"}
      edit={"Editando"}
      link={`/applicants/${id}`}
    />
  );
};

export { ApplicantDetailEditableTitleContainer };
