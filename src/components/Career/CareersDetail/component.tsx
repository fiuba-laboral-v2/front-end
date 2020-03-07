import React, { FunctionComponent } from "react";
import { ItemsDetail } from "$components/ItemsDetail";
import { ICareersProps } from "./interface";
import { ICareer } from "$interfaces/Applicant";

const CareersDetail: FunctionComponent<ICareersProps> = (
  {
    careers,
    careersTitle,
    creditsProgressTranslation
  }) => {

  const percentage = (career: ICareer) => {
    career.creditsCount = career.creditsCount || 0;
    return ((career.creditsCount/career.credits)*100).toFixed(2);
  };

  return (
    <ItemsDetail
      items={
        careers?.map((career: ICareer) =>
          `${career.code} - ${career.description}: ${percentage(career)} ${creditsProgressTranslation}`
        )
      }
      title={careersTitle}
    />
  );
};

export { CareersDetail };
