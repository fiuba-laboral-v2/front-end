import React, { FunctionComponent } from "react";
import { useQuery } from "@apollo/react-hooks";
import { getTranslations } from "$queries";
import { DetailTitle } from "../detailTitle";

const ApplicantTitleContainer: FunctionComponent = () => {
  const { data } = useQuery(getTranslations, {
      variables: {
        paths: ["company.explanation", "company.title", "edit"]
      }
    }
  );
  const [explanation, myCompany, edit] = data ? data.getTranslations : ["", "", ""];

  return (
    <DetailTitle
      myDetail={myCompany}
      explanation={explanation}
      edit={edit}
      link={"/applicants/"}
    />
  );
};

export { ApplicantTitleContainer };
