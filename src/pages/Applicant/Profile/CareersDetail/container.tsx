import React, { Fragment, FunctionComponent } from "react";
import { ICareersContainerProps } from "./interface";
import { CareersDetail } from "./component";
import { GET_TRANSLATIONS } from "$queries";
import { useQuery } from "@apollo/react-hooks";

const CareersDetailContainer: FunctionComponent<ICareersContainerProps> = (
  {
    careers,
    className
  }) => {
  const { data, loading } = useQuery(GET_TRANSLATIONS, {
    variables: {
      paths: [
        "applicant.creditsProgress",
        "applicant.careers"
      ]
    }
  }
  );
  if (loading) return <Fragment/>;

  const [creditsProgressTranslation, careersTitleTranslation] = data.getTranslations;
  return (
    <CareersDetail
      className={className}
      careers={careers}
      careersTitle={careersTitleTranslation}
      creditsProgressTranslation={creditsProgressTranslation}
    />
  );
};

export { CareersDetailContainer };
