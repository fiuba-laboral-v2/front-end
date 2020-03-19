import React, { FunctionComponent } from "react";
import { useParams } from "react-router-dom";
import { DetailTitle } from "$components/Detail/DetailTitle";
import { getTranslations } from "$queries";
import { useQuery } from "@apollo/react-hooks";

const TitleContainer: FunctionComponent = () => {
  const { id } = useParams();

  const { data: translationsData } = useQuery(getTranslations, {
      variables: {
        paths: [
          "applicant.edit.myDetail",
          "applicant.edit.editing",
          "applicant.edit.explanation"
        ]
      }
    }
  );

  const [
    myDetailTranslation,
    editingTranslation,
    explanationTranslation
  ] = translationsData ? translationsData.getTranslations : ["", "", ""];

  return (
    <DetailTitle
      myDetail={myDetailTranslation}
      explanation={explanationTranslation}
      edit={editingTranslation}
      link={`/applicants/${id}`}
    />
  );
};

export { TitleContainer };
