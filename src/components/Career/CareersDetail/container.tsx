import React, { FunctionComponent } from "react";
import { ICareersContainerProps } from "./interface";
import { CareersDetail } from "./component";
import { getTranslations } from "$queries";
import { useQuery } from "@apollo/react-hooks";

const CareersDetailContainer: FunctionComponent<ICareersContainerProps> = (
  {
    careers
  }) => {
  const { data: translationsData } = useQuery(getTranslations, {
      variables: {
        paths: [
          "applicant.creditsProgress",
          "applicant.careers"
        ]
      }
    }
  );

  const [
    creditsProgressTranslation,
    careersTitleTranslation
  ] = translationsData ? translationsData.getTranslations : [""];
  return (
    <CareersDetail
      careers={careers}
      careersTitle={careersTitleTranslation}
      creditsProgressTranslation={creditsProgressTranslation}
    />
  );
};

export { CareersDetailContainer };
