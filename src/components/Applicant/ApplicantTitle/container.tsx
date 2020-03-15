import React, { FunctionComponent } from "react";
import { useQuery } from "@apollo/react-hooks";
import { useParams } from "react-router-dom";
import { getTranslations } from "$queries";
import { DetailTitle } from "$components/Detail/DetailTitle";

const ApplicantTitleContainer: FunctionComponent = () => {
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
      explanation={explanation}
      edit={edit}
      link={`/applicants/${id}/edit`}
    />
  );
};

export { ApplicantTitleContainer };
