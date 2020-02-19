import React, { FunctionComponent } from "react";
import { useQuery } from "@apollo/react-hooks";
import { getTranslations } from "$queries";
import { DetailTitle } from "../detailTitle";

const ApplicantTitleContainer: FunctionComponent = () => {
  const { data } = useQuery(getTranslations, {
      variables: {
        paths: ["applicant.explanation", "applicant.title", "edit"]
      }
    }
  );
  const [explanation, title, edit] = data ? data.getTranslations : ["", "", ""];

  return (
    <DetailTitle
      myDetail={title}
      explanation={explanation}
      edit={edit}
      link={"/applicants/"}
    />
  );
};

export { ApplicantTitleContainer };
