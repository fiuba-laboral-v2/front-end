import React, { FunctionComponent } from "react";
import { ApplicantItemsDetail } from "$components/ApplicantItemsDetail";
import { ICareersProps } from "./interface";
import { ICareer } from "$interfaces/Applicant";

const CareersDetail: FunctionComponent<ICareersProps> = (
  {
    careers,
    careersTitle,
    creditsTitle
  }) => {

  const percentage = (career: ICareer) => {
    career.creditsCount = career.creditsCount || 0;
    return ((career.creditsCount/career.credits)*100).toFixed(2);
  };

  return (
    <ApplicantItemsDetail
      items={
        careers?.map((career: ICareer) =>
          `${career.code} - ${career.description}: ${percentage(career)}`
        )
      }
      title={careersTitle}
      itemSuffix={creditsTitle}
    />
  );
};

export { CareersDetail };
