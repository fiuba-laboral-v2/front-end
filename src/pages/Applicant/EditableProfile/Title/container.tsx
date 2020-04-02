import React, { FunctionComponent } from "react";
import { Title } from "$components/Title";
import { GET_TRANSLATIONS } from "$queries";
import { useQuery } from "@apollo/react-hooks";

const TitleContainer: FunctionComponent = () => {
  const { data: translationsData } = useQuery(GET_TRANSLATIONS, {
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
    explanationTranslation
  ] = translationsData ? translationsData.getTranslations : ["", "", ""];

  return (
    <Title
      title={myDetailTranslation}
      subtitle={explanationTranslation}
    />
  );
};

export { TitleContainer };
